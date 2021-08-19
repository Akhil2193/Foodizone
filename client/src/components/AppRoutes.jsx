import React from "react";
import Home from "./Home/Home";
import Order from "./Order/Order";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Authentication/Login"
import Register from "./Authentication/Register"
import Location from "./Payment/Location"
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
            <Route exact path='/:id/order/location'>
                <Location />
            </Route>
        </Switch>

    );
}

export default AppRoutes;
