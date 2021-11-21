import './App.css';
import Nav from "./components/navbar/Nav";
import {Route} from "react-router-dom";
import {routes} from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useEffect} from "react";
import {auth} from "./firebase/firebase";
import {useStateValue} from "./context/Context";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Payment from "./components/pages/payment/Payment";
import ProductsByCategory from "./components/navbar/ProductsByCategory";
import {getAllProducts} from "./context/reducer";

const promise = loadStripe("pk_test_51JxGiFA3KvtRoDsuY0Jng2rJFNLDhfQG8IOZdQSly3kPjesTFctgpsBKUlStfyMqX2b1LbGvDouzZE1AcKdO1QQe00wZQJBWci");

const App = () => {
    const [initialState,dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
           if(user){
               dispatch({
                   type: "SET_USER",
                   user
               })
           }
           else{
               dispatch({
                   type: "SET_USER",
                   user: null
               })
           }
        })
        getAllProducts().then(res => dispatch({
            type: "SET_PRODUCTS",
            payload: res
        }))
    },[])
    return (
        <Elements stripe={promise}>
            <div className="app">
                <Nav/>
                {
                    routes.map((route,index) =>{
                        if(route.component === Payment) {
                            return(
                                <Route key={index}
                                       exact={route.exact}
                                       path={route.path}>
                                    <Elements stripe={promise}>
                                        <Payment />
                                    </Elements>
                                </Route>
                            )
                        }
                        else if(route.component === ProductsByCategory){
                            return (
                                <Route key={index}
                                       exact={route.exact}
                                       path={route.path}>
                                    <ProductsByCategory category={route.category}/>
                                </Route>
                            )
                        }
                        else {
                            return (
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    path={route.path}
                                    component={route.component}/>)
                        }
                    })
                }
            </div>
        </Elements>
    );
}

export default App;
