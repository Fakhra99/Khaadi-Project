import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spin from './Spin'

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
        {loader ? <Spin/> :null}
      <h1>Winter Collection</h1>
      <Link to="/wintercollectiondata">
        <button className='filter'>ADD</button>
      </Link>
     
      <div className='row ml-5'>
        {winterCollectionData.map((item) => (
          <div key={item._id} className='col-md-3 mb-4'>
            <div className="card" style={{ width: "18rem" }}>
               <img
        src={`http://localhost:4041/upload/${item.image}`}
        alt={item.title}
        className="card-img-top"
      />
              <p>{item.image}</p>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text" style={{ color: 'red', textDecoration: 'line-through', marginRight: '10px' }}>Original Price: {item.originalPrice}</p>
                <p className="card-text">Discounted Price: {item.discountedPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCollection;
