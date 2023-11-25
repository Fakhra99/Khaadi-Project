import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Swiper2 = () => {
  return (
    <div className='mt-2'>
        <div className='row'>
           
            <div className='col-md-5 mt-5 mb-5' style={{marginLeft:"110px", height:"400px"}}>
                <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slide1'></SwiperSlide>
        <SwiperSlide className='slide2'></SwiperSlide>
        <SwiperSlide className='slide3'></SwiperSlide>
        <SwiperSlide className='slide4'></SwiperSlide>
         <SwiperSlide className='slide5'></SwiperSlide>
      </Swiper>
            </div>

         <div className='col-md-6'>
                <div className='swiper2Img'>
                  <h3 style={{marginLeft:"-550px"}}>Ready To Wear</h3>
                    <div className='swiper2_4Clipimg'></div>
                </div>
            </div>    
        </div>

    </div>
  )
}

export default Swiper2