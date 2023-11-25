import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='container signinDiv mt-5 d-flex justify-content-center align-items-center'>
      <div className="w-50">
        <div className="d-flex">
          <button className='btn btn-dark w-50'>Sign In</button>
          <button className=' w-50 signup'><Link to="/signup" className='text-dark signup'>Create Account </Link></button>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email <sup style={{ color: "red" }}>*</sup></label>
            <input type="email" className="form-control" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password <sup style={{ color: "red" }}>*</sup></label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe" style={{ marginRight: "300px" }}>Remember Me</label>
            <a href="/forgot-password" className="ml-auto" style={{ textDecoration: "none", color: "black" }}>Forgot Password?</a>
          </div>
          <div className='mb-3'>
            <button className='w-100 btn btn-dark'>SIGN IN</button>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <p>or sign in with</p>
          </div>
          <div className='d-flex justify-content-center align-items-center '>
            <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw58a743f7/images/google.svg" alt="" style={{ marginRight: "10px" }} />
            <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw74c06dcf/images/facebook.svg" alt="" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin;
