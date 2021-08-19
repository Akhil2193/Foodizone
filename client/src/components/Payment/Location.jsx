import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
function Location() {
    const [displayAlert,setDisplayAlert] = useState(false);
    function handleClick(){
        setDisplayAlert(true);
    }
    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logo authenticate-logo">foodizone</div>
            </Link>
            <div className="location-head">
                <div className="location">
                    <div className="location-text">
                        Enter your Location
                    </div>
                    <input name="location" type="text" placeholder="Enter Address" />
                    <button type='submit' className="location-submit" onClick={handleClick}>Place Order</button>
                    <div className='alert' style={{display:`${displayAlert?'flex':'none'}`}}>
                        <div><ErrorOutlineOutlinedIcon /></div>&nbsp; Sorry, but we are not yet delivering in your area.
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Location;