// frontend/app/page.js

'use client';

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateText = async () => {
    if (!prompt) return;
    setIsLoading(true);
    setResult('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/generate/text`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      setResult('Failed to generate text. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Main container with inline gradient background
    <div 
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: 'linear-gradient(to bottom right, #FFFFFF, #FDE8E8, #EDEBFF)',
      }}
    >
      <div 
        className="w-full max-w-2xl p-8"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          CircleAI Creator
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Transform your ideas into text, images, and more with AI.
        </p>
        
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to create..."
          className="w-full p-4 bg-white/30 backdrop-blur-md rounded-2xl border border-white/20 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        
        <button
          onClick={generateText}
          disabled={isLoading || !prompt}
          className="mt-4 w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold py-3 px-4 rounded-2xl hover:shadow-lg transition-all disabled:opacity-50"
        >
          {isLoading ? 'Generating...' : 'Generate'}
        </button>

        {result && (
          <div 
            className="mt-6 p-4"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <h3 className="font-semibold mb-2 text-gray-800">Result:</h3>
            <p className="text-gray-700">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}