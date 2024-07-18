const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI('AIzaSyBIJOPH26-9JVs6rw8801a4IGyB65ZUtQQ'); // Use environment variable for API key

async function getModel(modelName) {
  try {
    const model = await genAI.getGenerativeModel({ model: modelName });
    return model;
  } catch (error) {
    console.error('Error getting model:', error.message);
    throw error;
  }
}

async function generateContent(inputText, modelName) {
  try {
    const model = await getModel(modelName);
    const chat = await model.startChat({ history: [] });
    const result = await chat.sendMessage(inputText);
    return await result.response.text();
  } catch (error) {
    console.error('Error generating content:', error.message);
    throw error;
  }
}

module.exports = { generateContent };

