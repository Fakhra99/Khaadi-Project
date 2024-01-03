import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Styles/styles.css';

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
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwa23276de/images/homepage/Emaan-1920X1080-desktop-banner.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw9ea84f5e/0.0-20-12-23-desktop-home-bannner-1920x1080px-pk.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwfcf9bf9d/images/homepage/desktop-home-bannner-1920x1080px-Winter-bloom-chiken-kari.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw1dc8f74f/images/homepage/0.00001-11-6-2023-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwe76e8eb5/images/homepage/desktop-home-bannner-1920x1080px-print-story.jpg" alt="" /></SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
