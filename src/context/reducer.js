export const initialState = {
    cart: [],
    user: null
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
        default:
            return state;
    }
}