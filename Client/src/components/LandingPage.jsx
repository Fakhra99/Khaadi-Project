import React from 'react';
import "./styles.css"
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className="post">
      <div className="logo">
        <img
          src="https://khaadi.com/media/wysiwyg/khaadi/Khaadi_logo/Khaadi-Logo-home.png"
          alt=""
        />
        <select>
          <option selected disabled hidden>
            choose your country
          </option>
          <option value="">Pakistan</option>
          <option value="">India</option>
          <option value="">China</option>
          <option value="">Canada</option>
        </select>
      </div>
      <div className="btnL">
        <Link to="/home">
          ENTER
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;