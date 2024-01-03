import 'bootstrap/dist/css/bootstrap.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import cookies from 'js-cookie';

const SignupListing = () => {
    const [signups, setSignups] = useState([]);

    const fetchSignups = async () => {
  try {
    // Get the authentication token from your storage (localStorage, sessionStorage, cookies, etc.)
    // const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGQ2NmIxNDgxZjViODNkZTA1MTljMiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNDAwMDg0NiwiZXhwIjoxNzA2NTkyODQ2fQ.0BLZCKYMPFcGzYjbSLaaRthHaHJ4q3isLmJFBhB13Kg";
    // const authToken= cookies.get("accessToken")
    // console.log(authToken)
    const authToken= localStorage.getItem("accessToken")
    if(authToken){
      const response = await axios.get("http://localhost:4041/api/allcontacts", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const data = await response.data.signups;
    setSignups(data);
    }
    
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};

    // delete function
    const handleDelete=async(id)=>{
      const response=await axios.delete(`https://healthy-gold-kilt.cyclic.app/api/delete/${id}`)
      if(response.status ===200){
         window.alert('Deleted account successfully!');
        fetchSignups();
      }

    }

// update
//   const handleUpdate=async(id)=>{
//   // const response=await axios.put(`http://localhost:4041/api/update/${id}`)
//   const response = await axios.put(`http://localhost:4041/api/update/${id}`, {});
//   fetchSignups();
// }
const handleUpdate = async (id) => {
  try {
    const response = await axios.put(`https://healthy-gold-kilt.cyclic.app/api/update/${id}`, {});
    console.log(response.data); // Log the response to check server's response
    fetchSignups();
  } catch (error) {
    console.error("Error updating contact:", error);
  }
};


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
      <th scope="col">Account ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      {/* <th scope="col">Password</th> */}
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
    {/* //iterate over each item in the signups array. */}
 {signups.map((item) => (

  <tr key={item._id}>
    {/* //For each item in the array, it creates a table row (<tr>) with a unique key set to the _id of the item. */}
    <th scope="row">{item._id}</th>
    {/* <td><Link to={`/signup/${item._id}`}>{item.Fname}</Link></td> */}
    <td>{item.Fname}</td>
    <td>{item.Lname}</td>
    <td>{item.email}</td>
    {/* <td>{item.password}</td> */}
    <td><button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button></td>
 <td>
  <Link to={`/update-contact/${item._id}`} className="btn btn-primary" onClick={() => handleUpdate(item._id)}>
    Update
  </Link>
</td>
  </tr>
))}  
</tbody>
</table>
  )
}

export default SignupListing