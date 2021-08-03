import React from "react"
import SearchIcon from '@material-ui/icons/Search';


function Navbar(props) {
    return (<nav className="navbar">
        <ul className="navbar-list">
            <li className="logo navbar-list-items">foodizone</li>
            <li className="search navbar-list-items" >
                <input name="search-bar" id="search-bar" placeholder="Search for restaurant, cuisine or a dish" spellCheck="false" />
                <label htmlFor="search-bar"><SearchIcon style={{ color: '#787878' }}  /></label>
            </li>
            <li className="authorisation navbar-list-items"><a href="https://www.google.com/">Log in</a></li>
            <li className="authorisation navbar-list-items"><a href="https://www.google.com/">Sign up</a></li>
        </ul>
        
    </nav>)
}
// style={{display: props.searchDisplay?"flex":"none"}}

export default Navbar;