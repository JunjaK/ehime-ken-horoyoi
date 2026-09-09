import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve('dist');
const port = Number(process.env.PORT || 9000);
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.json': 'application/json' };

createServer(async (req, res) => {
  const send = (status, text) => { res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(text); };
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(405, 'Method not allowed');
  const url = new URL(req.url || '/', 'http://localhost');
  if (url.pathname === '/api/health') return send(200, 'ok');

  try {
    const path = resolve(root, `.${decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname)}`);
    if (!path.startsWith(root + sep)) return send(404, 'Not found');
    const body = await readFile(path);
    res.writeHead(200, { 'Content-Type': mime[extname(path)] || 'application/octet-stream', 'Cache-Control': path.includes(`${sep}_astro${sep}`) ? 'public, max-age=31536000, immutable' : 'no-cache', 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { send(404, 'Not found'); }
}).listen(port, process.env.HOST || '127.0.0.1', () => console.log(`ehime-horoyoi listening on port ${port}`));
