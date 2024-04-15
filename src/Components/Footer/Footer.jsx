import React from "react";
import './Footer.css'
import footer_logo from '../Assets/shopping-bagimages-removebg-preview.png'
import instagram from '../Assets/instagram-removebg-preview.png'
import whatsapp from '../Assets/whatsapp-removebg-preview.png'
import facebook from '../Assets/facebook__1_-removebg-preview.png'
const Footer = () =>{
    return(
        <div className="footer">
         <div className="footer-logo">
            <img src={footer_logo} alt=""/>
            <p>SHOPPER</p>
         </div>
         <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
         </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram} alt="" className="imagesocial"/>
            </div>
            <div className="footer-icons-container">
                <img src={facebook} alt="" className="imagesocial"/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="" className="imagesocial"/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 -All Rights Reserved</p>
        </div>
        </div>
    )
}
export default Footer