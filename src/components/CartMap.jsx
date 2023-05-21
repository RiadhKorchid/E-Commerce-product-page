import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Delete from "../images/icon-delete.svg"
import { deleteFromCartAction } from "../app/actionCreators/cartActions";
import toast from "react-hot-toast"
export default function CartMap() {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    console.log(cart)
    function deleteCommand(id) {
        dispatch(deleteFromCartAction(id))
        toast.success("Removed From Cart",{id:"add"})
    }
    return <>{cart.map((value) => (
        <div key={value.id} className='command' >
            <img src={value.image} />
            <div className='div1'>
                <h1>{value.title}</h1>
                <div className='div2'>
                    <span>${value.price}x{value.quantity} ${value.price * value.quantity}</span>
                </div>
            </div>
            <img src={Delete} className="delete" onClick={() => deleteCommand(value.id)} />
        </div>)
    )}</>


}