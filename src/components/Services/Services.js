import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <p>We provide a range of document management services.</p>
      <Link to="/services/form"><button>Fill Out Form</button></Link>
    </div>
  );
};

export default Services;
