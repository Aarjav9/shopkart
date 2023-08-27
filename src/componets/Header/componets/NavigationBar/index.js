import React from "react";
import './index.scss'
const NavigationBar = () => {
    return (<div className="header-navigation">
        <span className="navigation-wrapper">
            <ul>
                <li><a href="#home" onClick={(e) => e.preventDefault()} >HOME</a></li>
                <li><a href="#about" onClick={(e) => e.preventDefault()}  >ABOUT</a></li>
                <li><a href="#services" onClick={(e) => e.preventDefault()}   >OUR PRODUCTS</a></li>
                <li><a href="#portfolio" onClick={(e) => e.preventDefault()}   >CONTACT US</a></li>
            </ul>
        </span>
    </div>)
}
export default NavigationBar;
