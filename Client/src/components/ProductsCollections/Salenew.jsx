import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "../Styles/styles.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice/cartSlice";
import Prenav from "../PrenavAndNavbar/Prenav";
import Navbar from "../PrenavAndNavbar/Navbar";
const productsData = [
  // addin test
  {
    imageUrl:
        "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7a83b8b8/images/hi-res/lla230810_red_1.jpg?sw=800&sh=1200",
    title: "Printed Lawn | Top Dupatta",
    description: "Fabrics 2 piece",
    originalPrice:"2200",
    discountedprice: "1,500",
    id: "acw12"
  },

  {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw541fcf91/images/hi-res/ala230806_teal_1.jpg?sw=800&sh=1200",
    title: "Printed Lawn | Top Dupatta",
    description: "Fabrics 2 piece",
    originalPrice:"2200",
    discountedprice: "1,500",
     id: "abw12"
  },
  {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwf1f6602f/images/hi-res/bla230806_black_1.jpg?sw=800&sh=1200",
    title: "Printed Lawn | Top Dupatta",
    description: "Fabrics 2 piece",
    originalPrice:"2200",
    discountedprice: "1,900",
     id: "a6w12"
  },
  {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw75f51f17/images/hi-res/ala230821_teal_1.jpg?sw=800&sh=1200",
    title: "Printed Lawn | Top Dupatta",
    description: "Fabrics 2 piece",
    originalPrice:"2200",
    discountedprice: "2,000",
     id: "aiw12"
  },
  {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwbad0fffc/images/hi-res/est23479_grey_2.jpg?sw=400&sh=600",
    title: "Printed Lawn | Top Dupatta",
    description: "Fabrics 2 piece",
    originalPrice:"2200",
    discountedprice: "2,500",
     id: "acu12"
  }, 

   {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwc175d264/images/hi-res/est23480_multi_2.jpg?sw=400&sh=600",
    title: "Printed Lawn | Top Dupatta",
    description: "Fabrics 2 piece",
    originalPrice:"2200",
    discountedprice: "2,500",
     id: "agw12"
  }, 

   {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwf1459138/images/hi-res/est23483_purple_2.jpg?sw=400&sh=600",
    title: "Printed Lawn | Top Dupatta",
    description: "Fabrics 2 piece",
    originalPrice:"2200",
    discountedprice: "2,500",
     id: "bcw12"
  }, 

   {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw72cd4d37/images/hi-res/est23482_green_2.jpg?sw=400&sh=600",
    title: "Printed Lawn | Top Dupatta",
    description: "Fabrics 2 piece",
    originalPrice:"2200",
    discountedprice: "2,500",
     id: "aco12"
  }, 
];

const Salenew = () => {
  const dispatch = useDispatch()
  return (
    <div>
       <Prenav/>
      <Navbar/>
      <div>
        <img
          src="https://pk.khaadi.com/on/demandware.static/-/Sites-storefront-catalog-pak/default/dw1c55b206/images/plpbanners/PLP-BANNER-DESKTOP-SALE.jpg"
          alt="Sale new"
          className="salebanner"
        />
      </div>

      <div>
        <nav
          style={{ "--bs-breadcrumb-divider": "'/'" }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb bcrum">
            <li className="breadcrumb-item ">
              <Link to="/home" className="bcrumLi">
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ fontWeight: "bold" }}
            >
              Sale
            </li>
          </ol>
        </nav>
      </div>

      <div className="d-flex mb-3">
        <p className="bcrum">Sort by</p>
        <button className="filter">FILTER </button>
      </div>

      <div className="d-flex ml-5 align-item-center justify-content-evenly">
      </div>
      <div className="d-flex flex-wrap ml-5 align-item-center justify-content-evenly">
        {productsData.map((product, index) => (
         <div className="card mb-4" style={{ width: "18rem" }} key={index}>
      <img
        className="card-img-top card5"
        alt="..."
        src={product.imageUrl}
      />
      <div className="card-body">
        <button
          className="Addbag"
          onClick={() => dispatch(addToCart(product))}
        >
          Add To Bag
        </button>

        {/* <p>
          <Link style={{ textDecoration: "none", color: "black" }}>
            Fabrics 2 Piece
          </Link>
        </p> */}
       
        <p style={{ marginTop: "1px" }}>{product.title}</p>
         <p style={{ marginTop: "1px" }}>{product.description}</p>
        <p>
          <span
            className="text-decoration-line-through"
            style={{ marginRight: "10px" }}
          >
            {product.originalPrice}
          </span>{" "}
          <span className="text-danger">Rs {product.discountedprice}</span>
        </p>
      </div>
    </div>
  ))}
</div>

      
    </div>
    
  );
};

export default Salenew;