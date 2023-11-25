import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const Signin = () => {
  return (
    <div className='container signinDiv mt-5'>
      <div className="mb-3 w-50">
        <label htmlFor="email" className="form-label">Email <sup style={{ color: "red" }}>*</sup></label>
        <input type="email" className="form-control" id="email" placeholder="example@gmail.com" />
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="password" className="form-label">Password <sup style={{ color: "red" }}>*</sup></label>
        <input type="password" className="form-control" id="password" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
        <a href="/forgot-password" style={{marginLeft:"300px"}}>Forgot Password?</a>
      </div>
      <div className='mb-3'>
       <button className='w-50 btn btn-dark'>SIGN IN</button>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <p>or sign in with</p>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw58a743f7/images/google.svg" alt="" />
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw74c06dcf/images/facebook.svg" alt="" />
      </div>
    </div>
  )
}

export default Signin;
