import React from "react";

function BillItem(props) {
    return (
        <div className="order-food">
            <div className="order-food-item">
                <img className="order-food-item-image" src={`/images/dishes/1.jpg`} alt="" />
                <img src="/images/veg.png" alt="" className="order-food-item-veg" style={{ filter: `${props.veg ? "none" : "hue-rotate(247deg)"}` }} />
                <div className="order-food-item-detail">
                    <p className="order-food-item-name">
                        {props.name}&emsp;({props.quantity} pcs.)
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
                
            }}>
                Add
            </button>
            <button className="remove-from-cart" onClick={()=>{
                props.removeFromCart(props.id)
                
            }}>Remove</button>
            </div>
        </div>
    )
}

export default BillItem;