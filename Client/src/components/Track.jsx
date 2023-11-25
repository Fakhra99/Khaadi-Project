import React from 'react';
import './styles.css'

const Track = () => {
  return (
    <div>
        <img src="https://cx.khaadi.com/static/media/Khaadi-Logo.0bfb805a1b3ce9b61cd6.png" alt="Khaadi logo" className="navMainimg"/>
        <hr />
        <div className='container d-flex justify-content-center align-items-center'>
        <h1 className='fw-bolder'>TRACK YOUR ORDER</h1>
        </div>

        <div class="input-group mb-3">
            <input type="text" placeholder="Enter Your Order number or Tracking number" className='trackOrder'/>
            <button className='trackBtn' style={{marginLeft:"10px"}}>TRACK</button>
        </div>

        <img src="https://cx.khaadi.com/static/media/Khaadi-Logo.0bfb805a1b3ce9b61cd6.png" alt="Khaadi logo" style={{width:"50px", height:"50px", marginTop:"250px", marginLeft:"50px"}}/>
    </div>
  )
}

export default Track