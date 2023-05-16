import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { asyncCancelFav, asyncfavProducts } from "../../redux/slice";
import "./Card.css";

export const Card = ({ producto }) => {
  let { favProd } = useSelector((state) => state.alldata);
  const thisFav = favProd?.filter((e) => e.name === producto.name);
  const dispatch = useDispatch();
  const [articles, setArticles] = useState({
    name: [],
    price: [],
  });

  let artAdd = function addArticle(e) {
    // e.preventDefault()
    setArticles({
      ...articles,
      name: [producto.name],
      price: [producto.price],
    });
    dispatch(asyncfavProducts(producto));
    setArticles({
      ...articles,
      name: [],
      price: [],
    });
  };

  let cancelFav = function cancelBagArticle(e) {
    dispatch(asyncCancelFav(producto.name));
  };

  return (
    <div className="contCard">
      <div className="contImg">
      <img src={producto.imgProd} alt="img producto" className="imgProd" />
      </div>
      <div className="leftInfo">
        <h2 className="nameProd">{producto.name}</h2>
        <p className="price">${producto.price}</p>
        <p className="detProd">{producto.detail}</p>
      </div>
      <div className="rightInfo">
        <div className="divBtnProd">
          {thisFav.length === 0 ? (
            <button className="btnPlus" onClick={artAdd}>
              Agregar
            </button>
          ) : (
            <div className="masMenos">
              <button className="btn-svg" onClick={cancelFav}>
                -
              </button>
              <p className="cuantiti">{thisFav.length}</p>
              <button className="btn-svg" onClick={artAdd}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
