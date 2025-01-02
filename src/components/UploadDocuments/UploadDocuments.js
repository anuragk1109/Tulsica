import React, { useState } from "react";

const UploadDocuments = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Files uploaded successfully!");
  };

  return (
    <div>
      <h1>Upload Documents</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Upload Files (JPEG, PDF only):
          <input
            type="file"
            accept=".jpeg,.jpg,.pdf"
            multiple
            onChange={handleFileChange}
          />
        </label>
        <button type="submit">Upload</button>
      </form>
      <div>
        <h2>Uploaded Files:</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UploadDocuments;
