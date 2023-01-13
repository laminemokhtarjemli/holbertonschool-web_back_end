const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/students', async (req, res) => {
  try {
    const { students, fields } = await countStudents(process.argv[2]);
    let response = `Number of students: ${students.length}\n`;
    for (const student of students) {
      fields.add(student.field);
    }

    for (const field of fields) {
      const data = students
        .filter((s) => s.field === field)
        .map((s) => s.firstname);

      response += `Number of students in ${field}: ${data.length}. List: ${data.join(', ')}\n`;
    }
    res.send(response);
  } catch (err) {
    res.send('Error: Cannot load the database');
  }
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
