import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './styles.css';

const Wintercollection = () => {
  return (
    <div>
      <div>
        <img src="https://pk.khaadi.com/on/demandware.static/-/Sites-storefront-catalog-pak/default/dwb74333d8/images/plpbanners/Kantha-WC-PLP-Desk-1920x225-2.jpg" alt="Sale new" className='salebanner'/>
      </div>

      <div>
        <nav style={{ "--bs-breadcrumb-divider": "'/'" }} aria-label="breadcrumb">
          <ol className="breadcrumb bcrum">
            <li className="breadcrumb-item "><Link to="/" className='bcrumLi'>Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page" style={{fontWeight:"bold"}}>Winter Collection</li>
          </ol>
        </nav>
      </div>

      <div className='d-flex mb-3'>
        <p className='bcrum'>Sort by</p>

        <select className='bcrumDropdown' >
        <option selected>Recommended</option>
        <option value="1">Most Popular</option>
        <option value="2">New Arrival</option>
        <option value="3">Price Low To High</option>
        <option value="3">Price High To Low</option>
        </select>

        <button className='filter'>FILTER </button>
      </div>

      <div className='d-flex ml-5 align-item-center justify-content-evenly'>
        <div className="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwf070223c/images/hi-res/eet235103_black_1.jpg?sw=800&sh=1200" className="card-img-top w_card1" alt="cardimg"/>
        <div className="card-body">
        <button to="#" className="Addbtn" >Add To Bag</button>
        <p><Link style={{textDecoration:"none", color:"black"}}>Fabrics 2 Piece</Link></p>
            <p style={{marginTop:"1px"}}> Printed Lawn | Top Dupatta</p>
            <p><span className='text-decoration-line-through' style={{marginRight:"10px"}}>Rs 2,390</span> <span className='text-danger'>Rs 1,673</span></p>
       
        </div>
        </div>
        <div class="card" style={{width: "20rem", position:"relative"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw19bd1593/images/hi-res/alk231105_navy_1.jpg?sw=800&sh=1200" className="card-img-top w_card2" alt="cardimg"/>
        <div class="card-body">
        <button to="#" className="Addbtn" >Add To Bag</button>
        <p><Link style={{textDecoration:"none", color:"black"}}>Fabrics 2 Piece</Link></p>
            <p style={{marginTop:"1px"}}> Printed Lawn | Top Dupatta</p>
            <p><span className='text-decoration-line-through' style={{marginRight:"10px"}}>Rs 2,390</span> <span className='text-danger'>Rs 1,673</span></p>
        </div>
        
        
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw688aca25/images/hi-res/alk231109_d-green_1.jpg?sw=800&sh=1200" className="card-img-top w_card3" alt="..."/>
        <div class="card-body">
        <button to="#" className="Addbtn" >Add To Bag</button>
        <p><Link style={{textDecoration:"none", color:"black"}}>Fabrics 2 Piece</Link></p>
            <p style={{marginTop:"1px"}}> Printed Lawn | Top Dupatta</p>
            <p><span className='text-decoration-line-through' style={{marginRight:"10px"}}>Rs 2,390</span> <span className='text-danger'>Rs 1,673</span></p>
        </div>
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw3cb3ff6b/images/hi-res/alk231105_green_1.jpg?sw=800&sh=1200" className="card-img-top w_card4" alt="..."/>
        <div class="card-body">
        <button to="#" className="Addbtn" >Add To Bag</button>
        <p><Link style={{textDecoration:"none", color:"black"}}>Fabrics 2 Piece</Link></p>
            <p style={{marginTop:"1px"}}> Printed Lawn | Top Dupatta</p>
            <p><span className='text-decoration-line-through' style={{marginRight:"10px"}}>Rs 2,390</span> <span className='text-danger'>Rs 1,673</span></p>
        </div>
        </div>
      </div>

      <div className='d-flex ml-5 align-item-center justify-content-evenly'>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwdf79c967/images/hi-res/alk231109_navy_4.jpg?sw=800&sh=1200" className="card-img-top w_card5" alt="..."/>
        <div class="card-body">
       <button to="#" className="Addbtn" >Add To Bag</button>
        <p><Link style={{textDecoration:"none", color:"black"}}>Fabrics 2 Piece</Link></p>
            <p style={{marginTop:"1px"}}> Printed Lawn | Top Dupatta</p>
            <p><span className='text-decoration-line-through' style={{marginRight:"10px"}}>Rs 2,390</span> <span className='text-danger'>Rs 1,673</span></p>
        </div>
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw5a87af75/images/hi-res/blk231103_red_1.jpg?sw=800&sh=1200" className="card-img-top w_card6" alt="..."/>
        <div class="card-body">
        <button to="#" className="Addbtn" >Add To Bag</button>
        <p><Link style={{textDecoration:"none", color:"black"}}>Fabrics 2 Piece</Link></p>
            <p style={{marginTop:"1px"}}> Printed Lawn | Top Dupatta</p>
            <p><span className='text-decoration-line-through' style={{marginRight:"10px"}}>Rs 2,390</span> <span className='text-danger'>Rs 1,673</span></p>
        </div>
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw240a6bd0/images/hi-res/blk231103_purple_1.jpg?sw=800&sh=1200" className="card-img-top w_card7" alt="..."/>
        <div class="card-body">
        <button to="#" className="Addbtn" >Add To Bag</button>
        <p><Link style={{textDecoration:"none", color:"black"}}>Fabrics 2 Piece</Link></p>
            <p style={{marginTop:"1px"}}> Printed Lawn | Top Dupatta</p>
            <p><span className='text-decoration-line-through' style={{marginRight:"10px"}}>Rs 2,390</span> <span className='text-danger'>Rs 1,673</span></p>
        </div>
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw498a3bed/images/hi-res/eet23521_blue_1.jpg?sw=800&sh=1200" className="card-img-top w_card8" alt="..."/>
        <div class="card-body">
       <button to="#" className="Addbtn" >Add To Bag</button>
        <p><Link style={{textDecoration:"none", color:"black"}}>Fabrics 2 Piece</Link></p>
            <p style={{marginTop:"1px"}}> Printed Lawn | Top Dupatta</p>
            <p><span className='text-decoration-line-through' style={{marginRight:"10px"}}>Rs 2,390</span> <span className='text-danger'>Rs 1,673</span></p>
        </div>
        </div>
      </div>

      
  </div>
  );
}

export default Wintercollection;
