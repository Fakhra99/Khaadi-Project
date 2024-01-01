import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Styles/styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Swiper4 = () => {
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
        <SwiperSlide className='slide1'><button to="#" className="addTobag" >Add To Bag</button></SwiperSlide>
        <SwiperSlide className='slide2'><button to="#" className="addTobag" >Add To Bag</button></SwiperSlide>
        <SwiperSlide className='slide3'><button to="#" className="addTobag" >Add To Bag</button></SwiperSlide>
        <SwiperSlide className='slide4'><button to="#" className="addTobag" >Add To Bag</button></SwiperSlide>
         <SwiperSlide className='slide5'><button to="#" className="addTobag" >Add To Bag</button></SwiperSlide>
      </Swiper>
            </div>

         <div className='col-md-6'>
                <div className='swiper4Img'>
                  <h3 style={{marginLeft:"-550px"}}>Sale</h3>
                    <div className='swiper2_4Clipimg'></div>
                </div>
            </div>    
        </div>

    </div>
  )
}

export default Swiper4