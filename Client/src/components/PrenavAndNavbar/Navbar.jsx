import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux'; 
import '../Styles/styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  //  const cartItems = useSelector((state) => state.cart.items);
  // event handler handleScroll: updates the scrollPosition state with the current vertical scroll position (window.scrollY).
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //  Empty dependency array means the effect runs once after the initial render

  return (
    <div className={`navMain d-flex ${scrollPosition > 50 ? 'sticky' : ''}`}>
      
        <Link to="/home"><img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw78f1bf68/images/logo.svg" alt="khaadi" className='navMainimg'/> </Link>
         <div className='navLink'>
         <Link to="/salenew" ><span style={{color:"#f8643c", fontWeight:"bold"}}>Sale <sup>New</sup></span></Link>
         <Link to="/winterCollection"> Winter collection</Link>
          <Link to="/newIn"> New in</Link>
         <Link to="/fabrics" >Fabics</Link>
         <Link to="/readyToWear"> Ready to wear </Link>
         <Link to="/western"> Western </Link> 
         </div>

<div className='navIcons d-flex align-items-center'>
      <div>
        <Link to="/track">
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dwaaa352d2/images/track.svg" alt="track" style={{height:"20px", width:"25px", marginRight:"20px"}} />
        <p style={{ color: 'black', textDecoration: 'none' , fontSize:"12px"}}>Track</p>
        </Link>
      </div>

      <div>
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dw94606d2f/images/search.svg" alt="search" style={{height:"20px", width:"25px", marginRight:"15px"}}/>
        <p style={{ color: 'black', textDecoration: 'none' , fontSize:"12px"}}>Search</p>
      </div>

      <div>
        <Link to="/signin">
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dwddbfe9d4/images/user.svg" alt="account" style={{height:"20px", width:"45px", marginRight:"10px"}}/>
        <p style={{ color: 'black', textDecoration: 'none' , fontSize:"12px"}}>Account</p>
        </Link>
      </div>

      <div>
        <Link to="/bag">
        <img src="https://pk.khaadi.com/on/demandware.static/Sites-Khaadi_PK-Site/-/default/dwc786c49d/images/shopping.svg" alt="bag" style={{height:"20px", width:"25px"}} />
        <p style={{ color: 'black', textDecoration: 'none', fontSize:"12px"}}>Bag</p>
         {/* <span className="cartItemCount">{cartItems.length}</span> */}
        </Link>
      </div>
      
    </div>

    </div>
  )
}

export default Navbar