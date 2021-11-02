import React from 'react';
import {GoSearch} from "react-icons/go";

const Search = () => {
    return (
        <div className="nav-search">
            <input type="text"/>
            <GoSearch className="nav-search-icon"/>
        </div>
    );
}

export default Search;