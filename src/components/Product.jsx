import React from "react"; 
import  product1 from "../images/image-product-1.jpg"
import  product2 from "../images/image-product-2.jpg"
import  product3 from "../images/image-product-3.jpg"
import  product4 from "../images/image-product-4.jpg" 
import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg"
import iconCart from "../images/icon-cart.svg"
import { useState } from "react";

export default function  () {
 
    const images =[product1,product2,product3,product4]
    const [index,setIndex]=useState(0)
        function active (x){ 
                setIndex(x)
                document.querySelector("#image"+0).classList.remove("hide");
                document.querySelector("#image"+1).classList.remove("hide");
                document.querySelector("#image"+2).classList.remove("hide");
                document.querySelector("#image"+3).classList.remove("hide");
                document.querySelector("#image"+x).classList.add("hide");
                
        }
    return (
        <section className="product">
            <div className="left">
                <img src={images[index]}alt="" className="main-image" />
                <div className="image-list">
                    <img src={product1} alt="" id="image0" className="hide"  onClick={()=>{active(0)} } />
                      <img src={product2} alt="" id="image1" onClick={()=>{active(1)} }/>
                    <img src={product3} alt="" id="image2"  onClick={()=>{active(2)} } />
                    <img src={product4} alt="" id="image3"  onClick={()=>{active(3) }}/>
                </div>
            </div>
            <div className="right">
                <h1>SNEAKER COMPANY</h1>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>these low-profile sneakers are your perfect casual wear companion .Featuring a durable rubber outer sole , they'll withstand everything the weather can offer .</p>
                <div className="price-container">
                <span className="price">$125.00</span>
                <span className="percent">50%</span>
                </div>
                
                <div className="right-bottom">
                    <img src={minus} alt="" />
                    <span>0</span>
                    <img src={plus} alt="" />
                    <div className="add">
                        <img src={iconCart} alt="" />
                        <span>Add to cart </span>
                    </div>
                </div>
            </div>
        </section>
    )
}