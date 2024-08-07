from flask import Flask, request, jsonify
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the saved model
loaded_model = load_model('diabetic_retinopathy_model.h5')

# Define image dimensions
HEIGHT = 512
WIDTH = 512



@app.route('/p', methods=['POST'])
def predict_diabetic_retinopathy():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file part in the request'}), 400
        
        file = request.files['file']
        
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        
        img = image.load_img(file, target_size=(HEIGHT, WIDTH))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array /= 255.0
        
        predictions = loaded_model.predict(img_array)
        predicted_class = np.argmax(predictions)
        
        return jsonify({'predicted_class': int(predicted_class)})
    
    except Exception as e:
        # Log the exception and return a generic error message
        print(f"Error occurred: {e}")
        return jsonify({'error': 'An internal error occurred'}), 500


@app.route('/')
def home():
    return "Flask server is running"

if __name__ == '__main__':
    app.run(debug=True)








