import React from 'react';
import {NavLink} from "react-router-dom";
import {categories} from "./categories";

const NavSubLinks = () => {

    return (
        <div className="nav-sub-links">
            {
                categories.map((category,index) =>
                    (
                        <NavLink activeClassName="active" key={index} to={category.path}>
                            <h6>{category.title}</h6>
                        </NavLink>
                    )
                )
            }

        </div>
    );
}

export default NavSubLinks;