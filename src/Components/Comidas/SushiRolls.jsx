import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Comidas.css";
import { jsonCafe } from "../json.jsx";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import entreP from "../assets/entreP.jpg"
import veggie from "../assets/veggie.jpg"
export const SushiRolls = (id) => {



  const mesa = id.match.url.slice(1,3)
  console.log(id.match.url.slice(1,3), "buscando ideeee")

  
  const ClasicR = jsonCafe.filter((e) => e.section === "CLASIC ROLLS");
  const GoldenR = jsonCafe.filter((e) => e.section === "GOLDEN ROLLS");
  const PlatiniumR = jsonCafe.filter((e) => e.section === "PLATINIUM ROLLS");
  const HotR = jsonCafe.filter((e) => e.section === "HOT ROLLS");


  return (
    <div className="containerL">
    <Nav id={mesa} />
    <div className="sectioner">
      <a href="#3">Hot rolls</a>
      <a href="#4">Platinium rolls</a>
      <a href="#5">Golden rolls</a>
      <a href="#6">Clasic rolls</a>
    </div>
    <div className="conteinerLC">
      <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
        <img
          src="https://images.ecestaticos.com/wVsAKm6mXTx5jXrJxP58Do7Yg4Y=/549x0:2690x1507/992x700/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd96%2F010%2F12c%2Fd9601012cba6ec76e09f9cbb8890a1c6.jpg"
          alt="promo"
          id="6"
        />
        <Cards products={ClasicR} />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7hAqgSWUTR0CNzDmunDk3nK6bMwMhAsBRw&usqp=CAU"
          alt="promo"
          id="5"
        />
        <Cards products={GoldenR} />
        <img
          src="https://izzycooking.com/wp-content/uploads/2020/10/Salmon-Nigiri-thumbnail-500x500.jpg"
          alt="promo"
          id="4"
        />
        <Cards products={PlatiniumR} />
        <img
          src="https://cdn.colombia.com/gastronomia/2011/08/19/ensalada-cesar-3403.jpg"
          alt="promo"
          id="3"
        />
        <Cards products={HotR} />
      </div>
    </div>
<VerPedido id={mesa} />
  </div>
  );
};
