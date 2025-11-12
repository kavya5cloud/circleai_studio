// frontend/components/PromptBox.js

// 1. Import useState from React to manage the component's state
import { useState } from 'react';

// 2. Define the main component
export default function PromptBox() {
  // 3. Set up state variables for the prompt, the result, and loading status
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 4. This function is called when the "Generate" button is clicked
  const generateText = async () => {
    // Don't do anything if the prompt is empty
    if (!prompt) return;

    // Start loading and clear the previous result
    setIsLoading(true);
    setResult('');

    try {
      // Send the prompt to our backend API using fetch
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/generate/text`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }), // Send the prompt in the request body
      });

      // Parse the JSON response from the server
      const data = await response.json();
      
      // Set the AI's response into our state
      setResult(data.result);
    } catch (error) {
      // If there's an error, show a message to the user
      setResult('Failed to generate text. Please try again.');
      console.error(error);
    } finally {
      // Stop loading, whether the request succeeded or failed
      setIsLoading(false);
    }
  };

  // 5. Return the JSX to render the component's UI
  return (
    <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">AI Text Generator</h2>
      
      {/* Textarea for the user's input */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you want to create..."
        className="w-full p-3 border rounded-md resize-none h-32"
      />
      
      {/* Button to trigger the generation */}
      <button
        onClick={generateText}
        disabled={isLoading || !prompt}
        className="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isLoading ? 'Generating...' : 'Generate'}
      </button>

      {/* This section only appears if there is a result to show */}
      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="font-semibold mb-2">Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}