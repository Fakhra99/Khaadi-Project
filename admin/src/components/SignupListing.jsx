import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignupListing = () => {
    const [signups, setSignups] = useState([]);

    const fetchSignups=async()=>{
        const response=await axios.get("http://localhost:4041/signup")
        const data=await response.data.signups;
        setSignups(data);
    }

useEffect(() => {
    fetchSignups();
}, [fetchSignups]);


  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>

      {/* <th scope="col"></th> */}
    </tr>
  </thead>
  <tbody>
 {signups.map((item) => {
    return (
        <tr >
            <th scope="row">{item._id}</th>
            <Link to={'/signup/${item._id}'}><td>{item.Fname}</td></Link>
            <td>{item.Lname}</td>
           <td>{item.email}</td>
           <td>{item.password}</td>
        </tr>
    );
})} 
  
</tbody>
</table>
  )
}

export default SignupListing