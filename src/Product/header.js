import React, { useState } from 'react';
import './product.css'
import Snapdeal from './snapdeal-new-logo.jpg';
function Header(){
    return(
        <div >
            <div className="flex-contain">
                <p>India's Fastest Online Shopping Destination</p>
                <p>Gift Cards</p>
                <p>Donate Sanitary Pads</p>
                <p>Help Center</p>
                <p>Sell on Snapdeal</p>
                <p>Download App</p>
            </div>
            <div className="header-main">
            <img src={Snapdeal} alt="snapdeal-logo" style={{height:"35px",width:"150px"}}/>
            <div className="search">
            <input className="input" placeholder="Search products & brands"></input>
            <button className="search-button">
                <span style={{color:"white"}}><i className="fa fa-search"></i> </span> Search </button>
            </div>
            <div style={{color:"white"}}>Cart <span><i className="fa fa-cart-plus fa_custom fa-lg"></i></span></div>
            <div style={{color:"white"}} >Sign In <span> <i class="fa fa-user-circle-o fa_custom"></i></span></div>
            </div>
        </div>
    )
}
export default Header;