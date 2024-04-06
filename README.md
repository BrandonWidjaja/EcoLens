_This project was created in 3 days during CISSA CodeBrew 2024_
# EcoLens

EcoLens is an innovative mobile application designed to help users understand how to recycle different parts of objects by simply taking pictures. With EcoLens, recycling becomes more accessible and intuitive, promoting environmental sustainability in our daily lives.

## Features

- **Object Recognition**: Use the camera to take pictures of objects, and EcoLens will identify the object and provide recycling instructions for its parts.
- **Recycling Guidance**: Get detailed information on how to recycle each part of the object, promoting proper recycling practices.
- **Environmentally Conscious**: Encourages users to adopt eco-friendly habits by making recycling information easily accessible.

## How It Works

1. **Capture Image**: Open the EcoLens app and capture a picture of an object you want to recycle.
2. **Object Analysis**: EcoLens analyzes the image using AI computer vision models.
3. **Recycling Instructions**: Receive detailed instructions on how to recycle each part of the object sustainably.

## Technologies Used

- **React Native**: EcoLens is developed using React Native framework for cross-platform compatibility.
- **Expo**: Utilizes Expo platform for easy development and deployment of React Native apps.
- **Machine Learning**: Employs OpenAIs GPT 4 Vision API for image recognition and GPT 4 Completion API for recycling guidance.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BrandonWidjaja/EcoLens.git
   
2. Install Dependencies

   ```bash
   cd EcoLens
   npm i
   cd api
   npm i
   
3. Create .env file in root folder. Insert the following:

   ```bash
   API_KEY = "YOUR_OPENAI_API_KEY"
   EXPO_PUBLIC_MAPS_API_KEY= "YOUR_GOOGLEMAPS_API_KEY"
   EXPO_PUBLIC_MY_IP = "YOUR_IPV4_KEY"

4. Create a folder named 'uploads' in root folder
   
5. Start backend and frontend app from root folder

   ```bash
   node api/index.js
   npx expo start
  
4. Download Expo Go on mobile device and scan the QR code in the console
  

