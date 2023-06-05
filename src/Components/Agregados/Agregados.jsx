import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import { jsonCafe } from "../json.jsx";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import img1 from "../assets/para2.jpg";

export const Agregados = (id) => {
  const mesa = id.match.url.slice(1, 3);

  const sAlcohol = jsonCafe.filter((e) => e.section === "AGREGADOS Y DIPS");


  return (
    <div className="containerL">
      <Nav id={mesa} />
      <div className="conteinerLC">
        <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
          <img src={img1} alt="promo" id="1" width="100%" />
          <Cards products={sAlcohol} />
        </div>
      </div>
      <VerPedido id={mesa} />
    </div>
  );
};
