import React, { useState } from "react";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

function add3Dots(string, limit)
{
  var dots = "...";
  if(string.length > limit)
  {
    string = string.substring(0,limit) + dots;
  }
 
    return string;
}

function Menu(props) {
    const [dropDown, setDropDown] = useState(false);
    function handleClick() {
        if (dropDown) {
            setDropDown(false);
        }
        else {
            setDropDown(true);
        }
    }

    return (
        <div>
            <div className="order-restaurant-dropdown" style={{ display: `${dropDown ? "block" : "none"}` }}>
                {props.category.map((category,index) => {
                    return (
                        <li className="order-restaurant-dropdown-item"><a href="www.google.com">
                            <div className="order-restaurant-dropdown-item-text">
                                {add3Dots(`${category}`,18)}
                            </div>
                            <div className="order-restaurant-dropdown-item-count">
                                {props.categoryCount[index]}
                            </div>
                        </a>
                        </li>)
                })}
            </div>
            <button className="order-restaurant-menu" onClick={handleClick}>
                <div className="order-restaurant-menu-item">
                    {dropDown?<ClearRoundedIcon fontSize="small" />:<MenuRoundedIcon fontSize="small" />}

                </div>
                <div className="order-restaurant-menu-item">
                    Menu
                </div>
            </button>
        </div>
    )
}

export default Menu;