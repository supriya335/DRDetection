import React, { useState, useRef } from 'react';

function DiabeticRetinopathyDetection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState('No file chosen');
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImageName(file ? file.name : 'No file chosen');
  };

  const handleClickBrowse = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="diabetic-retinopathy-detection p-4 h-screen">
      <h1 className="text-2xl font-bold mb-2">Diabetic Retinopathy Detection</h1>
      <p className="mb-4">Identify signs of diabetic retinopathy in eye images</p>
      <div className="mb-4 bg-blue-500 max-w-md mx-auto flex justify-center items-center rounded">
  <input
    type="file"
    ref={fileInputRef}
    onChange={handleImageChange}
    className="hidden"
  />
  <button
    onClick={handleClickBrowse}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Browse
  </button>
  <span className="ml-2 bg-gray-200 px-2 py-1 rounded">{imageName}</span>
</div>

      {selectedImage && (
        <div className="mb-4 flex justify-center items-center">
          <p className="mb-2">Selected Image:</p>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Retinal Image"
            className="w-64 h-auto"
          />
        </div>
      )}
      <button disabled={!selectedImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Test
      </button>
    </div>
  );
}

export default DiabeticRetinopathyDetection;
