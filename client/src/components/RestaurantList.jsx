import React, { useState } from "react";
import axios from "axios";
import Restaurant from "./Restaurant";


function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    axios.get(`http://localhost:5000/api/`)
        .then(function (response) {
            const updateRestaurants = [...response.data];
            setRestaurants(updateRestaurants);
        })
        .catch(function (error) {
            console.log(error);
        });
    return (

        <div className="restaurant-list">
            {restaurants.map(restaurant => <Restaurant 
                key={restaurant._id}
                name={restaurant.name}
                type={restaurant.type} />
            )}
        </div>)
}

export default RestaurantList;