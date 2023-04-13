import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { jsonCafe } from "../json";

const initialState = {
  allProduct: [],
  copyallProducts: [],
  favProd: [],
  orderStatus:[{status:"forHere"}],
  appStatus:[]
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
      const indexProd = state.favProd.map(object => object.name).indexOf(action.payload);
      console.log(indexProd);
      if (indexProd !== "-1") {
        const newBag = state.favProd.splice(indexProd,1)
        state.favProd = state.favProd.filter(e => e !== newBag)
      } 
     },
    SearchProducts: (state, action) => {
      state.copyallProducts = state.copyallProducts
        .filter((e) => e.name.includes(action.payload) === true)
        .slice(0, 10);
    },
    OrderStat:(state, action) => {
      state.orderStatus = [action.payload]
      console.log(state.orderStatus)
    },
    AppStat:(state, action) =>{
      state.appStatus = action.payload
      console.log("aca modificamos el valor del status", state.appStatus)
    }
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
export const asyncOrder = (pedido)=>{
console.log(pedido, "este es el pedido slice")
  return async function ( dispatch ){
    try{
      await axios.post(`https://ecommerce-demo.onrender.com/addP`,pedido);
      console.log("posteado correctamente, sliceee")
        return dispatch()
    }catch(error){
      console.log(error, "from Order")
    }
  }
}


export const asyncOrderStat = (orderStat)=>{
  console.log(orderStat, "este es el estado del tipo de pedido");
    return async function ( dispatch ){
      try{
          return dispatch(OrderStat({status:orderStat}))
      }catch(error){
        console.log(error, "from Order")
      }
    }
  }

  
  export const asyncGetStatus = (appStat)=>{

    return async function ( dispatch ){
      try{
       let status =  await axios.get(`https://ill-lime-gopher-sari.cyclic.app/webapp/6435bff486a38eae17515a66`);
       console.log(status.data.on, "este es el estado de la APP")
          return dispatch(AppStat(status.data.on))
      }catch(error){
        console.log(error, "from Order")
      }
      }
    }

  export const asyncAppSwitch = ()=>{
 
    return async function ( dispatch ){
      try{
        let status =  await axios.get(`https://ill-lime-gopher-sari.cyclic.app/webapp/6435bff486a38eae17515a66`);
        console.log(status.data.on, "esto es initialstate")
        status.data.on === true ?
        await axios.patch(`https://ill-lime-gopher-sari.cyclic.app/webapp/6435bff486a38eae17515a66`,{ "on": false }):
        await axios.patch(`https://ill-lime-gopher-sari.cyclic.app/webapp/6435bff486a38eae17515a66`,{ "on": true })
        let status1 =  await axios.get(`https://ill-lime-gopher-sari.cyclic.app/webapp/6435bff486a38eae17515a66`);
        console.log(status1.data.on, "este es el estado de la APP")
           return dispatch(AppStat(status1.data.on))
      }catch(error){
        console.log(error, "STATUS ERROR")
      }
      }
    }
  
//----------------------------------------------------------------------------------------------------------------

export const { allProducts, favProducts, cancelBagProducts, SearchProducts, OrderStat,AppStat} =
  dataSlice.actions;

export default dataSlice.reducer;
