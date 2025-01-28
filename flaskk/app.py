from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

# Load your API key from environment variables
try:
    genai.configure(api_key=os.environ["GEMINI_API_KEY"])
except KeyError:
    print("Error: Please set your GEMINI_API_KEY environment variable.")
    exit(1)

app = Flask(__name__)

model = genai.GenerativeModel('gemini-1.5-pro')

@app.route('/generate_recommendations', methods=['POST'])
def generate_recommendations():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image = request.files['image']
    
    # At this point, image is the file object, no need to read or convert to bytes yet.
    
    try:
        # Assuming you're still using the empty prompt for generating content.
        prompt = "Analyze the uploaded image and provide recommendations."
        
        # Send the prompt and the image file directly to the model (without converting to bytes)
        response = model.generate_content([prompt, image])  
        
        # Assuming the response from the model contains the recommendations
        recommendations = response.text

        return jsonify({'recommendations': recommendations})

    except Exception as e:
        print(f"Unexpected error: {e}")
        return jsonify({'error': 'An unexpected error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)
