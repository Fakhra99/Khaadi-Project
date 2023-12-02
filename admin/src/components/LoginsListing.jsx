import React, {useState,useEffect} from 'react';
import axios from 'axios';


const LoginsListing = () => {
    const [logins, setLogins] = useState([]);

    const fetchLogins=async()=>{
        const response=await axios.get("http://localhost:4041/signin")
        const data=await response.data.logins;
        setLogins(data);
    }

useEffect(() => {
    fetchLogins();
}, [fetchLogins]);


  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Email</th>
      <th scope="col">Password</th>

      {/* <th scope="col"></th> */}
    </tr>
  </thead>
  <tbody>
 {logins.map((item) => {
    return (
        <tr >
            <th scope="row">{item._id}</th>
           <td>{item.email}</td>
           <td>{item.password}</td>
        </tr>
    );
})}

 
   
  </tbody>
</table>
  )
}

export default LoginsListing