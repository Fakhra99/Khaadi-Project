import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../PrenavAndNavbar/Navbar';
import Prenav from '../PrenavAndNavbar/Prenav';

const Signin = () => {
  const navigate = useNavigate();  // Initialize the navigate hook
  const [signinData, setsigninData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsigninData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://healthy-gold-kilt.cyclic.app/api/signin', signinData);
      console.log('Server Response:', response);

      if (response.status === 200) {
        console.log('Signin successful!');
        setsigninData({
          email: "",
          password: ""
        });

        // Check the user's role and navigate accordingly
        const userRole = response.data.role;  
        console.log('User Role:', userRole);
        // console.log(response);


        if (userRole === 'customer') {
          // Navigate to the home page
          navigate('/home');
        } else if (userRole === 'admin') {
          // Navigate to the admin dashboard
          navigate('/adminn');
        } else {
         
        }
      } else {
        console.error('Signin failed');
      }
    } catch (error) {
      console.error('Error during signin:', error);
    }
  };
  return (
   <div>
    <Prenav/>
    <Navbar/>
    <div className='container signinDiv mt-5 d-flex justify-content-center align-items-center'>
      <div className="w-50">
        <div className="d-flex">
          <button className='btn btn-dark w-50'><Link to="/signin" style={{textDecoration:"none", color:"white"}}>Sign In </Link></button>
          <button className=' w-50 signup'><Link to="/signup" className='text-dark signup'>Create Account </Link></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email <sup style={{ color: "red" }}>*</sup></label>
            <input type="email" className="form-control" name='email' value={signinData.email} id="email" onChange={handleChange} placeholder="example@gmail.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password <sup style={{ color: "red" }}>*</sup></label>
            <input type="password" className="form-control" name='password' value={signinData.password} onChange={handleChange} id="password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe" style={{ marginRight: "300px" }}>Remember Me</label>
            <Link to="/forgot-password" className="ml-auto" style={{ textDecoration: "none", color: "black" }}>Forgot Password?</Link>
          </div>
          <div className='mb-3'>
            <button className='w-100 btn btn-dark' type='submit'>SIGN IN</button>
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
    </div>
  )
}

export default Signin;
