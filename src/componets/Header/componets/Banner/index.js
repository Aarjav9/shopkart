import React from "react";
import ShopKartLogo from './../../../../assest/icons/ShopKartlogo.svg';
import { ReactSVG } from "react-svg";

import './index.scss';

const Banner = () => {
    return (<div className="banner">
        <div className="banner-wrapper">
            <div className="logo">
                <ReactSVG src={ShopKartLogo} />
            </div>
            <div className="cart-details">
                <div className="wishlist-count">WISHLIST (0)</div>
                <div className="bag-count">BAG (0)</div>
            </div>
        </div>
    </div>)
}

export default Banner;