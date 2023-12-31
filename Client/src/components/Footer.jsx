import React from "react";
import './styles.css';

const Footer = () => {
  return (
    <div>
      {/* Sub-footer */}
      <div className="sub-footer">
        <div className="content-1">
         
          <div className="content-text">
            <p>shipping Charge</p>
            <p className="grey">Starting from Rs 120</p>
          </div>
          </div>
        
        <div className="content-1">
         
          <div className="content-text">
            <p>Support 24/7</p>
            <p className="grey">Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className="content-1">
          
          <div className="content-text">
            <p>Track your order</p>
            <p className="grey">Track your orders for quick updates</p>
          </div>
        </div>
      </div>
      {/* Sub-footer */}

      {/* Main footer */}
      <div className="upper-footer">
        <div className="upper-left">
          <h2>Be the first to know</h2>
          <p>
            Sign up for our newsletter to receive updates on special offers,
            <br />
            news and events.
          </p>
        </div>
        <div className="upper-center">
          <input type="text" placeholder="Enter Address" />
          <span>
            <button>Subscribe</button>
          </span>
        </div>
        <div className="upper-right">
          <img
            src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw0ac6cef1/images/FooterImages/youtube_icon.png"
            alt=""
          />
          <img
            src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwa79835e2/images/FooterImages/facebook_social_media_icon.png"
            alt=""
          />
          <img
            src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwe1454976/images/FooterImages/instagram_icon.png"
            alt=""
          />
          <img
            src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw3ef857fd/images/FooterImages/twitter.png"
            alt=""
          />
        </div>
      </div>
      <footer>
        <div className="get-in-touch">
          <h4>Get in touch</h4>
          <p className="address">ADDRESS</p>
          <p className="same">
            22nd Floor, Sky Tower B- East Wing,
            <br />
            Dolmen City, Block 4, Marine Drive Clifton,
            <br />
            Karachi, Pakistan
          </p>
          <p className="address">PHONE</p>
          <p className="same">0800 74007</p>
          <p className="address">EMAIL</p>
          <p className="same">customercare@khaadi.com</p>
        </div>
        <div className="get-in-touch">
          <h4>Our company</h4>
          <p className="same">About us</p>
          <p className="same">Contact us</p>
        </div>

        <div className="get-in-touch">
          <h4>Customer Support</h4>
          <p className="same">Customer service</p>
          <p className="same">store locator</p>
          <p className="same">Disclaimer</p>
        </div>
        <div className="get-in-touch">
          <h4>Help</h4>
          <p className="same">Track your order</p>
          <p className="same">Terms and conditions</p>
          <p className="same">Privacy and policy</p>
        </div>
      </footer>
      <div className="last-portion">
        <div className="last-left">
          <p>100% Safe Checkout</p>
          <img
            src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw3d659671/images/FooterImages/pay.png"
            alt=""
          />
        </div>
        <div className="last-center">
          <p>Secured by</p>
          <img
            src="https://seal.godaddy.com/images/3/en/siteseal_gd_3_h_l_m.gif"
            alt=""
          />
        </div>
        <div className="last-right">
          <p>
            Copyright © 2023 Khaadi Corporation Limited & Khaadi Pakistan SMC
            Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
    
  );
};


export default Footer;