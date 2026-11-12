const http = require('http');
const { spawn } = require('child_process');

const pages = [
  { name: 'descartes', path: 'work/descartes' },
  { name: 'tiny-bits-of-love', path: 'work/tiny-bits-of-love' },
  { name: 'mazeflower', path: 'work/mazeflower' },
  { name: 'military-pcs', path: 'work/military-pcs' },
  { name: 'ucollabit', path: 'work/ucollabit' },
  { name: 'webhosters', path: 'work/webhosters' }
];

const widths = [360, 390, 430, 768];

async function checkPage(path, width) {
  const port = 9228;
  const chromeProc = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1000));

  try {
    const list = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${port}/json`, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const target = list.find(t => t.type === 'page');
    if (!target) throw new Error('No page target');

    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (event) => {
          const res = JSON.parse(event.data);
          if (res.id === id) {
            ws.removeEventListener('message', handler);
            resolve(res.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: width,
      height: 800,
      deviceScaleFactor: 1,
      mobile: true
    });

    await send('Page.navigate', { url: 'http://localhost:3000/' + path });
    await new Promise(r => setTimeout(r, 1200));

    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const w = ${width};
        const bad = [];
        for (const el of document.querySelectorAll('*')) {
          const r = el.getBoundingClientRect();
          if (r.right > w + 1) {
            if (['HTML', 'BODY', 'DIV#main-content'].includes(el.tagName + (el.id ? '#' + el.id : ''))) continue;
            bad.push((el.tagName + (el.id ? '#' + el.id : '') + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').slice(0, 2).join('.') : '')).slice(0, 60));
          }
        }
        return JSON.stringify({
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
          visualWidth: window.visualViewport ? window.visualViewport.width : window.innerWidth,
          overflow: document.documentElement.scrollWidth > w,
          badCount: bad.length,
          culprits: bad.slice(0, 3)
        });
      })()`,
      returnByValue: true
    });

    ws.close();
    return JSON.parse(evalRes.result.value);
  } finally {
    chromeProc.kill();
  }
}

async function runAll() {
  console.log('=== CASE STUDY MOBILE OVERFLOW VERIFICATION ===');
  let failures = 0;
  for (const p of pages) {
    for (const w of widths) {
      try {
        const res = await checkPage(p.path, w);
        if (res.overflow || res.badCount > 0) {
          failures++;
          console.log(`❌ [FAIL] ${p.name} @ ${w}px: scrollWidth=${res.scrollWidth}, target=${w}, badCount=${res.badCount}`);
          console.log(`    Culprits:`, res.culprits);
        } else {
          console.log(`✅ [PASS] ${p.name} @ ${w}px: scrollWidth=${res.scrollWidth} <= ${w} (viewport=${res.visualWidth})`);
        }
      } catch (err) {
        console.error(`💥 Error testing ${p.name} @ ${w}px:`, err.message);
        failures++;
      }
    }
  }
  console.log(`\nAudit completed: ${failures === 0 ? 'ALL VIEWPORTS PASSED WITH ZERO OVERFLOW' : failures + ' viewports failed'}`);
}

runAll();
