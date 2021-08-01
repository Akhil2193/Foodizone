import React from "react";
import Home from "./Home";
import Order from "./Order";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path={`/:id/order`}>
                <Order />
                
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        
    );
}

export default App;
