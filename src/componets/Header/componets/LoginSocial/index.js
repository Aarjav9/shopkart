import React from "react";
import "./index.scss"
import { ReactSVG } from "react-svg";
import facebook from "../../../../assest/icons/facebook.svg"
import linkedin from "../../../../assest/icons/linkedin.svg"
import telegram from "../../../../assest/icons/telegram.svg"
import instagram from "../../../../assest/icons/instagram.svg"
const LoginSocial =() =>{
     return (<div className="logic">
        <div className="social">
            <span className="login">
                Login
            </span>
            <span className="divider"></span>
            <span className="follow">
                Follow US
            </span>
            <ReactSVG src={facebook} className="facebook" />
            <ReactSVG src={linkedin} className="linkedin" />
            <ReactSVG src={telegram} className="telegram" />
            <ReactSVG src={instagram} className="instagram" />
        </div>
     </div>
    )
}
export default LoginSocial;
