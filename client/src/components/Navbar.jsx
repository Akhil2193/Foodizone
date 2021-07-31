import React, {useState} from "react"
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Navbar() {
    return (<nav className="navbar">
        <ul className="navbar-list">
            <li className="logo navbar-list-items">foodizone</li>
            <li className="search navbar-list-items">
                <input name="search-bar" id="search-bar" placeholder="Search for restaurant, cuisine or a dish" spellCheck="false" />
                <label htmlFor="search-bar"><SearchIcon style={{ color: '#787878' }}  /></label>
            </li>
            <li className="authorisation navbar-list-items"><a href="#">Log in</a></li>
            <li className="authorisation navbar-list-items"><a href="#">Sign up</a></li>
        </ul>
        <div className="mobile-authentication-icon"><AccountCircleIcon  fontSize="large" /></div>
    </nav>)
}

export default Navbar;