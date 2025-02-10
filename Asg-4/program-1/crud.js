const http = require('http');
const fs = require('fs');
const path = './students.json';

// Utility function to read file data
function readStudentFile() {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
  }
  const data = fs.readFileSync(path);
  return JSON.parse(data);
}

// Utility function to write data to file
function writeStudentFile(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
  // Set content type
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/students' && req.method === 'GET') {
    // GET all students
    const students = readStudentFile();
    res.end(JSON.stringify(students));

  } else if (req.url === '/students' && req.method === 'POST') {
    // POST a new student
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const newStudent = JSON.parse(body);
      const students = readStudentFile();
      students.push(newStudent);
      writeStudentFile(students);
      res.statusCode = 201;
      res.end(JSON.stringify({ message: 'Student added successfully' }));
    });

  } else if (req.url.startsWith('/students/') && req.method === 'PUT') {
    // PUT update a student
    const id = parseInt(req.url.split('/')[2]);
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const updatedStudent = JSON.parse(body);
      const students = readStudentFile();
      const index = students.findIndex(student => student.id === id);

      if (index !== -1) {
        students[index] = { ...students[index], ...updatedStudent };
        writeStudentFile(students);
        res.end(JSON.stringify({ message: 'Student updated successfully' }));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Student not found' }));
      }
    });

  } else if (req.url.startsWith('/students/') && req.method === 'DELETE') {
    // DELETE a student
    const id = parseInt(req.url.split('/')[2]);
    const students = readStudentFile();
    const filteredStudents = students.filter(student => student.id !== id);

    if (students.length !== filteredStudents.length) {
      writeStudentFile(filteredStudents);
      res.end(JSON.stringify({ message: 'Student deleted successfully' }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: 'Student not found' }));
    }

  } else {
    // Handle 404 Not Found
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});