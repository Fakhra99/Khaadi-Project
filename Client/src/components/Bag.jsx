import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Bag = () => {
  return (
    <>
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      <h2 className='fw-bold'>Your Shopping Cart is Empty</h2>
      <button className='w-25 btn btn-dark mt-3'>CONTINUE SHOPPING</button>
      <h3 className='w-25 mt-4'>YOU MAY ALSO LIKE</h3>
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
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw3cb3ff6b/images/hi-res/alk231105_green_1.jpg?sw=400&sh=600" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw688aca25/images/hi-res/alk231109_d-green_1.jpg?sw=400&sh=600" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw19bd1593/images/hi-res/alk231105_navy_1.jpg?sw=400&sh=600" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw240a6bd0/images/hi-res/blk231103_purple_1.jpg?sw=400&sh=600" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw498a3bed/images/hi-res/eet23521_blue_1.jpg?sw=400&sh=600" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw5a87af75/images/hi-res/blk231103_red_1.jpg?sw=400&sh=600" alt="..." /></SwiperSlide>
      </Swiper>
      </>
  );
}

export default Bag;
