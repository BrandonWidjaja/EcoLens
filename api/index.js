// backend/index.js

const express = require('express');
const app = express();
const PORT = 3000;

// Route to handle incoming requests
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
