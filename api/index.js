// backend/index.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const base64 = require('base64-js');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Import dotenv and configure
require('dotenv').config();

// Access the API_KEY variable
const apiKey = process.env.API_KEY;

// Now you can use the apiKey variable in your code
console.log(apiKey); 


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

// Function to encode the image to base64
function encodeImage(imagePath) {
  const imageData = fs.readFileSync(imagePath);
  return base64.fromByteArray(imageData);
}

// Route to handle incoming requests
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

// Route to handle image upload
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const imagePath = req.file.path;
    const base64Image = encodeImage(imagePath);

    const apiEndpoint = "https://api.openai.com/v1/chat/completions";
    const apiKey = process.env.API_KEY;

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    };

    const payload = {
      "model": "gpt-4-vision-preview",
      "messages": [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": "What is this object made of and how can I recycle each part? If not a recyclable object state non recyclable along with what the object is. Limit your response to 200 tokens."
            },
            {
              "type": "image_url",
              "image_url": {
                "url": `data:image/jpeg;base64,${base64Image}`,
                "detail": 'low'
              }
            }
          ]
        }
      ],
      "max_tokens": 300,
      "temperature": 0.2
    };

    const response = await axios.post(apiEndpoint, payload, { headers });

    console.log('API Response:', response.data);
    const generatedMessage = response.data.choices[0].message;
    console.log('Generated message:', generatedMessage);

    res.json({ message: 'Image uploaded and processed successfully' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
