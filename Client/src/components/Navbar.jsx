import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Link } from 'react-router-dom';
// import Signin from './Signin';

const Navbar = () => {
    // const navStyle=()=>{
    //     const mainNav=document.getElementsByClassName('navMain');
    //     mainNav.classList.add('navMain');

    //     const NavLink=document.getElementsByClassName('navLink');
    //     NavLink.classList.add('navLink');

    //      const NavIcons=document.getElementsByClassName('navIcons');
    //     NavIcons.classList.add('navIcons');
    // }
  return (
    <div className='navMain d-flex '>
      
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw78f1bf68/images/logo.svg" alt="khaadi" />
         <div className='navLink'>
         <Link to="" ><span style={{color:"#f8643c", fontWeight:"bold"}}>Sale <sup>New</sup></span></Link>
         <Link to=""> Winter collection</Link>
          <Link to=""> New in</Link>
         <Link to="" >Fabics</Link>
         <Link to=""> Ready to wear </Link>
         <Link to=""> Western </Link> 
         </div>

<div className='navIcons d-flex align-items-center'>
      <div>
        <Link>
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dwaaa352d2/images/track.svg" alt="track" style={{height:"25px", width:"30px"}} />
        <p style={{ color: 'black', textDecoration: 'none' }}>Track</p>
        </Link>
      </div>
      <div>
        <Link >
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw94606d2f/images/search.svg" alt="search" style={{height:"25px", width:"35px"}}/>
        <p style={{ color: 'black', textDecoration: 'none' }}>Search</p>
        </Link>
      </div>
      <div>
        <Link to="/signin">
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dwddbfe9d4/images/user.svg" alt="account" style={{height:"25px", width:"45px"}}/>
        <p style={{ color: 'black', textDecoration: 'none' }}>Account</p>
        </Link>
      </div>
      <div>
        <Link>
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dwc786c49d/images/shopping.svg" alt="bag" style={{height:"25px", width:"25px"}} />
        <p style={{ color: 'black', textDecoration: 'none' }}>Bag</p>
        </Link>
      </div>
    </div>

    </div>
  )
}

export default Navbar