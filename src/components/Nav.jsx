import React from "react";
import logo from "../images/logo.svg";
import  iconCart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import product1 from "../images/image-product-1.jpg";
import Delete from "../images/icon-delete.svg"
export default function ()
 { 
    return (
        <nav>
<div className="nav-left"> 
       <div className="bars" onClick={()=>{document.querySelector(".bars").classList.toggle("clicked");
                document.querySelector(".mobile-list").classList.toggle("show")}}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div> 
        </div>
        <div className="mobile-list">
                    
    <ul>
    <li>Collections</li>
    <li>Men</li>
    <li>Women</li>
    <li>About</li>
    <li>Contact</li>
        </ul>
    
    
    </div>
        <img src={logo} alt="" />
            <ul className="desktop-list">
    <li>Collections</li>
    <li>Men</li>
    <li>Women</li>
    <li>About</li>
    <li>Contact</li>
            </ul>
</div>
<div className="nav-right">
<img src={iconCart} alt=""  className="cart" onClick={()=>{document.querySelector(".cart-container").classList.toggle("cart-clicked")}}/>
<img src={avatar}  className="avatar"alt="" />

</div>
<div className="cart-container">
        <h1>Cart</h1>
        <hr />
        <div id="store">
                        <h1>Store is Empty</h1>
        </div>
</div>
</nav>
    )
 }