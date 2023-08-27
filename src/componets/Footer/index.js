import React from "react";
import  Form  from "../Header/componets/Form";
import { ReactSVG } from "react-svg";
import sendbutton from "../../assest/icons/sendbuton.svg"
import "./index.scss"
const Footer = () => {
    return (
    <div className="footer">
        <div className="name">
            Newslleter
            
        </div>
        <Form/>
        <div className="value">
        Get news about articles and updates 
        in your inbox.
        </div>
            <div className="getin">
            GET  <br></br>IN TOUCH
            <ReactSVG src={sendbutton} className="sendbutton" />
            </div>
             
        <div className="bottom">
        Copyright 2022 All Right Reserved By SG
        </div>
        
    </div>
    )
}

export default Footer;
