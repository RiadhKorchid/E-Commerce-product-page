import * as actionTypes from "../constants/cartConstants"

export function addToCartAction(command) {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: command
    }
}
export function deleteFromCartAction(command) {
    return {
        type: actionTypes.DELETE_FROM_CART,
        payload: command
    }
}