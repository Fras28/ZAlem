import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./StatusOff.css";
import logo from "../assets/ZLogo.png"
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StatusOff(url) {
  const [open, setOpen] = React.useState(false);
React.useEffect(()=>{
  handleClickOpen()
})
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="btnNav">
      <div>
        <button onClick={handleClickOpen} className="noBord">
          <svg
            height="45"
            viewBox="0 0 673 747"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="341" cy="330" rx="251" ry="252" fill="#2196F3" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M244.973 659.333C103.973 619.427 0.666748 489.773 0.666748 336C0.666748 150.427 151.093 0 336.667 0C522.24 0 672.667 150.427 672.667 336C672.667 489.773 569.364 619.427 428.36 659.333L336.663 746.667L244.973 659.333ZM336.671 571.197C466.567 571.197 571.871 465.895 571.871 335.997C571.871 206.1 466.568 100.797 336.671 100.797C206.773 100.797 101.471 206.1 101.471 335.997C101.471 465.895 206.773 571.197 336.671 571.197ZM299.337 205.211C299.337 180.404 311.78 168.003 336.671 168.003C361.561 168.003 374.004 180.404 374.004 205.211C374.004 217.034 370.895 226.232 364.671 232.804C358.447 239.382 349.113 242.669 336.671 242.669C311.78 242.669 299.337 230.184 299.337 205.21V205.211ZM374.004 503.997H299.337V261.331H374.004V503.997Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="infoNavi">
          <img src={logo} alt="loguito nav" className="logAlert"/>
          <button className="exit" onClick={handleClose}>
            x
          </button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          En este momento no estamos tomando pedidos a travez de la APP
          probablemente ya hayamos llegado a nustro limite diario .
          RECORDA que nuestros horarios son : de 18hs a 23hs de Martes a Domingos
          </DialogContentText>
        </DialogContent>
        <DialogActions>  <Link to={`si/Landing`}>
        <button className="seguirDT">Seguir de todas maneras</button> 
        </Link>  </DialogActions>
      </Dialog>
      <input type="text" ></input>
    </div>
  );
}
