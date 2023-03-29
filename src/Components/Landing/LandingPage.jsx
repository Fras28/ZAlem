import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";
import comidas from "../assets/food.webp";
import { VerPedido } from "../BtnBag/BtnBag";
import wines from "../assets/wines.webp"
import events from "../assets/events.webp"


export default function LandingPage(url) {
  const id = url.location.pathname.slice(1,3)

  // if (url.location.pathname === "/") {
  //   url.location.pathname = "/sinMesa";
  //   console.log(url.location.pathname);
  // }

  return (
    <div className="animate__animated  animate__zoomIn ">
      <div className="naviLanding titCasa ">
        <div className="logoL">
          <NavLink to={`/${id}`}>
   <b className="logoTitle">BAIRES</b>
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
            <path d="M59 0.999995L0 1" stroke="white" />
          </svg>
          <p className="naviTit2"> Nuesto Menú </p>
          <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="white" />
          </svg>
        </div>
      </div>

      <div className="conteinerLB2  ">
        <div className="rowsCardL">
          <NavLink className="navLink" to={`${url.location.pathname}/Bebidas`}>
          <div className="titInicio">
            <img src="https://pulsocervecero.com/wp-content/uploads/2022/07/Ortuzar.jpg"  alt=""/>
            <p>DRINKS</p>
          </div>
          </NavLink>
          <NavLink className="navLink" to={`${url.location.pathname}/Comidas`}>
            <div className="titInicio">
              <img src={comidas} alt=""/>
              <p>FOOD</p>
            </div>
          </NavLink>
          <NavLink
            className="navLink"
            to={
              url.location.pathname === "/"
                ? `/Cafeteria`
                : `${url.location.pathname}/Wines`
            }
          >
            <div className="titInicio">
              <img src={wines} alt="fotito" />
              <p>WINES</p>
            </div>
          </NavLink>
          <NavLink to={`${url.location.pathname}/SpecialEvent`}>
          <div className="titInicio">
            <img src={events} alt="" />
            <p>EVENTS</p>
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
          <path d="M59 0.999995L0 1" stroke="#0B3446" />
        </svg>
        <p className="naviTit2"> Seguinos en </p>
        <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="#0B3446" />
        </svg>
      </div>
      <VerPedido id={url.location.pathname.slice(1,3)}/>
    </div>
  );
}
