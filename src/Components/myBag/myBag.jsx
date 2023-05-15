import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsBag } from "./CardsBag/CardsB";
import { Nav } from "../Nav/Nav";
import "./myBag.css";
import { asyncOrder } from "../redux/slice";
import QRCode from "qrcode.react";
import { asyncGetStatus } from "../redux/slice";
import OrderStatusSwitches from "../OrderFormat/Format";

export const Bag = (id) => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  toTop();
  useEffect(() => {
    dispatch(asyncGetStatus());
  });
  let { appStatus } = useSelector((state) => state.alldata);

  const dispatch = useDispatch();
  let { favProd } = useSelector((state) => state.alldata);
  const { orderStatus } = useSelector((state) => state.alldata);

  const [pago, setPago] = useState({
    payment: "",
  });

  const [order, setOrder] = useState({
    pedido: "",
    description: "",
    mesa: "",
    price: "",
    status: true,
  });
  // console.log(order, "pedido post");

  const sendComanda = () => {
    setOrder({
      pedido: favProd.map((x) => x.name).join(),
      description: "aprovado",
      mesa: id.match.params.id,
      price: total,
      status: true,
    });
    // console.log(order, "esto es la info del post");
    dispatch(asyncOrder(order));
  };

  const metodoPago = function handbleOnMethod(e) {
    setPago({
      payment: e.target.value,
    });
  };
  let result = favProd.filter((item, index) => {
    return favProd.indexOf(item) === index;
  });

  const valores = favProd.map((e) => parseInt(e.price, 10));
  let total = valores.reduce((a, b) => a + b, 0);

  return (
    <div className="backBag">
      <Nav id={id.match.params.id} />
      <div>
        {appStatus === true ? (
          <OrderStatusSwitches />
        ) : (
          <p>LAS OPCIONES ESTAN SUSPENDIDAS MOMENTANEAMENTE</p>
        )}
        {appStatus === true ? (
          <div>
            {" "}
            {orderStatus[0].status === "takeAway" ? (
              <div>
                <b>Nombre:</b> <input className="inputStatus" type="text" />
              </div>
            ) :  (
              <div>
                <div>
                  <b>Nombre:</b>{" "}
                  <input
                    className="inputStatus"
                    placeholder="Leonel Messi"
                    type="text"
                  />
                </div>
                <div>
                  <b>Direccion:</b>{" "}
                  <input
                    className="inputStatus"
                    placeholder="Donado 128"
                    type="text"
                  />
                </div>
                <div>
                  <b>Dpto:</b>{" "}
                  <input
                    className="inputStatus"
                    placeholder="PB - C"
                    type="text"
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <p></p>
        )}
        {orderStatus[0].status === "takeAway" ? (
          <div>
            <div className="wsspTarj">
              <select
                className="selectP"
                onChange={metodoPago}
                value={pago.payment}
              >
                <option hidden disabled selected value={""}>
                  Como pagas?
                </option>
                <option>Efectivo</option>
                <option>Tarjeta</option>
                <option>QR</option>
              </select>
              <a
                href={`http://wa.me/542914446222?text= Hola me gustaria hacerles este pedido para Take Away ➤ ${favProd.map(
                  (e) => e.name + "$" + e.price + ", "
                )} Total = $ ${total}, "${pago.payment}" , estamos en la mesa ${
                  id.match.params.id
                }`}
                rel="noreferrer"
                target="_blank"
              >
                <button className="btnWssp">
                  Enviar Pedido{" "}
                  <svg width="16" height="16" viewBox="0 0 724 724" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M178.493 250.307C177.899 230.932 183.556 211.875 194.629 195.963C205.009 225.192 217.88 253.479 233.093 280.515C229.135 285.598 226.64 291.671 225.885 298.072C225.124 304.473 226.135 310.958 228.801 316.827C263.088 396.988 326.952 460.853 407.108 495.147C412.983 497.813 419.473 498.824 425.879 498.069C432.285 497.313 438.363 494.813 443.447 490.85C470.624 505.928 499.004 518.719 528.296 529.1C512.317 540.319 493.135 546.059 473.619 545.461C314.765 524.794 199.152 409.18 178.485 250.314L178.493 250.307ZM370.053 0.986732H353.438C270.569 2.9086 190.878 33.2574 127.732 86.9507C64.5811 140.648 21.8051 214.42 6.5864 295.897C-8.6376 377.376 4.6176 461.617 44.1224 534.484L1.0544 695.217C-0.763334 702.004 0.674185 709.244 4.94507 714.816C9.21587 720.389 15.8305 723.665 22.8517 723.675C24.8309 723.665 26.7944 723.394 28.7007 722.868L189.461 679.8L189.455 679.805C253.742 714.685 327.095 729.237 399.829 721.54C472.563 713.837 541.242 684.243 596.802 636.676C652.359 589.103 692.166 525.796 710.974 455.116C729.777 384.439 726.688 309.716 702.12 240.823C677.547 171.937 632.647 112.129 573.36 69.3026C514.068 26.48 443.177 2.65731 370.053 0.97998L370.053 0.986732ZM270.313 237.773L242.146 179.967L236.808 179.805C245.438 204.284 255.98 228.051 268.339 250.873C271.771 247.389 272.568 242.087 270.313 237.748L270.313 237.773ZM486.166 453.627C481.838 451.377 476.552 452.163 473.062 455.575C495.932 467.726 519.682 478.159 544.109 486.777L543.942 481.767L486.136 453.6L486.166 453.627ZM569.005 443.767L505.948 413.049V413.054C494.338 407.32 481.114 405.741 468.484 408.59C455.853 411.439 444.588 418.538 436.562 428.7L418.901 450.85C354.073 421.762 302.182 369.881 273.088 305.064L295.238 287.402C305.4 279.376 312.498 268.105 315.348 255.476C318.191 242.845 316.619 229.616 310.889 218.006L280.201 154.96C277.373 149.158 273.014 144.241 267.597 140.736C262.175 137.23 255.899 135.272 249.452 135.074L216.343 133.98C204.655 133.512 193.16 137.038 183.744 143.975C150.739 167.902 133.291 205.153 133.291 251.71V251.715C133.291 252.653 133.353 253.59 133.468 254.522C143.291 340.282 181.613 420.256 242.306 481.643C303.692 542.325 383.666 580.648 469.426 590.471C470.359 590.58 471.296 590.632 472.239 590.632C518.807 590.632 556.041 573.211 580.009 540.195H580.004C586.926 530.762 590.447 519.268 589.994 507.575L588.926 474.496C588.718 468.048 586.754 461.777 583.249 456.365C579.739 450.954 574.817 446.6 569.014 443.777L569.005 443.767ZM585.297 585.701V585.706C641.193 529.789 674.109 454.957 677.557 375.973C681 296.978 654.718 219.573 603.896 158.999C553.073 98.4313 481.401 59.1033 403.016 48.7753C324.625 38.4471 245.216 57.869 180.442 103.202C115.666 148.541 70.2344 216.509 53.0984 293.695C35.9624 370.883 48.3744 451.695 87.8851 520.175C90.8851 525.363 91.6924 531.535 90.1403 537.321L54.8123 669.175L186.651 633.847C188.562 633.326 190.531 633.056 192.515 633.045C196.479 633.05 200.375 634.097 203.807 636.087C264.099 670.789 334.141 684.66 403.101 675.556C472.065 666.447 536.106 634.868 585.314 585.707L585.297 585.701Z" fill="white"/>
</svg>

                </button>
              </a>{" "}
            </div>
          </div>
        ) : (
          <div className="styleForm">
            <div className="wsspTarj">
              <select
                className="selectP"
                onChange={metodoPago}
                value={pago.payment}
              >
                <option hidden disabled selected value={""}>
                  Como pagas?
                </option>
                <option>Efectivo</option>
                <option>Tarjeta</option>
                <option>QR</option>
              </select>
              <a
                href={`http://wa.me/542914446222?text= Mensaje con mi pedido ➤ ${favProd.map(
                  (e) => e.name + "$" + e.price + ", "
                )} Total = $ ${total}, "${pago.payment}" , estamos en la mesa ${
                  id.match.params.id
                }`}
                rel="noreferrer"
                target="_blank"
              >
                <button className="btnWssp">
                  Enviar Pedido{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 665 660"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M501.92 250.307C501.92 112.187 389.556 0.23999 251.44 0.23999C113.32 0.245198 0.946289 112.824 0.946289 250.947C0.946289 301.535 15.7583 349.873 43.905 391.347L3.20229 471.456C-0.0685091 477.878 0.238689 484.727 4.00958 490.868C7.78038 497.019 14.468 499.946 21.6869 499.946H251.447C389.567 499.946 501.927 388.425 501.927 250.306L501.92 250.307ZM84.6263 377.119C57.0063 340.608 42.4076 297.051 42.4076 251.16C42.4076 135.905 136.173 42.1333 251.434 42.1333C366.689 42.1333 460.461 132.931 460.461 248.187C460.461 363.443 366.701 454.24 251.434 454.24H55.4743L86.5676 396.052C90.1718 388.979 89.4166 383.443 84.6354 377.12L84.6263 377.119ZM662.133 633.972C665.404 640.404 665.097 645.977 661.326 652.123C657.555 658.268 650.867 659.946 643.648 659.946H413.902C331.396 659.946 254.195 621.378 207.368 553.284C200.879 543.857 203.269 531.987 212.702 525.498C222.139 519.008 235.051 521.529 241.53 530.961C280.612 587.795 345.046 621.852 413.903 621.852H609.85L578.756 561.081C575.163 554.008 575.913 545.707 580.699 539.373C608.308 502.863 622.918 459.404 622.918 413.509C622.918 344.061 588.532 279.363 530.939 240.363C521.455 233.946 518.975 221.081 525.403 211.592C531.819 202.113 544.709 199.639 554.195 206.061C623.195 252.79 664.383 330.373 664.383 413.594C664.383 464.193 649.571 512.422 621.424 553.901L662.133 633.972ZM230.706 145.665C230.706 134.212 239.988 126.619 251.436 126.619H354.894C366.337 126.619 375.624 134.212 375.624 145.665C375.629 157.118 366.337 164.712 354.894 164.712H251.436C239.983 164.712 230.706 157.118 230.706 145.665ZM127.253 244.712C127.253 233.259 136.534 225.665 147.982 225.665H354.889C366.332 225.665 375.618 233.259 375.618 244.712C375.624 256.165 366.332 263.759 354.889 263.759H147.982C136.534 263.759 127.253 256.165 127.253 244.712ZM127.253 343.759C127.253 332.306 136.534 324.712 147.982 324.712H354.889C366.332 324.712 375.618 332.306 375.618 343.759C375.618 355.201 366.332 362.805 354.889 362.805H147.982C136.534 362.805 127.253 355.201 127.253 343.759Z"
                      fill="#1F7537"
                    />
                  </svg>
                </button>
              </a>{" "}
            </div>
          </div>
        )}
      </div>
      <div className="contBag animate__animated   animate__rollIn animate__faster">
        <CardsBag products={result} />
      </div>
    </div>
  );
};
