// backend/index.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

// Route to handle incoming requests
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

// Route to handle image upload

app.post('/upload', upload.single('image'), (req, res) => {
  console.log('File uploaded:', req.file);
  res.json({ message: 'Image uploaded successfully' }); // Send a JSON response
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
