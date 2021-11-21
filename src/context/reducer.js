export const initialState = {
    cart: [],
    favorites: [],
    user: null,
    discountCode:"WUEQ10",
    subtotal:0,
    products: []
};

export const getAllProducts = () => {
    return fetch('https://fakestoreapi.com/products')
                .then(res=>res.json());
}

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
        case "SET_PRODUCTS":
            return {
                ...state,
                products: [...action.payload]
            }
        case "SET_SUBTOTAL"  :
            return {
                ...state,
                subtotal: state.cart.reduce((acc,product) => {
                    return acc + product.price;
                },0).toFixed(2)
            }
        case "ADD_FAVORITES"  :
            const isExist = state.favorites.find((fav) =>(fav.id === action.payload.id));
            if(isExist){
                return {...state}
            }
            else {
                return {
                    ...state,
                    favorites: [...state.favorites,action.payload]
                }
            }
        case "REMOVE_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites.filter(fav => fav.id !== action.payload.id)]
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