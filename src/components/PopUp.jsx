import React from "react";
import iconClose from "../images/icon-close.svg"
import iconNext from "../images/icon-next.svg"
import iconPrevious from "../images/icon-previous.svg"
import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg"
import { useState } from "react";
export  default function (){
    const images = [product1, product2, product3, product4]
    const [num, setNum] = useState(0)
    function active(x) {   console.log(x)
        setNum(x)
     
        document.querySelector("#Image0").classList.remove("hide");
        document.querySelector("#Image1").classList.remove("hide");
        document.querySelector("#Image2").classList.remove("hide");
        document.querySelector("#Image3").classList.remove("hide");
        document.querySelector("#Image"+x).classList.add("hide");

    }
    return(
      <div className="pop">  
        <div className="popup">
                
               <div className="image-container">  
                 <img src={iconClose} alt=""  className="close" onClick={()=> document.querySelector(".pop").classList.remove("show")}/>
                    <div className="container next" onClick={()=> {active(num);(num==3)?setNum(0):setNum(num+1) } }> 
                        <img src={iconNext} alt="" />
                    </div>
                    <img src={images[num]} alt="" className="main-image" />
                    <div className="container previous " onClick={()=> {active(num);(num==0)?setNum(3):setNum(num-1) }}> 
                        <img src={iconPrevious} alt="" />
                    </div>
            </div>
            <div className="image-list">
                    {images.map((value, ind, array) => {
                        var x = "Image" + ind
                        return <img src={value} id={x} onClick={() => active(ind)} />
                    })
                    }
            </div>
        </div>
        </div>
    )
}