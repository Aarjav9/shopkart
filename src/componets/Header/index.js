import React from "react";
import Banner from "./componets/Banner";
import NavigationBar from "./componets/NavigationBar";
import SubHeader from "./componets/SubHeader";
import "./index.scss"
const Header= () => {
    return (<div className="header">
        <SubHeader/>
        <Banner />
        <NavigationBar/>

    </div>)
}

export default Header;
