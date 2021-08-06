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
        return () => mounted=false;
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

        return () => mounted=false;
    }, [foodCategory]);

    return (
        <div className="order-restaurant" key={props.id}>
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
            <Menu  category={foodCategory} categoryCount={categoryCount} />
            <section className="restaurant-menu">
                <section className="restaurant-menu-categories">
                    {foodCategory.map(function(category,index){
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
                                        addToCart = {props.addToCart}
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