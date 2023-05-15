import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "../Comidas/Comidas.css";
import { jsonCafe } from "../json.jsx";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";

export const CocinayVeggie = (id) => {
  const mesa = id.match.url.slice(1, 3);
  console.log(id.match.url.slice(1, 3), "buscando ideeee");

  const Entradas = jsonCafe.filter((e) => e.section === "ENTRADAS");
  const Veggie = jsonCafe.filter((e) => e.section === "VEGGIE");

  return (
    <div className="containerL">
      <Nav id={mesa} />
      <div className="sectioner">
        <a href="#3">Hot rolls</a>
        <a href="#4">Platinium rolls</a>
        <a href="#5">Veggie</a>
        <a href="#6">Entradas</a>
      </div>
      <div className="conteinerLC">
        <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
          <img
            src="https://images.ecestaticos.com/wVsAKm6mXTx5jXrJxP58Do7Yg4Y=/549x0:2690x1507/992x700/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd96%2F010%2F12c%2Fd9601012cba6ec76e09f9cbb8890a1c6.jpg"
            alt="promo"
            id="6"
          />
          <Cards
            products={Entradas}
            espesificaciones="Agregados:Wasabi  
Jengibre
Salsa Agridulce
Soja tradicional
Soja a la Miel
Guacamole
Maracujá Spicy
Gall. de la Fortuna"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7hAqgSWUTR0CNzDmunDk3nK6bMwMhAsBRw&usqp=CAU"
            alt="promo"
            id="5"
          />
          <Cards products={Veggie} />
        </div>
      </div>
      <VerPedido id={mesa} />
    </div>
  );
};
