import React, { useEffect } from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Wines.css";
import { Nav } from "../Nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { asyncallProducts } from "../redux/slice.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import wines from "../assets/para2.jpg";

export const Otraspiezas = (id) => {
  const mesa = id.match.url.slice(1, 3);
  console.log(id.match.url.slice(1, 3), "buscando ideeee");

  let dispatch = useDispatch();

  let { allProduct } = useSelector((state) => state.alldata);

  useEffect(() => {
    if (allProduct.length === 0) dispatch(asyncallProducts());
  }, [allProduct, dispatch]);

  const VinoT = allProduct?.filter((e) => e.section === "NIGUIRIS");
  const Malbec = allProduct?.filter((e) => e.section === "HOSO MAKIS");
  const CabernetS = allProduct?.filter(
    (e) => e.section === "TEMAKIS"
  );
  const CabernetF = allProduct?.filter((e) => e.section === "GEISHAS");
  const Organicos = allProduct?.filter((e) => e.section === "SASHIMI");


  return (
    <div className="containerL">
      <Nav id={mesa} />
      <div className="sectioner">
        <a href="#5">Organicos</a>
        <a href="#4">Cabernet Franc</a>
        <a href="#3">Cabernet Souvignon</a>
        <a href="#1">Cafe</a>
      </div>
      <div className="conteinerLC ">
        <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
          <img src={wines} alt="promo" id="1" />
          <Cards products={VinoT}  />
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
        </div>
      </div>
      <VerPedido id={mesa} />
    </div>
  );
};
