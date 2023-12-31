import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Navbar from './Navbar';
import Prenav from './Prenav';

const Signup = () => {
  const [signupData, setsignupData]=useState({
    Fname:"",
    Lname:"",
    email:"",
    password:"",
    role:""
  });
   const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignupData((prevData) => ({
      ...prevData,

      [name]: value,

    }));
  };

  // const onSubmitHandler = async(e) => {
  //   e.preventDefault(); //prevents refreshing page, agr page refresh hoga tou state mein jo bhi data hoga khatam ho jaye ga
  //   const data=await axios.post("http://localhost:4041/api/signup",signupData);
  //   console.log('data', data)
    
  //   // empty form field after submitting
  //   setsignupData({
  //       Fname:"",
  //       Lname:"",
  //       email:"",
  //       password:""
  //   })
  // };
  
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post('http://localhost:4041/api/signup', signupData);
//     if (response.status === 200) {
//       // Handle successful signup (e.g., redirect, show success message)
//       console.log('Signup successful!');
//       // empty form field after submitting
//       setsignupData({
//         Fname: "",
//         Lname: "",
//         email: "",
//         password: ""
//       });
//     } else {
//       // Handle signup error (e.g., display error message)
//       console.error('Signup failed');
//     }
//   } catch (error) {
//     console.error('Error during signup:', error);
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:4041/api/signup', signupData);

    // Check for a successful HTTP status code (e.g., 2xx range)
    if (response.status >= 200 && response.status < 300) {
      // Handle successful signup (e.g., redirect, show success message)
      console.log('Signup successful!');
      // empty form field after submitting
      setsignupData({
        Fname: "",
        Lname: "",
        email: "",
        password: "",
        role:""
      });

      navigate('/signin')
    } else {
      // Handle signup error (e.g., display error message)
      console.error('Signup failed. Server response:', response.data);
    }
  } catch (error) {
    console.error('Error during signup:', error);
  }
};


  return (
    <div>
      <Prenav/>
      <Navbar/>
      <div className='container signinDiv d-flex flex-column align-items-center'>
      <div className="d-flex justify-content-between w-50 mb-3">
        <Link to="/signin" className='btn  text-dark w-50 signup'>Sign in</Link>
        <button className='btn btn-dark w-50 signup'>Create Account</button>
      </div>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" className="form-control" name='Fname' value={signupData.Fname} onChange={handleChange} id="firstName" placeholder="First Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" className="form-control" name='Lname' value={signupData.Lname} onChange={handleChange} id="lastName" placeholder="Last Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email <sup style={{ color: "red" }}>*</sup></label>
          <input type="email" className="form-control" name='email' value={signupData.email} onChange={handleChange} id="email" placeholder="example@gmail.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmEmail" className="form-label">Confirm Email <sup style={{ color: "red" }}>*</sup></label>
          <input type="email" className="form-control" id="confirmEmail" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password <sup style={{ color: "red" }}>*</sup></label>
          <input type="password" className="form-control" name='password' value={signupData.password} onChange={handleChange} id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password <sup style={{ color: "red" }}>*</sup></label>
          <input type="password" className="form-control" id="confirmPassword" />
        </div>
       <div className="mb-3">
          <label htmlFor="role" className="form-label">Role <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" className="form-control" name='role' value={signupData.role} onChange={handleChange} id="role" placeholder="Are you Admin/Customer" />
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
    </div>
  )
}

export default Signup;
