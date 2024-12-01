import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "./Card.jsx";
import { Context } from "../store/appContext";
import CardList from "./CardList.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <CardList
            cardTitle="Characters"
            cardCategory={store?.Characters?.results}
          ></CardList>
          <CardList
            cardTitle="Planets"
            cardCategory={store?.Planets?.results}
          ></CardList>
          {console.log("about to pass to films", store?.Films?.result)}
          <CardList
            cardTitle="Films"
            cardCategory={store?.Films?.result}
          ></CardList>
          <CardList
            cardTitle="Species"
            cardCategory={store?.Species?.results}
          ></CardList>
          <CardList
            cardTitle="Vehicles"
            cardCategory={store?.Vehicles?.results}
          ></CardList>
          <CardList
            cardTitle="Starships"
            cardCategory={store?.Starships?.results}
          ></CardList>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};
