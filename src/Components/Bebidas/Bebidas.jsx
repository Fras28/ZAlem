import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Bebidas.css";
import { jsonCafe } from "../json";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import img1 from "../assets/para2.jpg";

export const Bebidas = (id) => {
  const mesa = id.match.url.slice(1, 3);

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
          <img src={img1} alt="promo" id="1" width="100%" />
          <Cards products={sAlcohol} />
          <img
            src="https://resizer.glanacion.com/resizer/8w5gCea92coRwSB8U5n6ER_P2dk=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AXMW5TBU55EUZO3OT4KW4473FQ.jpg"
            alt="promo"
            id="2"
            width="100%"
          />
          <Cards products={cerveza} />
          <img
            src="https://images.ecestaticos.com/wVsAKm6mXTx5jXrJxP58Do7Yg4Y=/549x0:2690x1507/992x700/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd96%2F010%2F12c%2Fd9601012cba6ec76e09f9cbb8890a1c6.jpg"
            alt="promo"
            id="3"
            width="100%"
          />
          <Cards products={Latas} />
          <img
            src="https://www.recetasderechupete.com/wp-content/uploads/2021/06/Sushi-y-nigiris-variados-768x530.jpg"
            alt="promo"
            id="4"
            width="100%"
          />
          <Cards products={Heineken} />
          <img
            src="https://resizer.glanacion.com/resizer/GjfWjbXoiMVFtBq0mhGwks-M15s=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/IJRGDFOILBA4ZEXCALBM5PGZGY.jpg"
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
