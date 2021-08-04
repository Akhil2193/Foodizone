import React, { useState,useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar"
import RestaurantList from "./RestaurantList";
import AccountIcon from "./AccountIcon";
import RestaurantSearch from "./RestaurantSearch";

function Home() {
    const [restaurantSearch, setRestaurantSearch] = useState("");
    function handleChange(query) {
        setRestaurantSearch(query);
        console.log(restaurantSearch);
    }
    const [data, setData] = useState([]);
    useEffect(() => {

        let mounted = true;
        axios.get(`http://localhost:5000/api/search/${restaurantSearch}`)
            .then(function (response) {
                if (mounted) {
                    const updateRestaurants = [...response.data];
                    setData(updateRestaurants);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        return () => mounted = false;

    }, []);
    return (

        <div>
            <Navbar searchDisplay={true} onChange={handleChange} />
            <AccountIcon />
            <RestaurantList />
            

        </div>
    );
}

export default Home;