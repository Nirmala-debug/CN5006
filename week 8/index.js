const mongoose = require('mongoose');

// Define the schema for the "person" collection
const personSchema = new mongoose.Schema({
  Name: String,
  Age: Number,
  Salary: Number,  // Note the correct spelling
  Gender: String,
});

// Create a model from the schema
const Person = mongoose.model('Person', personSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Week8')
  .then(() => {
    console.log('Connected to MongoDB');

    // Find all documents before the update
    Person.find({ Gender: "Female" }).then(docs => {
      console.log("Documents before update (Gender: Female):", docs);
    });

    // Update all documents with Gender 'Female' and set Salary to 5555
    Person.updateMany({ Gender: "Female" }, { $set: { Salary: 5555 } })
      .exec()
      .then(result => {
        console.log("Update successful");
        console.log(result); // Logs the result of the update operation

        // Show how many documents were modified
        console.log(`${result.modifiedCount} documents were updated.`);
      })
      .catch(error => {
        console.log('Error during update:', error);
      });
  })
  .catch(error => {
    console.log('Error connecting to MongoDB:', error);
  });
