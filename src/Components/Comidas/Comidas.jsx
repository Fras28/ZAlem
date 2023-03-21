import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Comidas.css";
import { jsonCafe } from "../json";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import p1 from "../assets/comida1.webp"
import papas from "../assets/papas.jpg"
import entreP from "../assets/entreP.jpg"
import veggie from "../assets/veggie.jpg"
import principal from "../assets/milaCaballo.webp"
export const Comidas = (id) => {



  const mesa = id.match.url.slice(1,3)
  console.log(id.match.url.slice(1,3), "buscando ideeee")

  
  const TAPEOS = jsonCafe.filter((e) => e.section === "TAPEOS");
  const Papas = jsonCafe.filter((e) => e.section === "PAPAS");
  const Principales = jsonCafe.filter((e) => e.section === "PRINCIPALES");
  const Ensaladas = jsonCafe.filter((e) => e.section === "ENSALADAS");
  const PIZZAS = jsonCafe.filter((e) => e.section === "PIZZAS");
  const EntreP = jsonCafe.filter((e) => e.section === "ENTRE PANES");
  const Stacc = jsonCafe.filter((e) => e.section === "SIN T.A.C.C");
  const Veggie = jsonCafe.filter((e) => e.section === "VEGGIE");

  return (
    <div className="containerL">
    <Nav id={mesa} />
    <div className="sectioner">
      <a href="#.5">Veggie</a>
      <a href="#0">Sin T.A.C.C</a>
      <a href="#1">Entre Panes</a>
      <a href="#2">Pizzas</a>
      <a href="#3">Ensaladas</a>
      <a href="#4">Principales</a>
      <a href="#5">Papas</a>
      <a href="#6">Tapeos</a>
    </div>
    <div className="conteinerLC">
      <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
        <img
          src={p1}
          alt="promo"
          id="6"
        />
        <Cards products={TAPEOS} espesificaciones="(SALSAS ALIOLI | PICANTE | CRIOLLA | CHEDDAR)"/>
        <img
          src={papas}
          alt="promo"
          id="5"
        />
        <Cards products={Papas} />
        <img
          src={principal}
          alt="promo"
          id="4"
        />
        <Cards products={Principales} />
        <img
          src="https://cdn.colombia.com/gastronomia/2011/08/19/ensalada-cesar-3403.jpg"
          alt="promo"
          id="3"
        />
        <Cards products={Ensaladas} />
        <img
          src="https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/57FFY43SPZCDPP23T55ZNKWOVA.jpg"
          alt="promo"
          id="2"
        />
        <Cards products={PIZZAS} />
        <img
          src={entreP}
          alt="promo"
          id="1"
        />
        <Cards products={EntreP} espesificaciones="(TODOS INCLUYEN PAPAS)" />
        <img
          src="https://municipiosanjuan.gob.ar/media/k2/items/cache/fc2062aef352f80dc2215f346ba9ce28_XL.jpg"
          alt="promo"
          id="0"
        />
        <Cards products={Stacc} />
        <img
          src={veggie}
          alt="promo"
          id=".5"
        />
        <Cards products={Veggie} />
      </div>
    </div>
<VerPedido id={mesa} />
  </div>
  );
};
