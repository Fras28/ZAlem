import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";
import { VerPedido } from "../BtnBag/BtnBag";
import logo from "../assets/ZLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetStatus } from "../redux/slice";
import img1 from "../assets/para1.jpg";
import img2 from "../assets/para2.jpg";
import img3 from "../assets/para3.jpg";
import img4 from "../assets/para4.jpg";

export default function LandingPage(url) {
  const dispatch = useDispatch();
  const id = url.location.pathname.slice(1, 3);
  useEffect(() => {
    dispatch(asyncGetStatus());
  });
  let { appStatus } = useSelector((state) => state.alldata);

  return (
    <div className="animate__animated  animate__zoomIn ">
      <div className="naviLanding titCasa ">
        <div className="logoL">
          <NavLink to={`/${id}`}>
            <img
              src="http://www.sushiandroll.com.ar/images/sushi-and-roll-delivery-bahia-blanca-home.png"
              alt="loguito nav"
              className="LogoNavi"
            />
          </NavLink>
        </div>
        <div className="navi2">
          <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="black" />
          </svg>
          <p className="naviTit2"> Nuesto Menú </p>
          <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="black" />
          </svg>
        </div>
      </div>
      <div className="conteinerLB2  ">
        <div className="rowsCardL">
          <NavLink
            className="navLink"
            to={`${url.location.pathname}/Combinados`}
          >
            <div className="titInicio">
              <img src={img1} alt="" />
              <p>Combinados</p>
            </div>
          </NavLink>
          <NavLink
            className="navLink"
            to={`${url.location.pathname}/SushiRolls`}
          >
            <div className="titInicio">
              <img src={img2} alt="" />
              <p>Sushi Rolls</p>
            </div>
          </NavLink>
          <NavLink
            className="navLink"
            to={
              url.location.pathname === "/"
                ? `/Cafeteria`
                : `${url.location.pathname}/Otraspiezas`
            }
          >
            <div className="titInicio">
              <img src={img3} alt="fotito" />
              <p>Otras piezas</p>
            </div>
          </NavLink>
          <NavLink to={`${url.location.pathname}/CocinayVeggie`}>
            <div className="titInicio">
              <img src={img4} alt="" />
              <p>Cocina y Veggie</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="navi2">
        <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="black" />
        </svg>
        <p className="naviTit5">Miércoles a Lunes de 18:00 a 23:30 hs. </p>
        <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="black" />
        </svg>
      </div>
      <VerPedido id={url.location.pathname.slice(1, 3)} />
    </div>
  );
}
