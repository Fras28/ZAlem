import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncOrderStat } from "../redux/slice";
import "./Format.css";

const OrderStatusSwitches = () => {
  const dispatch = useDispatch();

  const { orderStatus } = useSelector((state) => state.alldata);
  const [orderStat, setOrderStatus] = useState({
    status: "",
  });
  // ---------------------------------------------------
  // ---------------------------------------------------

  let handleDeliveryChange = function delivery() {
    setOrderStatus({
      status: "delivery",
    });
    funchi();
  };

  // ---------------------------------------------------

  let handleTakeAwayChange = function takAway() {
    setOrderStatus({
      status: "takeAway",
    });

    funchi();
  };

  // ---------------------------------------------------

  let handleForHereChange = function forHere() {
    setOrderStatus({
      status: "forHere",
    });
    funchi();
  };

  const funchi = () => {
    dispatch(asyncOrderStat(orderStat.status));
  };
  return (
    <div className="backSwitch">
      <div className="Chek">
        <label className="checkBox">
          <input
            className="box"
            id="ch1"
            type="checkbox"
            checked={orderStatus[0].status === "delivery"}
            onClick={handleDeliveryChange}
          />
          <div class="transition"></div>
        </label>
        <b>Delivery</b>
      </div>
      <div className="Chek">
        <label className="checkBox">
          <input
            className="box"
            id="ch1"
            type="checkbox"
            checked={orderStatus[0].status === "takeAway"}
            onClick={handleTakeAwayChange}
          />
        </label>
        <b> Take Away</b>
      </div>
    </div>
  );
};

export default OrderStatusSwitches;
