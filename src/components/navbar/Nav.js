import React from 'react';
import {NavLink} from "react-router-dom";
import Search from "./Search";
import {AiOutlineShoppingCart} from "react-icons/all";
import "./Nav.css";
import {useStateValue} from "../../context/Context";
import {auth} from "../../firebase/firebase";
const Nav = () => {
    const [initialState]= useStateValue();
    const {user,cart} = initialState;
    const handleSign = () => {
        if(user) auth.signOut().catch(err => alert(err.message));
    }
    return (
        <div className="nav">
            <NavLink className="logo-link" to="/">
                <p>amazon</p>
            </NavLink>
            <Search/>
            <NavLink 
                onClick={handleSign}
                className="nav-link signin-link" 
                to={!user && "/signin"}>
                <span>Account & Lists</span>
                {
                    user ? (<p>Sign Out</p>) : (<p>Sign In</p>)
                }
            </NavLink>
            <NavLink className="nav-link orders-link" to="/orders">
                <span>Returns</span>
                <p>& Orders</p>
            </NavLink>
            <NavLink className="cart-link" to="/cart">
                <AiOutlineShoppingCart size="30"/>
                <div className="cart-quantity">
                    <p>{ cart.length}</p>
                </div>
            </NavLink>
        </div>
    );
}

export default Nav;