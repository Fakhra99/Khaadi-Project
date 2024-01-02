import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spin from './Spin';
import Navbar from "../PrenavAndNavbar/Navbar";
import Prenav from "../PrenavAndNavbar/Prenav";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice/cartSlice";
import Footerr from "../Footer/Footer";


const WinterCollection = () => {
    const dispatch = useDispatch()
  const [winterCollectionData, setWinterCollectionData] = useState([]);
  const [loader,setLoader]=useState(true)
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('https://healthy-gold-kilt.cyclic.app/getwinter-collection');
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
            <li className="breadcrumb-item "><Link to="/home" className='bcrumLi'>Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page" style={{fontWeight:"bold"}}>Winter Collection</li>
          </ol>
        </nav>
      </div>

      <div className='d-flex mb-3'>
        <p className='bcrum'>Sort by</p>

        <button className='filter'>FILTER </button>
      </div>
     
      <div className='row ml-5'>
        {winterCollectionData.map((item) => (
          <div key={item._id} className='col-md-3 mb-4'>
            <div className="card" style={{ width: "18rem" }}>
               <img
        src={`https://healthy-gold-kilt.cyclic.app/upload/${item.image}`}
        alt={item.title}
        className="card-img-top"
      />
              {/* <p>{item.image}</p> */}
              <div className="card-body">
                <p className="card-title fw-bold">{item.title}</p>
                <p className="card-text">{item.description}</p>
                <p className="card-text" style={{ color: 'red', textDecoration: 'line-through', marginRight: '10px' }}>Original Price: {item.originalPrice}</p>
                <p className="card-text">Discounted Price: {item.discountedPrice}</p>
                 <button
          className="Addbag"
          onClick={() => dispatch(addToCart(item))}
        >
          Add To Bag
        </button>  
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footerr/>
    </div>
  );
};

export default WinterCollection;
