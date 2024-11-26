import React, { useContext } from "react";
import Card from "./Card.jsx";
import { Context } from "../store/appContext";

function CardList({ cardTitle, cardCategory }) {
  const { store, actions } = useContext(Context);

  return (
    <div className="mb-5">
      <h1>{cardTitle}</h1>
      <div className="d-flex overflow-auto">
        {cardCategory?.map((item) => (
          <Card key={item.uid} cardInfo={item}></Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;
