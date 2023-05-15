import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertDialogSlide from "../BtnNavidad/ModalDialog";
import "./PanelAdmin.css";
import logo from "../assets/ZLogo.png"
import { useDispatch, useSelector } from "react-redux";
import {asyncAppSwitch, asyncGetStatus} from "../redux/slice"
import { Admin } from "../../Admin/Admin";
import StatusOff from "../StatusOff/StatusOff";

export const InicioAdmin = (url) => {
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(asyncGetStatus())
}
)
let { appStatus } = useSelector((state) => state.alldata);
console.log(appStatus, "status de la app landing")
  const toTop = ()=>{
    window.scrollTo(0,0);
  }
   toTop();
   let status = {appStatus};

const switchStat = () =>{
  dispatch(asyncAppSwitch())
  (dispatch(asyncGetStatus()))
}
    console.log(url)
    if (url.location.pathname === "/") {
        url.location.pathname = "/sinMesa";
        console.log(url.location.pathname);
      }
  return (
    <div className="LandingBack">

   { appStatus === false?  <div className="stat red"><b>Server OFFLINE</b></div>:
      <div className="stat green"><b>Server ON</b></div>}

   <div>

     <NavLink to={`${url.location.pathname}`}>
         
     <div className="marcaLanging ">

<img className="morton1" src={logo} alt="logo"/>
     </div>
       </NavLink>
     <div className="btnEnter">
    </div>
     <Admin/>
   
   </div>

    </div>
  );
};
