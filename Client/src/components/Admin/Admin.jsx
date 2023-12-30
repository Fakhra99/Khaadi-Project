import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './stylesAdmin.css';
import SignupListing from './SignupListing';


const Admin = () => {
   const [showSignupListing, setShowSignupListing] = useState(false);

  const toggleSignupListing = () => {
    setShowSignupListing(!showSignupListing);
  };
  return (
    <div>
      <p className='adminP1'>WANT TO SWITCH ACCOUNT? LOGIN AS CUSTOMER? <Link to="/signin" style={{color:"white", marginLeft:"10px"}}>lOGIN HERE</Link></p>
        <h2 style={{marginLeft:"20rem"}}>WELCOME TO ADMIN PANEL!</h2>
   
    <div className='container'>
      <div>
        
        <button className='collectionBtns btn btn-warning btn-block w-100 mb-3' onClick={toggleSignupListing}>
          Manage Accounts
        </button>
        {showSignupListing && <SignupListing />}
      </div>

      <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-4">
          <div className="card">
            <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw6ac6e07d/images/hi-res/bk231102_olive_2.jpg?sw=400&sh=600" className="card-img-top" alt="Winter Collections" />
            <div className="card-body">
              <Link to="/wintercollectiondata" className="card-link">
                <button className='collectionBtns btn btn-warning btn-block w-100'>ADD Winter Collections</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card">
            <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw070c9289/images/hi-res/lk231104_red_5.jpg?sw=400&sh=600" className="card-img-top" alt="New Ins" />
            <div className="card-body">
              <Link to="/wintercollectiondata" className="card-link">
                <button className='collectionBtns btn btn-warning btn-block w-100'>ADD New Ins</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card">
            <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw0f2bad25/images/hi-res/blk231103_red_2.jpg?sw=400&sh=600" className="card-img-top" alt="Fabrics" />
            <div className="card-body">
              <Link to="/wintercollectiondata" className="card-link">
                <button className='collectionBtns btn btn-warning btn-block w-100'>Add Fabrics</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
  );
}

export default Admin;
