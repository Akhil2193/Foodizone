import React from "react"
import SearchIcon from '@material-ui/icons/Search';
function Navbar() {
    return (<nav className="navbar">
        <ul className="navbar-list">
            <li className="logo">foodizone</li>
            <li className="search"><input name="search-bar" id="search-bar" /><label htmlFor="search-bar"><SearchIcon /></label></li>
            <li className="authorisation">Log in</li>
            <li className="authorisation">Sign up</li>
        </ul>
    </nav>)
}

export default Navbar;