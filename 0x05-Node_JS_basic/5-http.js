const fs = require('fs');
const http = require('http');

const DBPATH = process.argv[2].toString();
const PORT = 1245;

const countStudents = async (path) => {
  try {
    const studentData = await fs.promises.readFile(path, 'utf8');
    const students = [];

    const transformedData = studentData.trim().split('\n').slice(1);
    transformedData.forEach((data) => {
      const [firstname, lastname, age, field] = data.split(',');
      if (firstname && lastname && age && field) {
        students.push({ firstname, lastname, age, field });
      }
    });

    let result = `Number of students: ${students.length}\n`;

    const fields = {};

    students.forEach((student) => {
      const { firstname, field } = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });


    for (const field in fields) {
      result += `Number of students in ${field}: ${
        fields[field].length
      }. List: ${fields[field].join(', ')}\n`;
    }
    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(DBPATH)
      .then((data) => {
        const transformedData = data;
        res.end(transformedData.toString());
      })
      .catch((err) => {
        res.statusCode = 404;
        res.end(err.message.toString());
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;