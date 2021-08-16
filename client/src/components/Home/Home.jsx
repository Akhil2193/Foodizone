import React from "react";
import Navbar from "../Navbar"
import RestaurantList from "./RestaurantList";
import AccountIcon from "../AccountIcon";


function Home() {
    return (

        <div>
            <Navbar searchDisplay={true} />
            <AccountIcon />
            <RestaurantList />
            

        </div>
    );
}

export default Home;