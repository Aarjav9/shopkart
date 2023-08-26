import React from "react";
import Header from "../Header";

const BaseWapper= (props)=>{
    return (<>
    <Header/>
    {props.children}
    </>)  
}


export default BaseWapper;
