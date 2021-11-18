export const initialState = {
    cart: [],
    user: null,
    discountCode:"WUEQ10",
    subtotal:0
};

export const reducer = (state,action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart:[...state.cart, action.payload]
            }
        case "REMOVE_TO_CART":
            return {
                ...state,
                cart: [...state.cart.filter(product => product.id !== action.payload)]
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_SUBTOTAL"  :
            return {
                ...state,
                subtotal: state.cart.reduce((acc,product) => {
                    return acc + product.price;
                },0).toFixed(2)
            }
        case "SET_DISCOUNTED_SUBTOTAL":
            return {
                ...state,
                subtotal: (state.cart.reduce((acc,product) => {
                    return acc + product.price;
                },0)*0.9).toFixed(2)
            }
        default:
            return state;
    }
}