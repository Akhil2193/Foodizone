import React, { useState, useEffect } from "react";
import axios from "axios";
import Restaurant from "./Restaurant";


function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        let mounted = true;
        axios.get(`http://localhost:5000/api/`)
            .then(function (response) {
                if (mounted) {
                    const updateRestaurants = [...response.data];
                    setRestaurants(updateRestaurants);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            return () => mounted = false;
    });
    return (

        <div className="restaurant-list">
            {restaurants.map(restaurant => <Restaurant
                key={restaurant._id}
                id={restaurant._id}
                name={restaurant.name}
                type={restaurant.type}
                items={restaurant.foodItems} />
            )}
        </div>)
}

export default RestaurantList;