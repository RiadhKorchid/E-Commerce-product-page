import * as ActionTypes from "../constants/cartConstants"

const initialState = {
    cart: [],
    count: 0
}
export default function addToCartReducer(State = initialState, Action) {
    switch (Action.type) {
        case ActionTypes.ADD_TO_CART:
            const exist = State.cart.find((value)=> value.id==Action.payload.id)
            if(!exist){
            const newCart = State.cart; 
            newCart.push(Action.payload);
            return {
                cart: newCart,
                count: State.count + 1
            }}
            else {
                return State
            }
        case ActionTypes.DELETE_FROM_CART:
            const newCart =State.cart.filter((product) => Action.payload.id == product.id)
            return {
                cart: newCart ,
                count: State.count - 1
            }
        default: return State
    }
}

