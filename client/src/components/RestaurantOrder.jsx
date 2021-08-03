import React, { useState } from "react";
import Menu from "./Menu";
function RestaurantOrder(props) {
    return (
        <div className="order-restaurant">
            <section className="order-restaurant-header">
                <img className="order-restaurant-image" src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" alt="" />
                <div className="order-restaurant-title">
                    {props.name}
                    
                </div>
                <div className="order-restaurant-rating">
                    rating
                </div>
                <div className="order-restaurant-type">
                    {props.type}
                </div>
            </section>
            <Menu />
        </div>
    )
}
export default RestaurantOrder;