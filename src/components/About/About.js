import React from "react";
import "./About.css";
import anuragImage from "./Anurag.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>We are from Lalganj, Vaishali.<br/>Meet our team dedicated to providing excellent service.</p>
      
      <div className="team-member">
        <div className="team-image">
          <img src={anuragImage} alt="Anurag Kashyap" />
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anurag-kashyap-927b4a22a/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/anuragk1109/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
        <div className="team-info">
          <h3>Anurag Kashyap</h3>
          <span className="position">Company Site Designer</span>
        </div>
      </div>
    </div>
  );
};

export default About;
