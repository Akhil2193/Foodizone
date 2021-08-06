import React from "react";
import {Link} from "react-router-dom";
function add3Dots(string, limit)
{
  var dots = "...";
  if(string.length > limit)
  {
    string = string.substring(0,limit) + dots;
  }
 
    return string;
}
function Restaurant(props){
    return(
        
        <Link to={`/${props.id}/order`} style={{textDecoration:'none'}}>
        <div className="restaurant-container">
            <img  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" className="restaurant-image" alt="" />
            <div className="restaurant-container-title">
                {props.name}
            </div>
            <div className="restaurant-container-rating">
                rating
            </div>
            <div className="restaurant-container-type">
                {add3Dots(`${props.type}`,41)}
                
            </div>
        </div>
        </Link>
        
        
    )
}

export default Restaurant;