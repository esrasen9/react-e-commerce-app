import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";
import SignIn from "./components/pages/signin/SignIn";
import Payment from "./components/pages/payment/Payment";
import Favorites from "./components/pages/favorites/Favorites";
import {categories} from "./components/navbar/categories";
import ProductsByCategory from "./components/navbar/ProductsByCategory";

export const routes = [
    {
        exact: true,
        path: "/",
        component:Home
    },
    {
        exact: true,
        path: "/signin",
        component:SignIn
    },
    {
        exact: true,
        path: "/favorites",
        component:Favorites
    },
    {
        exact: true,
        path: "/cart",
        component:Cart
    },
    {
        exact: true,
        path: "/payment",
        component:Payment
    },
    ...categories.map(category => {
        return {
            exact: true,
            path: category.path,
            category: category.categoryName,
            component:ProductsByCategory
        }
    })
];