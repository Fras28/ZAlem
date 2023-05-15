import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UrlStatus, AddProd } from "../URLs";

import { jsonCafe } from "../json";

const initialState = {
  allProduct: [],
  copyallProducts: [],
  favProd: [],
  orderStatus: [{ status: "takeAway" }],
  appStatus: [],
};

export const dataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    allProducts: (state, action) => {
      state.allProduct = action.payload.jsonCafe;
      state.copyallProducts = action.payload.jsonCafe;
    },

    favProducts: (state, action) => {
      state.favProd = [...state.favProd, action.payload];
    },
    cancelBagProducts: (state, action) => {
      const indexProd = state.favProd
        .map((object) => object.name)
        .indexOf(action.payload);
      console.log(indexProd);
      if (indexProd !== "-1") {
        const newBag = state.favProd.splice(indexProd, 1);
        state.favProd = state.favProd.filter((e) => e !== newBag);
      }
    },
    SearchProducts: (state, action) => {
      state.copyallProducts = state.copyallProducts
        .filter((e) => e.name.includes(action.payload) === true)
        .slice(0, 10);
    },
    OrderStat: (state, action) => {
      state.orderStatus = [action.payload];
      console.log(state.orderStatus);
    },
    AppStat: (state, action) => {
      state.appStatus = action.payload;
      console.log(action.payload, "este es el estado de la pagina");
    },
  },
});

//-------------------------------------------------------------------------------------------------------------------
//------------------------------------------ function Movies ------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

export const asyncallProducts = () => {
  return async function (dispatch) {
    return dispatch(allProducts({ jsonCafe }));
  };
};

export const asyncfavProducts = (pedido) => {
  return async function (dispatch) {
    return dispatch(favProducts(pedido));
  };
};
export const asyncCancelFav = (pedido) => {
  return async function (dispatch) {
    return dispatch(cancelBagProducts(pedido));
  };
};
export const asyncSearchBar = (string) => {
  return async function (dispatch) {
    return dispatch(SearchProducts(string));
  };
};
export const asyncOrder = (pedido) => {
  console.log(pedido, "este es el pedido slice");
  return async function (dispatch) {
    try {
      await axios.post(AddProd, pedido);
      console.log("posteado correctamente, sliceee");
      return dispatch();
    } catch (error) {
      console.log(error, "from Order");
    }
  };
};

export const asyncOrderStat = (orderStat) => {
  return async function (dispatch) {
    try {
      return dispatch(OrderStat({ status: orderStat }));
    } catch (error) {
      console.log(error, "from Order");
    }
  };
};

export const asyncGetStatus = () => async (dispatch) => {
  try {
    const response = await axios.get(
      UrlStatus
    );
    console.log(response.data.on, "esto es el slice asyncGetStatus");
    return dispatch(AppStat(response.data.on));
  } catch (error) {
    console.error(error);
  }
};

export const asyncAppSwitch = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        UrlStatus
      );
      const newStatus = { on: !response.data.on };
      await axios.patch(
        UrlStatus,
        newStatus
      );
      dispatch(AppStat(newStatus.on));
    } catch (error) {
      console.log(error, "STATUS ERROR");
    }
  };
};
//----------------------------------------------------------------------------------------------------------------

export const {
  allProducts,
  favProducts,
  cancelBagProducts,
  SearchProducts,
  OrderStat,
  AppStat,
} = dataSlice.actions;

export default dataSlice.reducer;
