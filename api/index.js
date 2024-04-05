// backend/index.js

const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const base64 = require("base64-js");
const axios = require("axios");
const app = express();
const PORT = 3000;
const OpenAI = require("openai");

// Import dotenv and configure
require("dotenv").config();
app.use(express.json());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
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

// Route to handle image upload
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imagePath = req.file.path;
    const base64Image = encodeImage(imagePath);

    const apiEndpoint = "https://api.openai.com/v1/chat/completions";
    const apiKey = process.env.API_KEY;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    console.log("Requesting from API\n");
    const payload = {
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `What is this object made of and how can I recycle each part? 
                      If not a recyclable object state non recyclable along with what the object is. 
                      Limit your response to 200 tokens.`,
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
                detail: "low",
              },
            },
          ],
        },
      ],
      max_tokens: 300,
      temperature: 0.2,
    };

    const response = await axios.post(apiEndpoint, payload, { headers });

    console.log("API Response:", response.data);
    const generatedMessage = response.data.choices[0].message.content;
    console.log("Generated message:", generatedMessage);

    res.json({ message: generatedMessage });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Failed to upload image" });
  }
});

app.post("/search", async (req, res) => {
  try {
    console.log(req.body);
    const { text } = req.body;
    console.log(text);
    console.log("Requesting from API\n");

    const openai = new OpenAI({
      apiKey: process.env.API_KEY,
    });

    const promptText = `How do I recycle ${text}. 
                        Make it short and concise, under 200 tokens.`;
    console.log(promptText);

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: promptText }],
      model: "gpt-3.5-turbo",
    });
    console.log("API Response:", completion);
    response = completion.choices[0].message.content;
    console.log("Message:", response);
    const generatedMessage = response;

    res.json({ message: generatedMessage });
  } catch (error) {
    console.error("Error searching text:", error);
    res.status(500).json({ error: "Failed to search text" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
