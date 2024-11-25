import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "./Card.jsx";
import { Context } from "../store/appContext";
import CardList from "./CardList.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {console.log("about to pass to Cardlist", store?.People?.results)}
      <CardList cardCategory={store?.People?.results}></CardList>
    </div>
  );
};
