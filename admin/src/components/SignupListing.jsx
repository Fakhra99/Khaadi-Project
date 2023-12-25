import 'bootstrap/dist/css/bootstrap.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignupListing = () => {
    const [signups, setSignups] = useState([]);

    const fetchSignups=async()=>{
        const response=await axios.get("http://localhost:4041/api/allcontacts")
        const data=await response.data.signups;
        setSignups(data);
    }

    // delete function
    const handleDelete=async(id)=>{
      const response=await axios.delete(`http://localhost:4041/api/delete/${id}`)
      if(response.status ===200){
        fetchSignups();
      }

    }

    // update
    const handleUpdate=async(id)=>{
  const response=await axios.put(`http://localhost:4041/api/update/${id}`)
  fetchSignups();
}

 useEffect(() => {
    const fetchData = async () => {
      await fetchSignups();
    };

    fetchData();
  }, []);
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Delete</th>

      {/* <th scope="col"></th> */}
    </tr>
  </thead>
  <tbody>
 {signups.map((item) => (
  <tr key={item._id}>
    <th scope="row">{item._id}</th>
    <td><Link to={`/signup/${item._id}`}>{item.Fname}</Link></td>
    <td>{item.Lname}</td>
    <td>{item.email}</td>
    <td>{item.password}</td>
    <td><button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button></td>
    <td><Link to={`/update-contact/${item._id}`}>Update</Link></td>
  </tr>
))}

  
</tbody>
</table>
  )
}

export default SignupListing