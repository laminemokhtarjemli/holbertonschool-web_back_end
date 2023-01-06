const express = require('express');
const fs = require('fs');

const port = 1245;

// Create an Express app
const app = express();

// Set up a route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Set up a route for the '/students' endpoint
app.get('/students', (req, res) => {
  const database = process.argv[2];
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) throw err;
    let students = data.split('\n');
    students = students.filter(student => student !== '');
    res.send(`This is the list of our students: ${students.join(', ')}`);
  });
});

// Start the HTTP server
app.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});

// Export the app variable
module.exports = app;
