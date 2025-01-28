import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import {marked} from 'marked';

const ImageAnalyzer = () => {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI('AIzaSyAzoZGqAFZiKAVS-Xvmb2PZedZrjXkO0RA'); // Replace with your API key
  const model = genAI.GenerativeModel({ model: "gemini-1.5-flash" });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Remove the data URL prefix and get only the base64 string
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const analyzeImage = async () => {
    if (!imageFile) return;

    setLoading(true);
    try {
      // Get base64 string
      const base64Data = await getBase64(imageFile);
      
      // Create image data object for Gemini
      const imageData = {
        inlineData: {
          data: base64Data,
          mimeType: imageFile.type
        }
      };

      // Generate content using Gemini
      const result = await model.generateContent([
        "You are given the image of room you have to give suggestions which things can we add in a room for better experience.",
        imageData
      ]);

      const response = await result.response;
      const html=marked.parse(response.text())
      setResult(html);
    } catch (error) {
      setResult(`Error analyzing image: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    analyzeImage();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Room Suggestions</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Upload Section */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <svg 
                  className="w-12 h-12 text-gray-400 mb-3" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <span className="text-gray-500">
                  Click to upload an image
                </span>
              </div>
            </label>
          </div>

          {/* Preview */}
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="max-h-48 mx-auto rounded-lg object-contain"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!imageFile || loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg 
                  className="animate-spin h-5 w-5 mr-3 text-white" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Analyzing...
              </div>
            ) : (
              'Analyze Image'
            )}
          </button>
        </form>
      </div>

      {/* Results Section */}
      {result && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-gray-700" dangerouslySetInnerHTML={{__html:result}}>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageAnalyzer;