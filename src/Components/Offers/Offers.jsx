import React from "react";
import './Offers.css';
import excl_img from '../Assets/exclusive1.png'
const Offers = () =>{
    return(
        <div className="offers">
        <div className="offers-left">
         <h1 >Exclusive</h1>
         <h1>Offers For You</h1>
         <p>ONLY ON BEST SELLERS PRODUCT</p>
         <button>Check Now</button>
        </div>
        <div className="offers-right">
         <img src={excl_img} alt="" className="exclusive"/>
        </div>
        </div>
    )
}
export default Offers