import React, { useState } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from "axios";
import { Redirect } from "react-router-dom";
function AccountIcon() {
    const [loggedOut, setLoggedOut] = useState(false)
    function handleLogOut() {
        axios.get('http://localhost:5000/logout')
            .then(function (response) {
                setLoggedOut(response.data.authentication)
                console.log(response.data)
            })
            .catch(function (err) {
                console.log(err);
            })
    }
    if (loggedOut) {
        return <Redirect to="/authenticate" />
    }
    return (
        <div className="mobile-authentication-icon" onClick={handleLogOut}><AccountCircleIcon fontSize="large" /></div>)
}

export default AccountIcon;