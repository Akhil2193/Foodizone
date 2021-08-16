import React from "react";
import Home from "./Home";
import Order from "./Order";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Authentication/Login"
import Register from "./Authentication/Register"

function AppRoutes(props) {
    return (
        <Switch>
            <Route exact path="/">
                {props.loggedIn ? <Home /> : <Redirect to="/authenticate" />}
            </Route>

            <Route exact path="/authenticate">
                <Login authenticated={props.authenticated} />
            </Route>
            <Route exact path={`/:id/order`}>
                {props.loggedIn ? <Order /> : <Redirect to="/authenticate" />}
            </Route>
            <Route exact path="/authenticate/register">
                <Register />
            </Route>
        </Switch>

    );
}

export default AppRoutes;
