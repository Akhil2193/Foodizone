import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import RestaurantOrder from "./RestaurantOrder";
import AccountIcon from "./AccountIcon";
function Order() {
    var { id } = useParams();
    const [restaurant, setRestaurant] = useState({
        id:"",
        name:"",
        type:"",
        items:[]
    });
    useEffect(()=>{
        let mounted = true;
        axios.get(`http://localhost:5000/api/${id}`)
        .then(function(response){
            if(mounted){
                setRestaurant({
                    id:  response.data.id,
                    name: response.data.name,
                    type: response.data.type,
                    items: [...response.data.foodItems]
                });
            }
        }).catch(function(error){
            console.log(error);
        })
        return () => mounted = false;
    })
    return (
        <div>
        <Navbar searchDisplay = {false} />
        <AccountIcon />
        {/* {restaurant.name}
        <br />
        {restaurant.items.map(item=>(<li>{item.name}</li>))} */}
        <RestaurantOrder 
            id = {restaurant.id}
            name = {restaurant.name}
            type = {restaurant.type}
            foodItems = {restaurant.items}
        />
        </div>
    );
}

export default Order;