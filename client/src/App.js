import { Landing } from "./pages/Landing";

import React from "react";

import { BrowserRouter as Router,Routes, Switch, Route } from 'react-router-dom'
import {Register, Error} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Landing /> }></Route>
        <Route path="/register" element={ <Register/> }></Route>
        <Route path="/home" element={ <div>Home</div> }></Route>
        <Route path="*" element={ <Error/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
