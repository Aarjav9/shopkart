import React from "react";
import { ReactSVG } from "react-svg";
import Truck from "../../../../assest/icons/Truck.svg";
import "./index.scss"
const Policy = () => {
  return (<div className="policy">
    <div className="delivery">
      <div className="free-delivery">
        <ReactSVG src={Truck} className="truck" />
        <span className="freetext">
          Free Delivery
        </span></div>
      <span className="slach">
        |
      </span>
      <span className="freetext">
        Return Policy
      </span>

    </div>
  </div>)
}
export default Policy;