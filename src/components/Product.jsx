import React from "react";
import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg"
import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg"
import iconCart from "../images/icon-cart.svg"
import { useState } from "react";
import PopUp from "./PopUp"
export default function () {

    const images = [product1, product2, product3, product4]
    const [index, setIndex] = useState(0)
    function active(x) {
        setIndex(x)
        console.log(x)
        document.querySelector("#image0").classList.remove("hide");
        document.querySelector("#image1").classList.remove("hide");
        document.querySelector("#image2").classList.remove("hide");
        document.querySelector("#image3").classList.remove("hide");
        document.querySelector("#image" + x).classList.add("hide");

    }
    function show() {
 document.querySelector(".pop").classList.add("show");
    }
    return (
        <section className="product">
        <PopUp/>
            <div className="left">
                <img src={images[index]} alt="" className="main-image" onClick={() => show()} />
                <div className="image-list">
                    {images.map((value, ind, array) => {
                        var x = "image" + ind
                        return <img src={value} id={x} onClick={() => active( ind )} />
                    })
                    }
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