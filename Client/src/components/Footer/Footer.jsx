import React from "react";
import "../Styles/styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <>
     <div className="footerSec1">
      <h5> NEED HELP? </h5> <span className="myicon">
          <FontAwesomeIcon icon={faPhone} /> 0800 7400 /span  </span> <span>
          <FontAwesomeIcon icon={faEnvelope} /> khaadiofficial@gmail.com
          </span>
       </div>
   
    <footer className="main-footer container">
    
      <div className="row">
        <div className="col-md-4 footer-section">
          <h4>Get in touch</h4>
          <address>
            22nd Floor, Sky Tower B- East Wing,
            <br />
            Dolmen City, Block 4, Marine Drive Clifton,
            <br />
            Karachi, Pakistan
          </address>
          <p>Phone: 0800 74007</p>
          <p>Email: customercare@khaadi.com</p>
        </div>

        <div className="col-md-4 footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Customer service</li>
            <li>Store locator</li>
            <li>Track your order</li>
          </ul>
        </div>

        <div className="col-md-4 footer-section">
          <h4>Security</h4>
          <p>100% Safe Checkout</p>
          <img
            src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw3d659671/images/FooterImages/pay.png"
            alt="Payment methods"
          />
          <p>Secured by</p>
          <img
            src="https://seal.godaddy.com/images/3/en/siteseal_gd_3_h_l_m.gif"
            alt="GoDaddy Seal"
          />
        </div>
      </div>
      <div className="copyright">
        <p> <span>
           <Link to="/home"><img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw78f1bf68/images/logo.svg" alt="khaadi" className='navMainimg'/> </Link>
          </span> &copy; 2023 Khaadi Corporation Limited & Khaadi Pakistan SMC Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
     </>
  );
};

export default Footer;
