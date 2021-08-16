import React from "react";
import Navbar from "../Navbar"
import RestaurantList from "./RestaurantList";
import AccountIcon from "../AccountIcon";
import Footer from "../Footer/Footer"

function Home() {
    return (

        <div>
            <Navbar searchDisplay={true} />
            <AccountIcon />
            <RestaurantList />
            <Footer />

        </div>
    );
}

export default Home;