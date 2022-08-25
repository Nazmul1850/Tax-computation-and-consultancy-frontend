import { Landing } from "./pages/Landing";

import React from "react";

import { BrowserRouter as Router,Routes, Switch, Route } from 'react-router-dom'
import {Register, Error} from "./pages";
import {Profile, SharedLayout, Calculator, Consultation, Salary, Investment, Business, HouseProperty, Files } from './pages/dashboard'
import Protectedroute from "./pages/Protectedroute";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={ <Landing /> }></Route>
        <Route path="/register" element={ <Register/> }></Route>
        <Route path="/"  element={
                <Protectedroute>
                  <SharedLayout />
                </Protectedroute>}>
          <Route path='salary' element={<Salary />}></Route>
          <Route path='business' element={<Business />}></Route>
          <Route path='investment' element={<Investment />}></Route>
          <Route path='house' element={<HouseProperty />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='consultation' element={<Consultation />}></Route>
          <Route path='files' element={<Files />}></Route>
          <Route  index element={<Calculator />}></Route>
        </Route>
        <Route path="*" element={ <Error/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
