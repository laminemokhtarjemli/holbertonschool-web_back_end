const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];
const port = 1245;

const requestListener = async (req, res) => {
  switch (req.url) {
    case '/students':
      res.writeHead(200);
      try {
        const students = await countStudents(DATABASE);
        res.write(`This is the list of our students\n`);
        res.write(students.join('\n'));
      } catch (error) {
        res.write(`Error: ${error.message}`);
      }
      res.end();
      break;
    default:
      res.writeHead(200);
      res.end('Hello Holberton School!');
  }
};

const server = http.createServer(requestListener);
server.listen(port, () => { console.log(`Listening on port ${port}`); });
