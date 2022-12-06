import React from "react";
import logo from "../images/logo.svg"
import  iconCart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
export default function ()
 {
    return (
        <nav>
<div className="nav-left">
        <img src={logo} alt="" />
            <ul>
    <li>Collections</li>
    <li>Men</li>
    <li>Women</li>
    <li>About</li>
    <li>Contact</li>
            </ul>
</div>
<div className="nav-right">
<img src={iconCart} alt="" />
<img src={avatar}  className="avatar"alt="" />
</div>
</nav>
    )
 }