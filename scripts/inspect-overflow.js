const { spawn } = require('child_process');
const http = require('http');

async function inspectOverflow(width, path) {
  const p = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9227',
    'about:blank'
  ]);
  await new Promise(r => setTimeout(r, 1200));
  const list = await new Promise((res, rej) => http.get('http://127.0.0.1:9227/json', r => {
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
    deviceScaleFactor: 1,
    mobile: true
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' + path });
  await new Promise(r => setTimeout(r, 2000));

  const out = await send('Runtime.evaluate', {
    expression: `(() => {
      const w = ${width};
      const bad = [];
      for (const el of document.querySelectorAll('*')) {
        const r = el.getBoundingClientRect();
        if (r.right > w + 1 || r.width > w + 1) {
          // Ignore html, body, main wrapper if they just stretch
          if (['HTML', 'BODY', 'DIV#main-content'].includes(el.tagName + (el.id ? '#' + el.id : ''))) continue;
          bad.push({
            tag: el.tagName,
            id: el.id,
            className: (el.className && typeof el.className === 'string') ? el.className.split(' ').slice(0, 3).join('.') : '',
            right: Math.round(r.right),
            width: Math.round(r.width)
          });
        }
      }
      return JSON.stringify({
        viewportWidth: window.visualViewport ? window.visualViewport.width : window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        badCount: bad.length,
        firstBad: bad.slice(0, 8)
      });
    })()`
  });
  console.log(`[INSPECT ${path} @ ${width}px]`, out.result.value);
  ws.close();
  p.kill();
}

async function run() {
  await inspectOverflow(360, 'work/descartes');
  await inspectOverflow(360, 'work/tiny-bits-of-love');
  await inspectOverflow(360, 'work/mazeflower');
  await inspectOverflow(360, 'work/military-pcs');
  await inspectOverflow(360, 'work/ucollabit');
  await inspectOverflow(360, 'work/webhosters');
}
run();
