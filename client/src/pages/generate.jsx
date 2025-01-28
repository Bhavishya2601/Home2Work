import React, { useState } from 'react';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }
    const System_prompt="Create an image of a modern home office that embodies productivity and comfort.The room should feature are: ";

    setLoading(true);
    setError('');
    setImage('');

    try {
      const response = await fetch('https://ai-text-to-image-generator-api.p.rapidapi.com/3D', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': '20e70a3fd9mshd4797d51be8059ap18260cjsn9a770478e480',
          'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: System_prompt+ prompt
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data && data.url) {
        setImage(data.url);
      } else {
        setError('No image was generated. Please try again.');
      }
    } catch (error) {
      setError(error.message || 'Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Room View</h1>
        
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your image description..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="text-input"
          />
          <button 
            onClick={generateImage} 
            disabled={loading}
            className="generate-button"
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>

        {error && (
          <div className="error-message">{error}</div>
        )}

        {image && (
          <div className="image-container">
            <img 
              src={image} 
              alt="Generated 3D image" 
              className="generated-image"
            />
          </div>
        )}

        {!image && !loading && !error && (
          <div className="placeholder-message">
            Enter a prompt above to generate a 3D image
          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          padding: 2rem;
        }

        .title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .input-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .text-input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        .text-input:focus {
          outline: none;
          border-color: #666;
        }

        .generate-button {
          padding: 0.75rem 1.5rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .generate-button:hover {
          background-color: #0060df;
        }

        .generate-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .error-message {
          color: #dc2626;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        .image-container {
          margin-top: 1.5rem;
        }

        .generated-image {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .placeholder-message {
          text-align: center;
          color: #666;
          padding: 3rem 0;
          border: 2px dashed #ddd;
          border-radius: 8px;
          margin-top: 1.5rem;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGenerator;