import React from 'react';
import '../Styles/styles.css';
import { Link } from 'react-router-dom';

const Prenav = () => {
    // add classes for styling
    // const pstyles=()=>{
    // const preNavstyle=document.getElementsByClassName('preNav');
    // preNavstyle.classList.add('preNav');

    // const ShopNow=document.getElementsByClassName('shopNow');
    // ShopNow.classList.add('shopNow');
    // };
   
    // prenav content
    return (
    <div className='preNav'>
        <p> New day. New sale. Check out collection here at upto 50% off !<Link to="/salenew" target='_blank' className='shopNow'> Shop Now</Link> </p>
    </div>
  )
}

export default Prenav