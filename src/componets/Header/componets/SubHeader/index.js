import React from "react";
import "./index.scss"
import Policy from "../Policy";
import LoginSocial from "../LoginSocial";
const SubHeader =()=> {
    return (<div className="sub-header">
        <Policy/>
        <LoginSocial/>
    </div>)
}
export default SubHeader;
