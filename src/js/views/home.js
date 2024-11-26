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
          {console.log("about to pass to Cardlist", store?.People)}
          <CardList
            cardTitle="People"
            cardCategory={store?.People?.results}
          ></CardList>
          <CardList
            cardTitle="Planets"
            cardCategory={store?.Planets?.results}
          ></CardList>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};
