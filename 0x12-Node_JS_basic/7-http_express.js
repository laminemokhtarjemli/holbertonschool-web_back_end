const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) throw err;
    let students = data.split('\n');
    students = students.filter(student => student !== '');
    res.send(`This is the list of our students: ${students.join(', ')}`);
  });
});

app.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});

module.exports = app;

