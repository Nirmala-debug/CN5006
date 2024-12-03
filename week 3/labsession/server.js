const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001;

// Middleware to parse URL-encoded data (form data)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  // To handle JSON requests

// Serve static files (like your HTML form) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'studentinfo.html'));
});

// Route to handle form submission
app.post('/submit-data', (req, res) => {
    // Assuming you are getting the form data from req.body
    const { firstName, lastName, email, myAge, gender, Qual } = req.body;

    // Ensure Qual is an array before using join()
    const qualifications = Array.isArray(Qual) ? Qual.join(", ") : Qual;

    // Now you can safely use qualifications
    const response = {
        status: true,
        message: "Form Details",
        data: {
            name: `${firstName} ${lastName}`,
            age: myAge,
            gender: gender,
            Qualification: qualifications
        }
    };

    // Send the response back to the client
    res.json(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
