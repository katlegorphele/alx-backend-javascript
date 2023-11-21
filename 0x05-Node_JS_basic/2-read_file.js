const fs = require('fs');

const countStudents = (path) => {
  try {
    // read data
    const studentData = fs.readFileSync(path, 'utf8');
    const students = [];

    const transformedData = studentData.trim().split('\n').slice(1);
    transformedData.forEach((data) => {
      // split by ,
      const [firstname, lastname, age, field] = data.split(',');
      if (firstname && lastname && age && field) {
        students.push({ firstname, lastname, age, field });
      }
    });

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((student) => {
      const { firstname, field } = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });


    for (const field in fields) {
      console.log(
        `Number of students in ${field}: ${
          fields[field].length
        }. List: ${fields[field].join(', ')}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;