const express = require('express');
const app = express();
__path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

require('events').EventEmitter.defaultMaxListeners = 500;

// Import routes
let server = require('./qr'),
    code = require('./pair');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (for HTML/CSS/JS)
app.use(express.static(__path));

// ✅ Mount your backend routes
app.use('/qr', server);
app.use('/code', code);

// ✅ Serve your HTML pages
app.get('/pair', (req, res) => {
  res.sendFile(__path + '/pair.html');
});

app.get('/', (req, res) => {
  res.sendFile(__path + '/main.html');
});

// ✅ Optionally, direct page for QR preview (not API)
app.get('/qrpage', (req, res) => {
  res.sendFile(__path + '/qr.html');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`
🚀 DML-Tech is Live!

✅ Server running at: http://localhost:${PORT}
  `);
});

module.exports = app;
