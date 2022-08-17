import { Landing } from "./pages/Landing";

import React from "react";

import { BrowserRouter as Router,Routes, Switch, Route } from 'react-router-dom'
import {Register, Error} from "./pages";
import {Profile, SharedLayout, Clients, Consultation, ClientInfo, Investment, ConsultaionInfo, HouseProperty } from './pages/dashboard'
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
          <Route path='clinfo' element={<ClientInfo />}></Route>
          <Route path='coninfo' element={<ConsultaionInfo />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='consultation' element={<Consultation />}></Route>
          <Route  index element={<Clients />}></Route>
        </Route>
        <Route path="*" element={ <Error/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
