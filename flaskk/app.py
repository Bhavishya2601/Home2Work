from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

app = Flask(__name__)

model = genai.GenerativeModel('gemini-1.5-pro')

@app.route('/generate_recommendations', methods=['POST'])
def generate_recommendations():
    try:
        image_data = request.files['image'].read()
        response = model.generate_content([image])
        print(response.text)
        return jsonify({'recommendations': response.text})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)