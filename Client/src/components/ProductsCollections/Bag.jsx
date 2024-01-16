import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// useSelector renders items from redux store
import { useSelector } from "react-redux"; 
import "../Styles/styles.css";
import Prenav from "../PrenavAndNavbar/Prenav";
import Navbar from "../PrenavAndNavbar/Navbar";
import Footer from "../Footer/Footer";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Bag = () => {
  // callback function (state) => state.cart is passed to useSelector. 
  // This function selects the cart slice from the Redux store state.
  const { items } = useSelector((state) => state.cart);
  console.log("display item here",items)
  return (
    <>
    {/* prenav and nav bar */}
    <Prenav/>
    <Navbar/>

       <div className="container d-flex flex-column justify-content-center align-items-center">
    {items?.length > 0 ? (
      <div className="row card-container">
        <h4>Your items</h4>
        {items.map((item, index) => (
          <div key={index} className="col-6 col-md-4 mb-4">
            <div className="card">
              {/* <img src={`http://localhost:4041/upload/${item.image}`} alt={item.title} className="card-img-top" /> */}
               <img src= {item.image} alt={item.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                {/* <p className="card-text">Price: Rs{item.originalPrice}</p> */}
                <p className="card-text">Price: RS{item.discountedPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="empty-cart">
        <h2 className="fw-bold">Your Shopping Cart is Empty</h2>
        <Link to="/salenew">
       <button className="w-50 btn btn-dark mt-3 btnC">CONTINUE SHOPPING</button>
       </Link>
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
       <Footer/>
    </>
  );
};

export default Bag;