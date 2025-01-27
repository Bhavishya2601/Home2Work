from flask import Flask, request, jsonify
import google.generativeai as genai  # Assuming you're using Google Generative AI
import os
from dotenv import load_dotenv

import requests.exceptions

load_dotenv()

try:
    genai.configure(api_key=os.environ["GEMINI_API_KEY"])
except KeyError:
    print("Error: Please set your GEMINI_API_KEY environment variable.")
    exit(1)

app = Flask(__name__)

model = genai.GenerativeModel('gemini-1.5-pro')  # Assuming the model name is correct

@app.route('/generate_recommendations', methods=['POST'])
def generate_recommendations():
    try:
        # Get image data from the request
        image_data = request.files.get('image')  # Handle cases where 'image' might not be present
        prompt=""
        if image_data is None:
            return jsonify({'error': 'Missing image data in the request'}), 400

        # Generate recommendations using the Gemini model
        response = model.generate_content([prompt,image_data.read()])

        # Extract recommendations from the response (assuming it's text)
        recommendations = response.text

        return jsonify({'recommendations': recommendations})

    except (genai.exceptions.RequestError, requests.exceptions.RequestException) as e:
        # Handle potential API errors or network issues
        print(f"Error generating recommendations: {e}")
        return jsonify({'error': 'An error occurred while generating recommendations'}), 500

    except Exception as e:
        # Catch other unexpected errors
        print(f"Unexpected error: {e}")
        return jsonify({'error': 'An unexpected error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)