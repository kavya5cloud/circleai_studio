// backend/src/controllers/generateController.js

const generateTextController = async (req, res) => {
  try {
    console.log("--- PING! Request received at /api/generate/text ---");
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    console.log("Prompt was:", prompt);
    console.log("Sending back a hardcoded success response.");

    // We are NOT calling the OpenAI service here
    res.status(200).json({
      prompt,
      result: "This is a test response. The AI service is not being called.",
    });
  } catch (error) {
    console.error("!!! ERROR IN PING CONTROLLER !!!");
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  generateTextController,
};