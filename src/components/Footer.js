import "./FooterStyles.css";

import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Left start here */}
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Pune</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9130239727
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              tusharanpat7777@gmail.com
            </h4>
          </div>
        </div>
        {/* Left close here */}
        {/* Right start here */}
        <div className="right">
          <h4>About Me</h4>
          <p>
            This is Tushar Anpat working as a Software Engineer in Encora having 2+ year of
            experience in fullstack development
          </p>
          <div className="social">
            <Link to="https://www.facebook.com/tusharanpat">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://www.linkedin.com/in/tusharanpat">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
        {/* Right close here */}
      </div>
    </div>
  );
};

export default Footer;
