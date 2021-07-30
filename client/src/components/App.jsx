import React from "react";
// import axios from "axios";
import Navbar from "./Navbar"
import RestaurantList from "./RestaurantList";
function App() {
    return (

        <div>
            <Navbar />
            
            {/* <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant /> */}
            <RestaurantList />
            
        </div>
    );
}

export default App;
