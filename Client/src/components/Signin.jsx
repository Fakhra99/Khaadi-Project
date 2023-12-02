import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Link } from 'react-router-dom';
import axios from "axios"

const Signin = () => {
  const [signinData, setsigninData]=useState({
    email:"",
    password:""
  })

  const onChange=(e)=>{
    setsigninData({...signinData, [e.target.name]:e.target.value});
  }

   const onSubmit = async(e) => {
    e.preventDefault(); //prevents refreshing page, agr page refresh hoga tou state mein jo bhi data hoga khatam ho jaye ga
     const ldata=await axios.post("http://localhost:4041/signin",signinData);
    console.log(ldata);

    setsigninData({
        email:"",
        password:""
    })
  };
  return (
    <div className='container signinDiv mt-5 d-flex justify-content-center align-items-center'>
      <div className="w-50">
        <div className="d-flex">
          <button className='btn btn-dark w-50'><Link to="/signin" style={{textDecoration:"none", color:"white"}}>Sign In </Link></button>
          <button className=' w-50 signup'><Link to="/signup" className='text-dark signup'>Create Account </Link></button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email <sup style={{ color: "red" }}>*</sup></label>
            <input type="email" className="form-control" name='email' value={signinData.email} id="email" onChange={onChange} placeholder="example@gmail.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password <sup style={{ color: "red" }}>*</sup></label>
            <input type="password" className="form-control" name='password' value={signinData.password} onChange={onChange} id="password" />
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
