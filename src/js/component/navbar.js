import React, { useContext } from "react";
import sw_logo from "./../../img/sw_logo.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-3 mx-auto col-10">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              className="img-fluid mx-5"
              width="88"
              src={sw_logo}
              alt="logo"
            />
          </span>
        </Link>

        <div className="dropdown ms-auto me-5">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Favorites{" "}
            <span type="button" className="btn btn-secondary py-0 px-1">
              {store?.favorites.length}
            </span>
          </button>

          <ul className="dropdown-menu">
            {store?.favorites.length ? (
              store?.favorites.map((item, index) => (
                <li key={index} className="dropdowm-item d-flex py-1">
                  <p className="ms-2 my-0 p-0">{item}</p>
                  <a
                    className="ms-auto py-0 btn"
                    onClick={() => {
                      actions.removeFromFavorites(item);
                    }}
                  >
                    <svg
                      className="bi bi-trash-fill mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                    </svg>
                  </a>
                </li>
              ))
            ) : (
              <p className="dropdown-item">empty</p>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
