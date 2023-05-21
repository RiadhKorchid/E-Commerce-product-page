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
import { useDispatch } from "react-redux";
import { addToCartAction } from "../app/actionCreators/cartActions";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
export default function () {

    const images = [product1, product2, product3, product4]
    const [index, setIndex] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()

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
    function add() {
        const commande = {
            id: 1,
            image: "../images/image-product-1.jpg",
            title: "Fall Limited Edition Sneakers",
            price: 125,
            quantity
        }
        dispatch(addToCartAction(commande))
        toast.success("Added To Cart",{id:"add"})
    }

    return (
        <section className="product">
            <PopUp />
            <div className="left">
                <img src={images[index]} alt="" className="main-image" onClick={() => show()} />
                <div className="image-list">
                    {images.map((value, ind) => {
                        var x = "image" + ind
                        if (ind == 0)
                            return <div className="hide" id={x}> <img src={value} onClick={() => active(ind)} /></div>
                        else
                            return <div id={x}><img src={value} onClick={() => active(ind)} /></div>
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
                    <div className="container">
                        <img src={minus} alt="" onClick={() => (quantity > 0) ? setQuantity(quantity - 1) : setQuantity(0)} />
                        <span>{quantity}</span>
                        <img src={plus} alt="" onClick={() => { setQuantity(quantity + 1) }} />
                    </div>
                    <div className="add" onClick={() => (quantity != 0) ? add() : toast.error("Can't Command With Quantity=0",{id:"add"})}>
                        <img src={iconCart} alt="" />
                        <span>Add to cart </span>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </section>

    )
}