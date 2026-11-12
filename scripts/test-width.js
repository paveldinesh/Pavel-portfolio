const { spawn } = require('child_process');
const http = require('http');

async function test(width, path = 'work/descartes') {
  const p = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9226',
    '--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    'about:blank'
  ]);
  await new Promise(r => setTimeout(r, 1200));
  const list = await new Promise((res, rej) => http.get('http://127.0.0.1:9226/json', r => {
    let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
  }).on('error', rej));
  const page = list.find(t => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 1;
  const send = (m, params = {}) => new Promise(res => {
    const i = id++;
    const h = e => { const d = JSON.parse(e.data); if (d.id === i) { ws.removeEventListener('message', h); res(d.result); } };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: i, method: m, params }));
  });
  
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: width,
    height: 800,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' + path });
  await new Promise(r => setTimeout(r, 1500));

  const out = await send('Runtime.evaluate', {
    expression: `(() => {
      const w = ${width};
      const bad = [];
      for (const el of document.querySelectorAll('*')) {
        const r = el.getBoundingClientRect();
        if (r.right > w + 0.5) {
          bad.push({
            tag: el.tagName,
            id: el.id,
            className: el.className ? String(el.className) : '',
            right: Math.round(r.right),
            width: Math.round(r.width),
            text: (el.innerText || '').slice(0, 30),
            outer: el.outerHTML.slice(0, 100)
          });
        }
      }
      return JSON.stringify({
        scrollWidth: document.documentElement.scrollWidth,
        bad
      });
    })()`,
    returnByValue: true
  });
  console.log(`Width ${width} for ${path}:`, out.result.value);
  ws.close();
  p.kill();
}

async function run() {
  await test(360, 'work/ucollabit');
}
run();
