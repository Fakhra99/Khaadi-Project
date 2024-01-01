import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "../Styles/styles.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice/cartSlice";
import Prenav from "../PrenavAndNavbar/Prenav";
import Navbar from "../PrenavAndNavbar/Navbar";
const productsData = [
  {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw541fcf91/images/hi-res/ala230806_teal_1.jpg?sw=800&sh=1200",
    title: "Printed Lawn | Top Dupatta",
    price: "1,500",
  },
  {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwf1f6602f/images/hi-res/bla230806_black_1.jpg?sw=800&sh=1200",
    title: "Printed Lawn | Top Dupatta",
    price: "1,900",
  },
  {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw75f51f17/images/hi-res/ala230821_teal_1.jpg?sw=800&sh=1200",
    title: "Printed Lawn | Top Dupatta",
    price: "2,000",
  },
  {
    imageUrl:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw541fcf91/images/hi-res/ala230806_teal_1.jpg?sw=800&sh=1200",
    title: "Printed Lawn | Top Dupatta",
    price: "2,500",
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

        <select className="bcrumDropdown">
          <option selected>Recommended</option>
          <option value="1">Most Popular</option>
          <option value="2">New Arrival</option>
          <option value="3">Price Low To High</option>
          <option value="3">Price High To Low</option>
        </select>

        <button className="filter">FILTER </button>
      </div>

      <div className="d-flex ml-5 align-item-center justify-content-evenly">
        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7a83b8b8/images/hi-res/lla230810_red_1.jpg?sw=800&sh=1200"
            className="card-img-top card1"
            alt="cardimg"
          />
          <div className="card-body">
            <button to="#" className="Addbtn">
              Add To Bag
            </button>
            <p>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Fabrics 2 Piece
              </Link>
            </p>
            <p style={{ marginTop: "1px" }}> Printed Lawn | Top Dupatta</p>
            <p>
              <span
                className="text-decoration-line-through"
                style={{ marginRight: "10px" }}
              >
                Rs 2,390
              </span>{" "}
              <span className="text-danger">Rs 1,673</span>
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "20rem", position: "relative" }}>
          <img
            src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwe0f16618/images/hi-res/ala230820_black_1.jpg?sw=800&sh=1200"
            className="card-img-top card2"
            alt="cardimg"
          />
          <div class="card-body">
            <button to="#" className="Addbtn">
              Add To Bag
            </button>
            <p>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Fabrics 2 Piece
              </Link>
            </p>
            <p style={{ marginTop: "1px" }}> Printed Lawn | Top Dupatta</p>
            <p>
              <span
                className="text-decoration-line-through"
                style={{ marginRight: "10px" }}
              >
                Rs 2,390
              </span>{" "}
              <span className="text-danger">Rs 1,673</span>
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "20rem" }}>
          <img
            src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwda876d8c/images/hi-res/lla230810_teal_1.jpg?sw=800&sh=1200"
            className="card-img-top card3"
            alt="..."
          />
          <div class="card-body">
            <button to="#" className="Addbtn">
              Add To Bag
            </button>
            <p>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Fabrics 2 Piece
              </Link>
            </p>
            <p style={{ marginTop: "1px" }}> Printed Lawn | Top Dupatta</p>
            <p>
              <span
                className="text-decoration-line-through"
                style={{ marginRight: "10px" }}
              >
                Rs 2,390
              </span>{" "}
              <span className="text-danger">Rs 1,673</span>
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "20rem" }}>
          <img
            src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw43db13af/images/hi-res/bla230806_pink_1.jpg?sw=800&sh=1200"
            className="card-img-top card4"
            alt="..."
          />
          <div class="card-body">
            <button to="#" className="Addbtn">
              Add To Bag
            </button>
            <p>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Fabrics 2 Piece
              </Link>
            </p>
            <p style={{ marginTop: "1px" }}> Printed Lawn | Top Dupatta</p>
            <p>
              <span
                className="text-decoration-line-through"
                style={{ marginRight: "10px" }}
              >
                Rs 2,390
              </span>{" "}
              <span className="text-danger">Rs 1,673</span>
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex ml-5 align-item-center justify-content-evenly">
        {productsData.map((product, index) => (
          <div class="card" style={{ width: "20rem" }}>
            <img
              className="card-img-top card5"
              alt="..."
              src={product.imageUrl}
            />
            <div class="card-body">
             <button className="Addbtn" onClick={() => dispatch(addToCart(product))}>
                Add To Bag
              </button>

              <p>
                <Link style={{ textDecoration: "none", color: "black" }}>
                  Fabrics 2 Piece
                </Link>
              </p>
              <p style={{ marginTop: "1px" }}>{product.title}</p>
              <p>
                <span
                  className="text-decoration-line-through"
                  style={{ marginRight: "10px" }}
                >
                  Rs 2,390
                </span>{" "}
                <span className="text-danger">Rs {product.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default Salenew;