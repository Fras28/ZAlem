import React, { useEffect } from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Wines.css";
import { Nav } from "../Nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { asyncallProducts } from "../redux/slice.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import wines from "../assets/para2.jpg";

export const Wines = (id) => {
  const mesa = id.match.url.slice(1, 3);
  console.log(id.match.url.slice(1, 3), "buscando ideeee");

  let dispatch = useDispatch();

  let { allProduct } = useSelector((state) => state.alldata);

  useEffect(() => {
    if (allProduct.length === 0) dispatch(asyncallProducts());
  }, [allProduct, dispatch]);

  const VinoT = allProduct?.filter((e) => e.section === "VINO TIRADO");
  const Malbec = allProduct?.filter((e) => e.section === "MALBEC");
  const CabernetS = allProduct?.filter(
    (e) => e.section === "CABERNET SAUVIGNON"
  );
  const CabernetF = allProduct?.filter((e) => e.section === "CABERNET FRANC");
  const Organicos = allProduct?.filter((e) => e.section === "ORGÁNICOS");
  const Tanat = allProduct?.filter((e) => e.section === "TANAT");
  const BlendC = allProduct?.filter(
    (e) => e.section === "BLEND/CO-FERMENTADOS/BI-VARIETALES"
  );
  const VinoB = allProduct?.filter((e) => e.section === "VINO BLANCO");
  const VinoR = allProduct?.filter((e) => e.section === "VINO ROSADO");

  return (
    <div className="containerL">
      <Nav id={mesa} />
      <div className="sectioner">
        <a href="#9">Vino Rosado</a>
        <a href="#8">Vino Blanco</a>
        <a href="#7">Bend Co-Fermentados</a>
        <a href="#6">Tanat</a>
        <a href="#5">Organicos</a>
        <a href="#4">Cabernet Franc</a>
        <a href="#3">Cabernet Souvignon</a>
        <a href="#2">Malbec</a>
        <a href="#1">Cafe</a>
      </div>
      <div className="conteinerLC ">
        <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
          <img src={wines} alt="promo" id="1" />
          <Cards products={VinoT} espesificaciones="(COMING SOON...)" />
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_625670-MLA44010264661_112020-O.webp"
            alt="promo"
            id="2"
          />
          <Cards products={Malbec} />
          <img
            src="https://vinosybuenvivir.com/wp-content/uploads/2019/07/Terrazas-de-los-Andes-5-e1562274801772.jpg"
            alt="promo"
            id="3"
          />
          <Cards products={CabernetS} />
          <img
            src="https://innovagroup.com.ar/wp-content/uploads/2021/06/chanarmuyo_gran_vino_cabernet_franc_2018.jpg"
            alt="promo"
            id="4"
          />
          <Cards products={CabernetF} />
          <img
            src="https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/251192934_415564376829640_9053279305085131461_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=PJU7JKr0rgkAX_xeRFR&_nc_ht=scontent.faep9-1.fna&oh=00_AfA-l_3mqxYK8RZ-XU2zmMDQaQY1c_BEW3Fiy_LE9O_z8Q&oe=641DA4BD"
            alt="promo"
            id="5"
          />
          <Cards products={Organicos} />
          <img
            src="https://innovagroup.com.ar/wp-content/uploads/2021/06/chanarmuyo_gran_vino_tannat_2018.jpg"
            alt="promo"
            id="6"
          />
          <Cards products={Tanat} />
          <img
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/671/382/products/banner-malabarista51-74c51bf9d05c56bb7816729750434182-1024-1024.webp"
            alt="promo"
            id="7"
          />
          <Cards products={BlendC} />
          <img
            src="https://reyvinoblanco.com/wp-content/uploads/2020/06/vino-dulce1.png"
            alt="promo"
            id="8"
          />
          <Cards products={VinoB} />
          <img
            src="https://editorialtelevisa.brightspotcdn.com/dims4/default/3f59d43/2147483647/strip/true/crop/996x560+2+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2020%2F08%2Fvino-rosa.jpg"
            alt="promo"
            id="9"
          />
          <Cards products={VinoR} />
        </div>
      </div>
      <VerPedido id={mesa} />
    </div>
  );
};
