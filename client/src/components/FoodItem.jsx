import React from "react";

function FoodItem(props) {
    return (
        <div className="order-food-item">
            <img className="order-food-item-image" src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg" alt="" />
            <img src="/images/veg.png" alt="" className="order-food-item-veg" style={{ filter: `${props.veg ? "none" : "hue-rotate(247deg)"}` }} />
            <div className="order-food-item-detail">
                <p className="order-food-item-name">
                    {props.name}
                </p>
                <p className="order-food-item-price">
                    <span>&#8377;</span> {props.price}
                </p>
            </div>

        </div>
    )
}

export default FoodItem;