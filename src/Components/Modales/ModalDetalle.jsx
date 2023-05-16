import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./BtnNavidad.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalDetalle(text) {
  const [open, setOpen] = React.useState(false);

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
          <img
            src="http://www.sushiandroll.com.ar/images/sushi-and-roll-delivery-bahia-blanca-home.png"
            alt="logo"
            width="150"
          />
          <button className="exit" onClick={handleClose}>
            x
          </button>
        </DialogTitle>
        <DialogContent className="infoNavi">
          <DialogContentText id="alert-dialog-slide-description" color="white">
            Sushi/Wok *Pedí combinados o armá vos tu pedido   <svg height="25" viewBox="0 0 499 557" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M497.194 145.52C483.533 62.5613 379.596 0 249.381 0C119.166 0 15.2211 62.5733 1.56773 145.52C0.520849 151.645 0 157.838 0 164.187V391.92C0 483.983 109.536 556.107 249.387 556.107C389.237 556.107 498.773 483.976 498.773 391.92V164.187C498.773 157.838 498.18 151.64 497.206 145.52H497.194ZM249.381 37.3267C364.293 37.3267 461.434 95.4147 461.434 164.187C461.434 232.952 364.294 291.041 249.381 291.041C134.468 291.041 37.3277 232.953 37.3277 164.181C37.3277 95.416 134.468 37.3267 249.381 37.3267Z" fill="white"/>
<path d="M248.653 66C173.689 66 115 104.828 115 154.407C115 203.985 173.688 242.885 248.653 242.885C323.619 242.885 382.307 204.057 382.307 154.479C382.307 104.9 323.619 66 248.653 66ZM248.653 88.4013C271.727 88.4013 293.377 92.8805 311.372 100.349L273.069 138.652L224.539 90.1212C232.377 89.0743 240.44 88.4013 248.653 88.4013ZM198.627 95.7972L257.315 154.485L242.679 169.121L177.72 104.163C184.064 100.949 191.084 98.1096 198.627 95.7972ZM167.564 109.907L234.689 177.032L216.397 195.324L148.001 126.928C153.007 120.735 159.647 114.985 167.564 109.907ZM137.397 154.485C137.397 148.36 138.965 142.391 141.804 136.641L208.408 203.245L198.626 213.094C162.709 202.047 137.397 179.647 137.397 154.485ZM248.652 220.491C240.438 220.491 232.376 219.892 224.611 218.85L332.053 111.407C349.225 123.053 359.903 138.214 359.903 154.49C359.908 190.25 308.981 220.491 248.652 220.491Z" fill="salmon"/>
<path d="M427.381 194.574C427.381 198.949 423.839 202.49 419.464 202.49C415.094 202.49 411.553 198.949 411.553 194.574C411.553 190.204 415.094 186.662 419.464 186.662C423.839 186.662 427.381 190.204 427.381 194.574Z" fill="white"/>
<path d="M435.447 162.32C435.447 166.689 431.906 170.236 427.536 170.236C423.161 170.236 419.619 166.689 419.619 162.32C419.619 157.95 423.161 154.408 427.536 154.408C431.906 154.408 435.447 157.95 435.447 162.32Z" fill="white"/>
<path d="M424.701 124.693C424.701 129.063 421.16 132.605 416.785 132.605C412.415 132.605 408.873 129.063 408.873 124.693C408.873 120.323 412.415 116.776 416.785 116.776C421.159 116.776 424.701 120.323 424.701 124.693Z" fill="white"/>
<path d="M388.861 237.294C388.861 241.663 385.314 245.205 380.944 245.205C376.574 245.205 373.027 241.663 373.027 237.294C373.027 232.919 376.574 229.377 380.944 229.377C385.314 229.377 388.861 232.919 388.861 237.294Z" fill="white"/>
</svg>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
