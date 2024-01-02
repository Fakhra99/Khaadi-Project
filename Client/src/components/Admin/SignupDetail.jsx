import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SignupDetail = () => {
  const [signup, setSignup] = useState({});
  const { id } = useParams();

  const fetchSignup = async () => {
      const response = await axios.get(`https://healthy-gold-kilt.cyclic.app/api/singleContact/${id}`);
      const data =await response.data.signup;
      console.log(data);
      setSignup(data);
     
  };

  useEffect(() => {
    fetchSignup();
  }, []);

  const { Fname, Lname, email, password } = signup;


  return (
    <>
    <h1>{Fname}</h1>
    <h1>{Lname}</h1>
    <h1>{email}</h1>
    <h1>{password}</h1>
    </>
  )
};

export default SignupDetail;
