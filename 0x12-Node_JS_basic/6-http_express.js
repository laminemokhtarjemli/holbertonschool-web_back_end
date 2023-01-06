const express = require('express');

const port = 1245;

// Create an Express app
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});

module.exports = app;
