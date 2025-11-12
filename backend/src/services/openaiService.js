// backend/src/services/openaiService.js

const OpenAI = require('openai');

const generateText = async (prompt) => {
  // First, check if the API key is even there
  if (!process.env.OPENAI_API_KEY) {
    console.error("CRITICAL: OPENAI_API_KEY is not set in the .env file!");
    throw new Error("Server configuration error: OpenAI API key is missing.");
  }

  console.log("Initializing OpenAI with API key...");
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    console.log("Sending prompt to OpenAI:", prompt);
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    console.log("OpenAI request successful.");
    return response.choices[0].message.content;
  } catch (error) {
    // Log the full error object for debugging
    console.error("Direct error from OpenAI API:", error.message);
    console.error("Full error object:", error);
    throw new Error("Failed to generate text from AI.");
  }
};

module.exports = {
  generateText,
};