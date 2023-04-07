import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";
import comidas from "../assets/food.webp";
import { VerPedido } from "../BtnBag/BtnBag";
import wines from "../assets/wines.webp"
import events from "../assets/events.webp"
import logo from "../assets/ZLogo.png"


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
  <img src={logo} alt="" className="LogoNavi"/>
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
            <img src="https://thumbnails.production.thenounproject.com/BF2Y0vpUKv5m9MIG37HQtzooDqs=/fit-in/1000x1000/photos.production.thenounproject.com/photos/sushi_on_plates-scopio-1f9c2352-172c-4230-8387-b9c571640485.JPG"  alt=""/>
            <p>PARA 1</p>
          </div>
          </NavLink>
          <NavLink className="navLink" to={`${url.location.pathname}/Comidas`}>
            <div className="titInicio">
              <img src="https://thumbnails.production.thenounproject.com/3mF3sHYfTiWf6JIBe58vonElr9g=/fit-in/1000x1000/photos.production.thenounproject.com/photos/japanese_sushi_on_colorful_ceramic_plate-scopio-185d6693-1296-4b7f-af5d-451a93cb5612.jpg" alt=""/>
              <p>PARA 2</p>
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
              <img src="https://thumbnails.production.thenounproject.com/FbeNV9RzZOize7gunkR5fKCOm5M=/fit-in/1000x1000/photos.production.thenounproject.com/photos/fresh_sashimi_on_a_plate-scopio-3b656329-023f-4d24-9823-0ffdd0ae9d6b.jpg" alt="fotito" />
              <p>PARA 3</p>
            </div>
          </NavLink>
          <NavLink to={`${url.location.pathname}/SpecialEvent`}>
          <div className="titInicio">
            <img src="https://thumbnails.production.thenounproject.com/by-S7yI9qns-mkNA7IR7aoTrnc0=/fit-in/1000x1000/photos.production.thenounproject.com/photos/570231FB-3237-4852-A128-7BA2C260552A.jpg" alt="" />
            <p>PARA 4</p>
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
        <p className="naviTit5">Miércoles a Domingo  19 al cierre </p>
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
      <VerPedido id={url.location.pathname.slice(1,3)}/>
    </div>
  );
}
