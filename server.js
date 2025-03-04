/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config();
const next = require('next');

const port = process.env.NEXT_PUBLIC_APP_PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const { createServer } = require('http');
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
