import React, { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes"
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {

    const [loggedIn, setLoggedIn] = useState();
    const [load, setLoad] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:5000/authenticate', {
            withCredentials: true
        })
            .then(function (response) {
                setLoggedIn(response.data.authentication)
                setLoad(true);

            }).catch(function (err) {
                console.log(err);
                setLoggedIn(false);
                setLoad(true)
            })
    }, [])
    function authenticated(value) {
        setLoggedIn(value);
    }
    if (load) {

        return (
            <AppRoutes authenticated={authenticated} loggedIn={loggedIn} />

        );
    } else {
        return <h1>Loading...</h1>
    }
}

export default App;
