import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const MySwiper = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw8c56d98d/images/homepage/Kalam-Web-Banner-1920-x-825.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwe9db56c7/images/Co-Ord-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw8b876ce2/images/OnTheGo-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw1dc8f74f/images/homepage/0.00001-11-6-2023-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwd496e390/images/TheFormalEdit-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
