const { spawn } = require('child_process');
const http = require('http');

async function check() {
  const p = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9229',
    'http://localhost:3000/work/descartes'
  ]);
  await new Promise(r => setTimeout(r, 1200));
  const list = await new Promise((res, rej) => http.get('http://127.0.0.1:9229/json', r => {
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
  
  await send('Emulation.setDeviceMetricsOverride', { width: 360, height: 800, deviceScaleFactor: 1, mobile: true });
  await new Promise(r => setTimeout(r, 500));

  const out = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.createElement('div');
      el.className = 'hidden';
      document.body.appendChild(el);
      const hiddenDisplay = window.getComputedStyle(el).display;
      return {
        hiddenDisplay,
        hasHiddenClassInStyles: Array.from(document.querySelectorAll('style, link[rel="stylesheet"]')).map(s => s.outerHTML.slice(0, 100))
      };
    })()`,
    returnByValue: true
  });
  console.log(out.result.value);
  ws.close();
  p.kill();
}
check();
