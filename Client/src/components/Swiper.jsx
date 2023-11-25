import React from 'react';
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";

const MySwiper = () => {
  return (
    <ReactSwiper className="mySwiper">
      
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw1a3aa8cc/images/Essentials-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwe9db56c7/images/Co-Ord-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw8b876ce2/images/OnTheGo-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw1dc8f74f/images/homepage/0.00001-11-6-2023-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwd496e390/images/TheFormalEdit-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
    </ReactSwiper>
  );
};

export default MySwiper;
