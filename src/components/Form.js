import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleNameChange = (e) => setName(e.target.value);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    const allowedFormats = ['image/jpeg', 'application/pdf'];

    if (uploadedFile && allowedFormats.includes(uploadedFile.type)) {
      setFile(uploadedFile);
      setError('');
    } else {
      setFile(null);
      setError('Only JPEG or PDF files are allowed.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !file) {
      setError('Please fill out all fields and upload a valid file.');
      return;
    }
    alert(`Name: ${name}\nFile: ${file.name}`);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Submit Your Document</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              style={{ marginLeft: '10px', padding: '5px', width: '90%' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Upload File:
            <input
              type="file"
              onChange={handleFileChange}
              style={{ marginLeft: '10px', padding: '5px', width: '90%' }}
              accept=".jpeg,.pdf"
              required
            />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </form>
      {file && (
        <div style={{ marginTop: '20px' }}>
          <h3>Uploaded File Details:</h3>
          <p>Name: {file.name}</p>
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
}

export default Form;
