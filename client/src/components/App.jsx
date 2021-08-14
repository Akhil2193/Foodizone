import React from "react";
import Home from "./Home";
import Order from "./Order";
import {Switch,Route} from "react-router-dom";
import Login from "./Authentication/Login"
import Register from "./Authentication/Register"
function App() {
    return (
        <Switch>
            <Route exact path={`/:id/order`}>
                <Order />
                
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/authenticate">
                <Login />
            </Route>
            <Route exact path="/authenticate/register">
                <Register />
            </Route>
        </Switch>
        
    );
}

export default App;
