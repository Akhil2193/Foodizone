import React from "react"
import SearchIcon from '@material-ui/icons/Search';
function Navbar() {
    return (<nav className="navbar">
        <ul className="navbar-list">
            <li className="logo navbar-list-items">foodizone</li>
            <li className="search navbar-list-items"><input name="search-bar" id="search-bar" /><label htmlFor="search-bar"><SearchIcon style={{color:'#787878'}} fontSize="large" /></label></li>
            <li className="authorisation navbar-list-items"><a href="#">Log in</a></li>
            <li className="authorisation navbar-list-items"><a href="#">Sign up</a></li>
        </ul>
    </nav>)
}

export default Navbar;