import { colors } from "@material-ui/core";
import React from "react";

function FoodItem(props) {
    function addItem(){
        alert('Item Added to Cart');
    }
    function removeItem(){
        alert('Item removed from Cart');
    }
    return (
        <div className="order-food">
            <div className="order-food-item">
                <img className="order-food-item-image" src={`/images/dishes/1.jpg`} alt="" />
                <img src="/images/veg.png" alt="" className="order-food-item-veg" style={
                    { filter: `${props.veg ? "none" : "hue-rotate(247deg)"}`,
                        backgroundColor:"white"
                     }} />
                <div className="order-food-item-detail">
                    <p className="order-food-item-name">
                        {props.name}
                    </p>
                    <p className="order-food-item-price">
                        <span>&#8377;</span> {props.price}
                    </p>
                </div>

            </div>
            <div className="cart-buttons">
            <button className="add-to-cart" onClick={() => {
                props.addToCart({
                    id: props.id,
                    name: props.name,
                    price: props.price,
                    veg: props.veg,
                    quantity:1
                })
                addItem();
            }}>
                Add
            </button>
            <button className="remove-from-cart" onClick={()=>{
                props.removeFromCart(props.id)
                removeItem();
            }}>Remove</button>
            </div>
        </div>
    )
}

export default FoodItem;