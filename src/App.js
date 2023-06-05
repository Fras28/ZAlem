import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/LandingPage.jsx";
import "./App.css";
import { Otraspiezas } from "./Components/Wines/OtrosRolls.jsx";
import { Foot } from "./Components/Footer/Footer.jsx";
import { SushiRolls } from "./Components/Comidas/SushiRolls.jsx";
import { Bag } from "./Components/myBag/myBag.jsx";
import { MyFoot } from "./Components/myFoot/MyFooter.jsx";
import { Combinados } from "./Components/Bebidas/Combinados.jsx";
import { CocinayVeggie } from "./Components/SpecialEvent/CocinayVeggie.jsx";
import { TrackClub } from "./Components/TrackClub/TrackClub.jsx";
import { Inicio } from "./Components/LandingStart/LandingStart.jsx";
import { InicioAdmin } from "./Components/LanginAdmin/PanelAdmin.jsx";
import { useSelector } from "react-redux";
import { Agregados } from "./Components/Agregados/Agregados.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/6435bff486a38eae17515a66" component={InicioAdmin} />
        <Route exact path="/:id?" component={Inicio} />
        <Route exact path="/:id/Landing" component={Landing} />
        <Route exact path="/:id/Landing/Agregados" component={Agregados} />
        <Route exact path="/:id/Landing/Otraspiezas" component={Otraspiezas} />
        <Route exact path="/:id/Landing/SushiRolls" component={SushiRolls} />
        <Route exact path="/:id/Landing/Combinados" component={Combinados} />
        <Route exact path="/:id/Bag" component={Bag} />
        <Route
          exact
          path="/:id/Landing/CocinayVeggie"
          component={CocinayVeggie}
        />
        <Route exact path="/:id/Landing/TrackClub" component={TrackClub} />
      </Switch>
      <Foot />
      <MyFoot />
    </div>
  );
}

export default App;
