import Home from "./components/pages/home/Home";
import Cart from "./components/pages/checkout/Cart";

export const routes = [
    {
        exact: true,
        path: "/",
        component:Home
    },
    {
        exact: true,
        path: "/signin",
        component:""
    },
    {
        exact: true,
        path: "orders",
        component:""
    },
    {
        exact: true,
        path: "/cart",
        component:Cart
    }
];