import React from "react";
import NavigationBar from "./componets/NavigationBar";
import SubHeader from "./componets/SubHeader";
import "./index.scss"
const Header= () => {
    return (<div className="header">
        <SubHeader/>
        <NavigationBar/>

    </div>)
}

export default Header;
