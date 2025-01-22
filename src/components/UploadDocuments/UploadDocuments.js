// components/UploadDocuments/UploadDocuments.js
import React, { useState } from "react";
import "./UploadDocuments.css";

const UploadDocuments = () => {
  // State to store uploaded files
  const [documents, setDocuments] = useState({
    aadhar: null,
    pan: null,
    passport: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocuments({
      ...documents,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded Documents:", documents);

    // Perform any backend API call to upload the documents
    alert("Documents uploaded successfully!");
  };

  return (
    <div className="upload-documents-container">
      <h1>Upload Documents</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="aadhar">Upload Aadhar Card:</label>
          <input
            type="file"
            id="aadhar"
            name="aadhar"
            accept=".jpeg, .jpg, .png, .pdf"
            onChange={handleFileChange}
          />
          {documents.aadhar && <p>{documents.aadhar.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="pan">Upload PAN Card:</label>
          <input
            type="file"
            id="pan"
            name="pan"
            accept=".jpeg, .jpg, .png, .pdf"
            onChange={handleFileChange}
          />
          {documents.pan && <p>{documents.pan.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="passport">Upload Passport:</label>
          <input
            type="file"
            id="passport"
            name="passport"
            accept=".jpeg, .jpg, .png, .pdf"
            onChange={handleFileChange}
          />
          {documents.passport && <p>{documents.passport.name}</p>}
        </div>

        <button type="submit" className="upload-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadDocuments;
