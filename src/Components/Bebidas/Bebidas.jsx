import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Bebidas.css";
import { jsonCafe } from "../json";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import heineken from "../assets/heineken.webp"
import latras from "../assets/ortuzarLata.jpg"
import barril from "../assets/ortuzarB.jpg"
import tragosCla from "../assets/tragosC.jpg"
import coca from "../assets/coca.avif"

export const Bebidas = (id) => {



  const mesa = id.match.url.slice(1,3)


  
  const sAlcohol = jsonCafe.filter((e) => e.section === "SIN ALCOHOL");
  const cerveza = jsonCafe.filter((e) => e.section === "BIRRITAS");
  const Latas = jsonCafe.filter((e) => e.section === "LATAS");
  const Heineken = jsonCafe.filter((e) => e.section === "HEINEKEN");
  const TragosC = jsonCafe.filter((e) => e.section === "TRAGOS CLASICOS");
  

  return (
    <div className="containerL">
    <Nav id={mesa} />
    <div className="sectioner">
      <a href="#5">Tragos Clásicos</a>
      <a href="#3">Latas</a>
      <a href="#2">Biritas Tiradas</a>
      <a href="#4">Heineken</a>
      <a href="#1">Sin alcohol</a>

    </div>
    <div className="conteinerLC">
      <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
        <img
          src={coca}
          alt="promo"
          id="1"
          width="100%"
        />
        <Cards products={sAlcohol} />
        <img
          src={barril}
          alt="promo"
          id="2"
          width="100%"
        />
        <Cards products={cerveza} />
        <img
          src={latras}
          alt="promo"
          id="3"
          width="100%"
        />
        <Cards products={Latas} />
        <img
            src={heineken}
          alt="promo"
          id="4"
          width="100%"
        />
        <Cards products={Heineken} />
        <img
           src={tragosCla}
          alt="promo"
          id="5"
          width="100%"
        />
        <Cards products={TragosC} />
      </div>
    </div>
<VerPedido id={mesa} />
  </div>
  );
};
