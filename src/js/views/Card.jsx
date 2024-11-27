import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

const Card = ({ cardInfo }) => {
  const [detail, setDetail] = useState();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    getDetail(cardInfo.url);
  }, []);

  const getDetail = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={rigoImage} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{cardInfo.name}</h5>

          {detail?.result?.properties
            ? Object.entries(detail.result.properties)
                .slice(0, 3) // Get the first 3 entries
                .map(([key, value]) => (
                  <p key={key} className="card-text">
                    {key}: {value}
                  </p>
                ))
            : null}

          <div className="d-flex">
            <a href="#" className="btn btn-primary">
              Learn more!
            </a>
            <button
              type="button"
              className="btn btn-outline-warning ms-auto"
              onClick={() => actions.addToFavorites(cardInfo.name)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
