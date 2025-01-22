import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./UploadDocuments.css";

const UploadDocuments = () => {
  const { isAuthenticated } = useAuth();
  const [files, setFiles] = useState([]);

  if (!isAuthenticated) {
    return <h2>Please log in to upload documents.</h2>;
  }

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles]);
    alert("Files uploaded successfully!");
  };

  return (
    <div className="upload-container">
      <h1>Upload Your Documents</h1>
      <input type="file" multiple onChange={handleFileUpload} />
      <ul>
        {files.map((file, idx) => (
          <li key={idx}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UploadDocuments;

