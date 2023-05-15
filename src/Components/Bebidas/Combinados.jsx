import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Bebidas.css";
import { jsonCafe } from "../json.jsx";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import img1 from "../assets/para2.jpg";

export const Combinados = (id) => {
  const mesa = id.match.url.slice(1, 3);

  const sAlcohol = jsonCafe.filter((e) => e.section === "PARA 1");
  const cerveza = jsonCafe.filter((e) => e.section === "PARA 2");
  const Latas = jsonCafe.filter((e) => e.section === "PARA 3");
  const Heineken = jsonCafe.filter((e) => e.section === "PARA 4");

  return (
    <div className="containerL">
      <Nav id={mesa} />
      <div className="sectioner">
        <a href="#4">Para 4</a>
        <a href="#3">Para 3</a>
        <a href="#2">Para 2</a>
        <a href="#1">Para 1</a>
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

        </div>
      </div>
      <VerPedido id={mesa} />
    </div>
  );
};
