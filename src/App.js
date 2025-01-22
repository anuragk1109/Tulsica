import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UploadDocuments from "./components/UploadDocuments/UploadDocuments";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { useAuth } from "./context/AuthContext";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/upload-documents"
            element={
              isAuthenticated ? <UploadDocuments /> : <Navigate to="/login" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
