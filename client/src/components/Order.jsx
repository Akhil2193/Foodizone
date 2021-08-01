import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Order(props) {
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
        {restaurant.name}
        <br />
        {restaurant.items.map(item=>(<li>{item.name}</li>))}
        </div>
    );
}

export default Order;