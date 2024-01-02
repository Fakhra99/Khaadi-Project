import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://healthy-gold-kilt.cyclic.app/api/user-forget', {
        email,
      });

      // Successfully sent email, handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error.response.data);
    }
  };

  const handleLinkClick = () => {
    // Call the submit function when the link is clicked
    handleSubmit();
  };

  return (
    <div className='container signinDiv mt-5 d-flex justify-content-center align-items-center'>
      <div className="w-50">
        <form>
          <div>
            <h1>Forgot your password?</h1>
            <p>Provide your account email address to receive an email to reset your password.</p>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email <sup style={{ color: "red" }}>*</sup></label>
            <input
              type="email"
              className="form-control"
              name='email'
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='mb-3'>
          
            <div className='w-100 btn btn-dark' onClick={handleLinkClick}>
              <Link to='/changepassword'>
                Submit
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
