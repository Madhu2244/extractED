import React, { useState } from 'react';

function UploadFile() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [responseMessage, setResponseMessage] = useState(''); // Server response state

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setResponseMessage(''); // Clear previous response message when a new file is selected
  };

  const handleUpload = async () => {
    if (file) {
      setLoading(true); // Start loading
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await response.text();
        setResponseMessage('Upload successful: ' + data); // Update response message
      } catch (error) {
        console.error('Error uploading file:', error);
        setResponseMessage('Upload failed!'); // Update response message
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div>
      <input type="file" accept=".pptx" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload File'}
      </button>
      {loading && <p>Please wait, uploading...</p>}
      {responseMessage && <p>{responseMessage}</p>} {/* Display the response message */}
    </div>
  );
}

export default UploadFile;
