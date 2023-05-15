import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertDialogSlide from "../BtnNavidad/ModalDialog";
import "./LandingStart.css";
import logo from "../assets/ZLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { asyncAppSwitch, asyncGetStatus } from "../redux/slice";
import { Admin } from "../../Admin/Admin";
import StatusOff from "../StatusOff/StatusOff";

export const Inicio = (url) => {
  const dispatch = useDispatch();
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  toTop();

  useEffect(() => {
    dispatch(asyncGetStatus());
  });
  const { appStatus } = useSelector((state) => state.alldata);
  console.log(appStatus, "status de la app landing");
  let estado = { appStatus };
  console.log(url);
  if (url.location.pathname === "/") {
    url.location.pathname = "/sinMesa";
    console.log(url.location.pathname);
  }
  return (
    <div className="LandingBack">
      {appStatus === false ? (
        <div>
          <StatusOff />
        </div>
      ) : (
        <div>
          <NavLink to={`${url.location.pathname}`}>
            <div className="marcaLanging ">
              <img
                className="morton1"
                src="http://www.sushiandroll.com.ar/images/sushi-and-roll-delivery-bahia-blanca-home.png"
                alt="logo"
              />
            </div>
          </NavLink>
          <div className="btnEnter">
            <AlertDialogSlide />
            <Link to={`${url.location.pathname}/Landing`}>
              <button
                className="Enter animate__animated  animate__zoomIn animate__fast"
                disabled={estado === false}
              >
                Entrar
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
