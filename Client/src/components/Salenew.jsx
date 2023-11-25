import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './styles.css';

const Salenew = () => {
  return (
    <div>
      <div>
        <img src="https://pk.khaadi.com/on/demandware.static/-/Sites-storefront-catalog-pak/default/dw1c55b206/images/plpbanners/PLP-BANNER-DESKTOP-SALE.jpg" alt="Sale new" className='salebanner'/>
      </div>

      <div>
        <nav style={{ "--bs-breadcrumb-divider": "'/'" }} aria-label="breadcrumb">
          <ol className="breadcrumb bcrum">
            <li className="breadcrumb-item "><Link to="/" className='bcrumLi'>Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page" style={{fontWeight:"bold"}}>Sale</li>
          </ol>
        </nav>
      </div>

      <div className='d-flex'>
        <p className='bcrum'>Sort by</p>

        <select className='bcrumDropdown' >
        <option selected>Recommended</option>
        <option value="1">Most Popular</option>
        <option value="2">New Arrival</option>
        <option value="3">Price Low To High</option>
        <option value="3">Price High To Low</option>
        </select>

        <button>FILTER  Workkkkkk</button>
      </div>

      <div className='d-flex ml-5 align-item-center justify-content-evenly'>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7a83b8b8/images/hi-res/lla230810_red_1.jpg?sw=800&sh=1200" class="card-img-top" alt="..."/>
        <div class="card-body">
        <Link to="#" class="btn btn-secondary">Go somewhere</Link>
        </div>
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7a83b8b8/images/hi-res/lla230810_red_1.jpg?sw=800&sh=1200" class="card-img-top" alt="..."/>
        <div class="card-body">
        <Link to="#" class="btn btn-secondary">Go somewhere</Link>
        </div>
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7a83b8b8/images/hi-res/lla230810_red_1.jpg?sw=800&sh=1200" class="card-img-top" alt="..."/>
        <div class="card-body">
        <Link to="#" class="btn btn-secondary">Go somewhere</Link>
        </div>
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7a83b8b8/images/hi-res/lla230810_red_1.jpg?sw=800&sh=1200" class="card-img-top" alt="..."/>
        <div class="card-body">
        <Link to="#" class="btn btn-secondary">Go somewhere</Link>
        </div>
        </div>
      </div>

      <div className='d-flex ml-5 align-item-center justify-content-evenly'>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7a83b8b8/images/hi-res/lla230810_red_1.jpg?sw=800&sh=1200" class="card-img-top" alt="..."/>
        <div class="card-body">
        <Link to="#" class="btn btn-secondary">Go somewhere</Link>
        </div>
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7a83b8b8/images/hi-res/lla230810_red_1.jpg?sw=800&sh=1200" class="card-img-top" alt="..."/>
        <div class="card-body">
        <Link to="#" class="btn btn-secondary">Go somewhere</Link>
        </div>
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7a83b8b8/images/hi-res/lla230810_red_1.jpg?sw=800&sh=1200" class="card-img-top" alt="..."/>
        <div class="card-body">
        <Link to="#" class="btn btn-secondary">Go somewhere</Link>
        </div>
        </div>
        <div class="card" style={{width: "20rem"}}>
        <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7a83b8b8/images/hi-res/lla230810_red_1.jpg?sw=800&sh=1200" class="card-img-top" alt="..."/>
        <div class="card-body">
        <Link to="#" class="btn btn-secondary">Go somewhere</Link>
        </div>
        </div>
      </div>

      
  </div>
  );
}

export default Salenew;
