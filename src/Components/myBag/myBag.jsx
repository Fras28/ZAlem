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
        {appStatus !== true ? (
          <OrderStatusSwitches />
        ) : (
          <p>LAS OPCIONES ESTAN SUSPENDIDAS MOMENTANEAMENTE</p>
        )}
        {appStatus !== true ? (
          <div>
            {" "}
            {orderStatus[0].status === "takeAway" ? (
              <div>
                <b>Nombre:</b> <input className="inputStatus" type="text" />
              </div>
            ) : orderStatus[0].status === "delivery" ? (
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
            ) : (
              <p className="textHere">Muestrele este QR al mozo </p>
            )}
          </div>
        ) : (
          <p></p>
        )}
        {orderStatus[0].status === "forHere" ? (
          <div>
            {appStatus !== true ? (
              <QRCode
                className="QrBag"
                value={favProd.map((e) => e.name + "$" + e.price + "   ")}
                size={200}
              />
            ) : (
              <p></p>
            )}
          </div>
        ) : orderStatus[0].status === "takeAway" ? (
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
