import React from "react";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Menu() {
    return (
        <div className="order-restaurant-menu">
            <div className="order-restaurant-menu-item">
                <MenuRoundedIcon fontSize="small" />

            </div>
            <div className="order-restaurant-menu-item">
                Menu
            </div>
        </div>
    )
}

export default Menu;