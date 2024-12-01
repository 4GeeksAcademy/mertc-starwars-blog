import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardDetails = (props) => {
  const { store, actions } = useContext(Context);
  const { category, theid } = useParams();
  const [details, setDetails] = useState();
  const [properties, setProperties] = useState();

  useEffect(() => {
    console.log("useEffect WORKING");
    actions
      .fetchAPI(
        category == "Films"
          ? store[category]?.result[theid - 1]?.url
          : store[category]?.results[theid - 1]?.url
      )
      .then((data) => {
        console.log("Fetched data:", data);
        setDetails(data); // Set the fetched data
        setProperties(Object.keys(data?.result?.properties));
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [store, actions]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-4">
          <img
            width="300px"
            onError={(e) =>
              (e.target.src = `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`)
            }
            src={`https://starwars-visualguide.com/assets/img/${category.toLowerCase()}/${theid}.jpg`}
            alt="Card image cap"
          />
        </div>

        {/* Card Body */}
        <div className="col-8">
          <h1 className="card-title">
            {category == "Films"
              ? "Star Wars " +
                store[category]?.result[theid - 1]?.properties?.title
              : store[category]?.results[theid - 1]?.name}
          </h1>
          <p className="card-text">
            {category == "Films"
              ? store[category]?.result[theid - 1]?.description
              : details?.result?.description}
          </p>
        </div>
      </div>
      <div className="row">
        {" "}
        {/* Data Table */}
        <div className="table-responsive mt-4">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>{category == "Films" ? "Director" : properties?.[0]}</th>
                <th>{category == "Films" ? "Producer" : properties?.[1]}</th>
                <th>
                  {category == "Films" ? "Release Date" : properties?.[2]}
                </th>
                <th>{properties?.[3]}</th>
                <th>{properties?.[4]}</th>
                <th>{properties?.[5]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {category == "Films"
                    ? store[category]?.result[theid - 1]?.properties.director
                    : details?.result?.properties[properties?.[0]]}
                </td>
                <td>
                  {category == "Films"
                    ? store[category]?.result[theid - 1]?.properties.producer
                    : details?.result?.properties[properties?.[0]]}
                </td>
                <td>
                  {category == "Films"
                    ? store[category]?.result[theid - 1]?.properties
                        .release_date
                    : details?.result?.properties[properties?.[0]]}
                </td>
                <td>{details?.result?.properties[properties?.[3]]}</td>
                <td>{details?.result?.properties[properties?.[4]]}</td>
                <td>{details?.result?.properties[properties?.[5]]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
