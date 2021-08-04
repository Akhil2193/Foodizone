import React from "react";
import Restaurant from "./Restaurant";

function RestaurantSearch(props){
    return (

        <div className="restaurant-list">
            {props.restaurants.map(restaurant => <Restaurant
                key={restaurant._id}
                id={restaurant._id}
                name={restaurant.name}
                type={restaurant.type}
                items={restaurant.foodItems} />
            )}
        </div>)
}

export default RestaurantSearch;