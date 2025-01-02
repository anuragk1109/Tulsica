import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
      <Link to="/dashboard" style={{ marginRight: "10px" }}>Dashboard</Link>
      <Link to="/">Logout</Link>
    </nav>
  );
};

export default NavigationBar;
