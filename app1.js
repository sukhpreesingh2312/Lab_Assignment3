// Import the express library
const express = require('express');
const app = express();
const port = 3000;

// Define a GET route for the home page
app.get('/', (req, res) => {
  res.send('<h1>Group Names</h1><ul><li>Group 1</li><li>Group 2</li><li>Group 3</li><li>Group 4</li><li>Group 5</li><li>Group 6</li></ul>');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
