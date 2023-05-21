import React from "react";
import logo from "../images/logo.svg";
import iconCart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import product1 from "../images/image-product-1.jpg";
import Delete from "../images/icon-delete.svg"
import { useSelector } from "react-redux";
import CartMap from "./CartMap"
export default function () {
    const count = useSelector((state) => state.cart.count)
    return (
        <nav>
            <div className="nav-left">

                <div className="bars" onClick={() => {
                    document.querySelector(".bars").classList.toggle("clicked");
                    document.querySelector(".list").classList.toggle("show");
                    document.querySelector(".cart-container").classList.remove("cart-clicked") 
                }}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>


                <img src={logo} alt="" />
                <div className="list">

                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>


                </div>
            </div>
            <div className="nav-right">
                <div className="div">
                    <span>{count}</span>
                    <img src={iconCart} alt="" className="cart" onClick={() => {
                            document.querySelector(".bars").classList.remove("clicked");
                            document.querySelector(".list").classList.remove("show");
                             document.querySelector(".cart-container").classList.toggle("cart-clicked") }} />
                </div>
                <img src={avatar} className="avatar" alt="" />
                <div className="cart-container">
                    <h1>Cart</h1>
                    <hr />
                    <div id="store">
                        <h1>{(count == 0) ?
                            "Store is Empty" :
                            <CartMap />
                        }</h1>
                    </div>
                </div>
            </div>

        </nav>
    )
}