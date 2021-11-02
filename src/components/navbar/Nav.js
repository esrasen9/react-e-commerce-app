import React from 'react';
import {NavLink} from "react-router-dom";
import Search from "./Search";
import {AiOutlineShoppingCart} from "react-icons/all";
import "./Nav.css";
const Nav = () => {
    return (
        <div className="nav">
            <NavLink className="logo-link" to="/">
                <p>amazon</p>
            </NavLink>
            <Search/>
            <NavLink className="nav-link signin-link" to="/signin">
                <span>Hello, Sign in</span>
                <p>Account & Lists</p>
            </NavLink>
            <NavLink className="nav-link orders-link" to="/orders">
                <span>Returns</span>
                <p>& Orders</p>
            </NavLink>
            <NavLink className="cart-link" to="/cart">
                <AiOutlineShoppingCart size="30"/>
                <div className="cart-quantity">0</div>
            </NavLink>
        </div>
    );
}

export default Nav;