import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";
import Menu from "./Menu";

function RestaurantOrder(props) {
    const foodItems = props.foodItems;
    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItemSorted, setItemSorted] = useState([[]]);
    const [load, setLoad] = useState(false);
    const [categoryCount, setCategoryCount] = useState([]);
    useEffect(() => {
        let mounted = true;
        if (foodItems.length > 0 && mounted) {
            const allCategories = foodItems.map(item => item.category);

            setFoodCategory([...new Set(allCategories)]);

        }
        return () => mounted = false;
    }, [foodItems]);
    useEffect(() => {
        let mounted = true;
        if (foodCategory.length > 0 && mounted) {
            let array2d = [];
            let count = [];
            for (let index = 0; index < foodCategory.length; index++) {
                let category = [];
                for (let i = 0; i < foodItems.length; i++) {
                    if (foodItems[i].category === foodCategory[index]) {
                        category.push(foodItems[i]);
                    }
                }
                count.push(category.length);
                array2d.push(category);

            }
            setItemSorted(array2d);
            setCategoryCount(count);
            setLoad(true);
        }

        return () => mounted = false;
    }, [foodCategory, foodItems]);

    return (
        <div className="order-restaurant" key={props.id}>
            <section className="order-restaurant-header">
                <div className="order-restaurant-image-header">
                    <img className="order-restaurant-image1" src="/images/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg" alt="" />
                    <div className="order-restaurant-image-child">
                        <img src="/images/stefan-johnson-xIFbDeGcy44-unsplash.jpg" alt="" className="order-restaurant-image2 marginbottom5"/>
                        <img src="/images/pablo-merchan-montes-dc_JMu8lb5U-unsplash.jpg" alt="" className="order-restaurant-image2 margintop5" />
                    </div>
                </div>
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
            <Menu category={foodCategory} categoryCount={categoryCount} />
            <section className="restaurant-menu">
                <section className="restaurant-menu-categories">
                    {foodCategory.map(function (category, index) {
                        return (
                            <a href={`#restaurant-menu-categories-${category}`}>
                                {`${category} (${categoryCount[index]})`}
                            </a>
                        )
                    }

                    )}
                </section>
                <section className="restaurant-menu-detail">
                    {(foodCategory.map(function (category, index) {
                        return (
                            <div className="order-restaurant-food-category">
                                <h1 className="order-restaurant-food-category-heading" id={`restaurant-menu-categories-${category}`}>{category}</h1>
                                {load ? foodItemSorted[index].map(item =>
                                    <FoodItem
                                        key={item._id + index}
                                        id={item._id}
                                        name={item.name}
                                        price={item.price}
                                        veg={item.veg}
                                        addToCart={props.addToCart}
                                        removeFromCart={props.removeFromCart}

                                    />) : "data is loading"}
                            </div>
                        )
                    }))
                    }
                </section>
            </section>
        </div>
    )
}
export default RestaurantOrder;