import React from "react";
import {
    BrowserRouter as Router,
    Routes
  } from "react-router-dom";
import PublicRoute from "./componets/PublicRoute";
import BaseWapper from "./componets/BaseWrapper";

function Main(){
    return ( <Router> 
        
             <BaseWapper>
             <Routes>
             </Routes>
             </BaseWapper>
    </Router>)
}
export default Main;
