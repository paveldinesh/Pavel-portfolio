const http = require('http');
const { spawn } = require('child_process');

async function checkOverflow(url, width, height) {
  const chromePath = '\"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\"';
  // We can launch chrome with remote debugging
  const port = 9222;
  const chromeProc = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--window-size=${width},${height}`,
    url
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const list = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${port}/json`, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const page = list.find(t => t.type === 'page');
    if (!page || !page.webSocketDebuggerUrl) throw new Error('No page found');

    const WebSocket = require('ws') || null;
    // If ws is not installed, we can also evaluate via HTTP or other means
  } catch (err) {
    // fallback
  } finally {
    chromeProc.kill();
  }
}

