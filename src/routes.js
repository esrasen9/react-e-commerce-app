import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";
import SignIn from "./components/pages/signin/SignIn";

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
        path: "/orders",
        component:""
    },
    {
        exact: true,
        path: "/cart",
        component:Cart
    }
];