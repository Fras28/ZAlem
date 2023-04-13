import React from 'react';
import {  Route,Switch} from 'react-router-dom';
import Landing from "./Components/Landing/LandingPage.jsx"
import './App.css';
import { Wines } from './Components/Wines/Wines.jsx';
import { Foot } from './Components/Footer/Footer.jsx';
import { Comidas } from './Components/Comidas/Comidas';
import { Bag } from './Components/myBag/myBag.jsx';
import { MyFoot } from './Components/myFoot/MyFooter.jsx';
import { Bebidas } from './Components/Bebidas/Bebidas.jsx';
import { SpecialEvent } from './Components/SpecialEvent/SpecialEvent.jsx';
import { TrackClub } from './Components/TrackClub/TrackClub.jsx';
import { Inicio } from './Components/LandingStart/LandingStart.jsx';
import { InicioAdmin } from './Components/LanginAdmin/PanelAdmin.jsx';
import { useSelector } from 'react-redux';

function App() {

  return (
    <div className="App">

<Switch>
        <Route exact path="/6435bff486a38eae17515a66" component={InicioAdmin}/>  
          <Route exact path="/:id?" component={Inicio}/>
          <Route exact path="/:id/Landing" component={Landing}/>
          <Route exact path="/:id/Landing/Wines" component={Wines}/>
          <Route exact path="/:id/Landing/Comidas" component={Comidas}/>
          <Route exact path="/:id/Landing/Bebidas" component={Bebidas}/>
          <Route exact path="/:id/Bag" component={Bag}/>
          <Route exact path="/:id/Landing/SpecialEvent" component={SpecialEvent}/>
          <Route exact path="/:id/Landing/TrackClub" component={TrackClub}/>
</Switch>
  <Foot/>
  <MyFoot/>
    </div>
  );
}

export default App;
