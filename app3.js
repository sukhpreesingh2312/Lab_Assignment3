const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// Middleware to parse request body
app.use(express.json());

// Add the 4 CRUD operations

// POST method example (Create operation)
app.post('/add-group', (req, res) => {
  const newGroup = req.body; // Assuming the request body contains the new group object
  // This is a simplified example; you should implement actual logic to update your JSON file or database
  console.log(newGroup); // Log the new group to the console for demonstration
  res.send('Group added');
});

// Other CRUD operations (PUT, GET, DELETE) would be defined similarly

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
