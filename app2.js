const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// Define a GET route to display JSON data
app.get('/groups', (req, res) => {
  fs.readFile('./data/data.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the data file');
      return;
    }
    res.type('json').send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
