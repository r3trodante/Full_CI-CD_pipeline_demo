const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>EMC Node.js App</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
        }
        h1 {
          font-size: 48px;
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Congratulations from EMC Node.js App!! All the Best!</h1>
    </body>
    </html>
  `);
});

if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

module.exports = server; // Export for test use
