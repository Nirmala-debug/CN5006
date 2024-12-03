var express = require("express");
var app = express();

// Middleware function for body parsing
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Default route
app.get('/', function(req, res) {
    res.send("Hello, this is my first Express application!");
});

// Start the server
app.listen(5000, function() {
    console.log("Server is running on port 5000");
});

// About route
app.get('/about', function(req, res) {
    res.send("This is a basic Express application");
});

// Users route
app.get('/users/:userId/books/:bookId', function(req, res) {
    res.send(req.params);
});

// Updated /GetStudentid/:id route without JSON file
app.get('/GetStudentid/:id', (req, res) => {

    const students = {
        "Student1": { "name": "Alice", "age": 21 },
        "Student2": { "name": "Bob", "age": 22 },
        "Student3": { "name": "Charlie", "age": 23 },
        "Student4": { "name": "David", "age": 24 }
    };

    const student = students["Student" + req.params.id];
    if (student) {
        res.json(student);
    } else {
        res.json({
            status: true,
            Status_Code: 200,
            "Requested At": new Date().toISOString(),
            "Request URL": req.url,
            "Request Method": req.method,
            studentData: "Student not found"
        });
    }
});
app.get('/studentinfo',function(req,res)
{
res.sendFile('StudentInfo.html', { root: __dirname });
})
app.post('/submit-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    var age = req.body.myAge;
    var gender = req.body.gender;

    // Check if req.body.Qual is defined and handle it properly
    var qualifications = req.body.Qual;
    if (Array.isArray(qualifications)) {
        qualifications = qualifications.join(', '); // If it's an array, join it
    } else if (qualifications) {
        qualifications = qualifications; // If it's a single value, use it directly
    } else {
        qualifications = 'None'; // If no qualifications were selected
    }

    res.send({
        status: true,
        message: 'Form Details',
        data: {
            name: name,
            age: age,
            gender: gender,
            qualifications: qualifications,
        }
    });
});
