import React from 'react';
import {NavLink} from "react-router-dom";
import Search from "./Search";
import {AiOutlineShoppingCart, FiHeart} from "react-icons/all";
import "./Nav.css";
import {useStateValue} from "../../context/Context";
import {auth} from "../../firebase/firebase";
import NavSubLinks from "./NavSubLinks";
const Nav = () => {
    const [initialState]= useStateValue();
    const {user,cart} = initialState;
    const handleSign = () => {
        if(user) auth.signOut().catch(err => alert(err.message));
    }
    return (
       <div>
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
               {
                   user ? (
                       <NavLink className="nav-link fav-link" to="/favorites">
                           <FiHeart size="30"/>
                       </NavLink>
                   ) : null
               }
               <NavLink className="cart-link" to="/cart">
                   <AiOutlineShoppingCart size="30"/>
                   <div className="cart-quantity">
                       <p>{ cart.length}</p>
                   </div>
               </NavLink>
           </div>
           <NavSubLinks />
       </div>
    );
}

export default Nav;