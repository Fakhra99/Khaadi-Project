import React from 'react';
import Swiper from './Swiper';
import Boxes from './Boxes'
// import Swiper1 from './Swiper1';
// import Swiper2 from './Swiper2';
// import Swiper3 from './Swiper3';
// import Swiper4 from './Swiper4';
import Prenav from '../PrenavAndNavbar/Prenav';
import Navbar from '../PrenavAndNavbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
    <Prenav/>
    <Navbar/>
    <Swiper/>
    <Boxes/>
    {/* <Swiper1/>
    <Swiper2/>
    <Swiper3/>
    <Swiper4/> */}
    <Footer/>
    </div>
  )
}

export default Home