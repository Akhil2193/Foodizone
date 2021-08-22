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
            <img  src={`/images/restaurant/${Math.floor(Math.random() * 4) + 1}.jpg`} className="restaurant-image" alt="" />
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