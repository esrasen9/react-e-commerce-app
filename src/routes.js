import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";
import SignIn from "./components/pages/signin/SignIn";
import Payment from "./components/pages/payment/Payment";
import Favorites from "./components/pages/favorites/Favorites";

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
    }
];