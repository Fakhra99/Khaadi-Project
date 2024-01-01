// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import "../Styles/styles.css";
import Prenav from "../PrenavAndNavbar/Prenav";
import Navbar from "../PrenavAndNavbar/Navbar";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Bag = () => {
  const { items } = useSelector((state) => state.cart);
  console.log("display item here",items)
  return (
    <>
    <Prenav/>
    <Navbar/>

       <div className="container d-flex flex-column justify-content-center align-items-center">
    {items?.length > 0 ? (
      <div className="row card-container">
        {items.map((item, index) => (
          <div key={index} className="col-6 col-md-4 mb-4">
            <div className="card">
              <img src={item.imageUrl} alt={item.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: ${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="empty-cart">
        <h2 className="fw-bold">Your Shopping Cart is Empty</h2>
       <button className="w-50 btn btn-dark mt-3 btnC">CONTINUE SHOPPING</button>
      </div>
    )}
    <h3 className="w-25 mt-4">YOU MAY ALSO LIKE</h3>
  </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw3cb3ff6b/images/hi-res/alk231105_green_1.jpg?sw=400&sh=600"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw688aca25/images/hi-res/alk231109_d-green_1.jpg?sw=400&sh=600"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw19bd1593/images/hi-res/alk231105_navy_1.jpg?sw=400&sh=600"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw240a6bd0/images/hi-res/blk231103_purple_1.jpg?sw=400&sh=600"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw498a3bed/images/hi-res/eet23521_blue_1.jpg?sw=400&sh=600"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw5a87af75/images/hi-res/blk231103_red_1.jpg?sw=400&sh=600"
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Bag;