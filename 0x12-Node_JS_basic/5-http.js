const http = require('http');
const fs = require('fs');
const csv = require('csv-parser');

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        let csvFile = process.argv[2];
        let data = {};
        data["CS"] = [];
        data["SWE"] = [];
        fs.createReadStream(csvFile)
            .pipe(csv())
            .on('data', (row) => {
                if(row.Department === "CS"){
                    data["CS"].push(row.Name);
                }else if(row.Department === "SWE"){
                    data["SWE"].push(row.Name);
                }
            })
            .on('end', () => {
                res.end(`This is the list of our students\nNumber of students: ${data["CS"].length + data["SWE"].length}\nNumber of students in CS: ${data["CS"].length}. List: ${data["CS"].join(', ')}\nNumber of students in SWE: ${data["SWE"].length}. List: ${data["SWE"].join(', ')}`);
            });
    } else {
        res.end('404 - Not Found');
    }
});

app.listen(1245);
console.log('Server listening on port 1245');
module.exports = app;
