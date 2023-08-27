import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './screens/Home'
import BaseWapper from "./componets/BaseWrapper";

function Main() {
  return (<Router>

    <BaseWapper>
      <Routes>
        <Route path={'/'} exact element={<Home />} />
      </Routes>
    </BaseWapper>
  </Router>)
}
export default Main;
