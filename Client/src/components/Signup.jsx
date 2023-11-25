import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
      <div className='container signinDiv d-flex flex-column align-items-center'>
      <div className="d-flex justify-content-between w-50 mb-3">
        <Link to="/signin" className='btn btn-dark text-light w-50 signup'>Sign Up</Link>
        <button className='btn w-50 signup'>Create Account</button>
      </div>
      <form className="w-50">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" className="form-control" id="firstName" placeholder="First Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email <sup style={{ color: "red" }}>*</sup></label>
          <input type="email" className="form-control" id="email" placeholder="example@gmail.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmEmail" className="form-label">Confirm Email <sup style={{ color: "red" }}>*</sup></label>
          <input type="email" className="form-control" id="confirmEmail" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password <sup style={{ color: "red" }}>*</sup></label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password <sup style={{ color: "red" }}>*</sup></label>
          <input type="password" className="form-control" id="confirmPassword" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="newsletterSignup" />
          <label className="form-check-label" htmlFor="newsletterSignup">Signup for Newsletter</label>
        </div>
        <div className='mb-3'>
          <button className='w-100 btn btn-dark'>CREATE ACCOUNT</button>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <p>or sign up with</p>
        </div>
        <div className='d-flex justify-content-center align-items-center '>
          <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw58a743f7/images/google.svg" alt="" style={{ marginRight: "10px" }} />
          <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw74c06dcf/images/facebook.svg" alt="" />
        </div>
      </form>
    </div>
  )
}

export default Signup;
