import React from "react";
import Header from "../Header";
import Footer from "../Footer";
const BaseWapper= (props)=>{
    return (<>
    <Header/>
    {props.children}
    <Footer/>
   
    </>)  
}


export default BaseWapper;
