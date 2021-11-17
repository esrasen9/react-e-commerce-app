import './App.css';
import Nav from "./components/navbar/Nav";
import {Route} from "react-router-dom";
import {routes} from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useEffect} from "react";
import {auth} from "./firebase/firebase";
import {useStateValue} from "./context/Context";

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
    },[])
    return (
        <div className="app">
            <Nav/>
            {
                routes.map((route,index) =>
                    (<Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}/>))
            }
        </div>
    );
}

export default App;
