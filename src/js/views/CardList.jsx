import React, { useContext } from "react";
import Card from "./Card.jsx";
import { Context } from "../store/appContext";

function CardList({ cardCategory }) {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex">
      {console.log("carlist inside", cardCategory)}
      {cardCategory?.map((item) => (
        <Card key={item.uid} cardInfo={item}></Card>
      ))}
    </div>
  );
}

export default CardList;
