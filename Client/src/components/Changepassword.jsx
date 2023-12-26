import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmationPasswordChange = (e) => {
    setConfirmationPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmationPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4041/api/otp-verify', {
        email,
        otp,
        newPassword,
      });

      // Password changed successfully
      console.log(response.data);

      // You can redirect the user to a login page or handle it according to your application flow
    } catch (error) {
      // Handle error
      console.error(error.response.data);
      setErrorMessage('Failed to change password. Please try again.');
    }
  };

  return (
    <div className='container signinDiv mt-5 d-flex justify-content-center align-items-center'>
      <div className="w-50">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Change Password</h1>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email <sup style={{ color: "red" }}>*</sup></label>
            <input
              type="email"
              className="form-control"
              name='email'
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="otp" className="form-label">OTP <sup style={{ color: "red" }}>*</sup></label>
            <input
              type="text"
              className="form-control"
              name='otp'
              id="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password <sup style={{ color: "red" }}>*</sup></label>
            <input
              type="password"
              className="form-control"
              name='newPassword'
              id="newPassword"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmationPassword" className="form-label">Confirm Password <sup style={{ color: "red" }}>*</sup></label>
            <input
              type="password"
              className="form-control"
              name='confirmationPassword'
              id="confirmationPassword"
              placeholder="Confirm New Password"
              value={confirmationPassword}
              onChange={handleConfirmationPasswordChange}
            />
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <div className='mb-3'>
            <button className='w-100 btn btn-dark' type='submit'>Change Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
