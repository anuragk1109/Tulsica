import React, { useState, useEffect } from 'react';
import axios from '../axios';

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);

  const userId = 'user-id'; // Replace with actual user ID after authentication

  // Fetch Documents
  useEffect(() => {
    const fetchDocuments = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`/documents/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDocuments(response.data);
      } catch (err) {
        console.error('Error fetching documents', err);
      }
    };
    fetchDocuments();
  }, [userId]);

  // Handle File Upload
  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userId);

    try {
      const token = localStorage.getItem('token');
      await axios.post('/documents/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      alert('File uploaded successfully!');
      window.location.reload(); // Reload to fetch updated documents
    } catch (err) {
      alert('Upload failed: ' + err.response?.data?.error);
    }
  };

  return (
    <div>
      <h2>Dashboard - Document Upload</h2>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit">Upload</button>
      </form>

      <h3>Your Documents</h3>
      <ul>
        {documents.map((document) => (
          <li key={document._id}>
            <a href={`http://localhost:5000/${document.filePath}`} target="_blank" rel="noopener noreferrer">
              {document.fileName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
