import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spin from './Spin';
import Navbar from "./Navbar";
import Prenav from "./Prenav";

const WinterCollection = () => {
  const [winterCollectionData, setWinterCollectionData] = useState([]);
  const [loader,setLoader]=useState(true)
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4041/getwinter-collection');
        setWinterCollectionData(response.data.winterCollection);
        // console.log(winterCollectionData)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
    setLoader(false)
  }, []); 
  console.log(winterCollectionData, "check console")
  return (
    
    <div>
      <Prenav/>    
      <Navbar/>
        {loader ? <Spin/> :null}
      <h1>Winter Collection</h1>
      <div>
        <img src="https://pk.khaadi.com/on/demandware.static/-/Sites-storefront-catalog-pak/default/dw5ad7d48c/images/plpbanners/Co-Ord-PLP-Desk-1920x225-1.jpg" alt="Sale new" className='salebanner'/>
      </div>

      <div>
        <nav style={{ "--bs-breadcrumb-divider": "'/'" }} aria-label="breadcrumb">
          <ol className="breadcrumb bcrum">
            <li className="breadcrumb-item "><Link to="/" className='bcrumLi'>Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page" style={{fontWeight:"bold"}}>Winter Collection</li>
          </ol>
        </nav>
      </div>

      <div className='d-flex mb-3'>
        <p className='bcrum'>Sort by</p>

        <select className='bcrumDropdown' >
        <option selected>Recommended</option>
        <option value="1">Most Popular</option>
        <option value="2">New Arrival</option>
        <option value="3">Price Low To High</option>
        <option value="3">Price High To Low</option>
        </select>

        <button className='filter'>FILTER </button>
      </div>
     
      <div className='row ml-5'>
        {winterCollectionData.map((item) => (
          <div key={item._id} className='col-md-3 mb-4'>
            <div className="card" style={{ width: "18rem" }}>
               <img
        src={`http://localhost:4041/upload/${item.image}`}
        alt={item.title}
        className="card-img-top"
      />
              {/* <p>{item.image}</p> */}
              <div className="card-body">
                <p className="card-title fw-bold">{item.title}</p>
                <p className="card-text">{item.description}</p>
                <p className="card-text" style={{ color: 'red', textDecoration: 'line-through', marginRight: '10px' }}>Original Price: {item.originalPrice}</p>
                <p className="card-text">Discounted Price: {item.discountedPrice}</p>
              </div>
              {/* <button className='btn btn-warning'>Add to bag</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCollection;
