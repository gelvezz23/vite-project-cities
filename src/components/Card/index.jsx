/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Card = ({ regiones, departments = false, touristic = false }) => {
  console.log(regiones);
  return (
    <>
      {regiones?.map((items) => (
        <div
          className="card col-md-4 bg-dark"
          data-bs-theme="dark"
          key={items.id}
        >
          {departments && (
            <img src={items.images[0]} className="card-img-top" alt="..."></img>
          )}
          <div className="card-body">
            <h5 className="card-title">{items.name}</h5>
            <p className="card-text">{items.description}</p>
            {!touristic && (
              <Link
                to={
                  departments ? `/region/${items.id}` : `/touristic/${items.id}`
                }
                className="card-link"
              >
                ver más
              </Link>
            )}
            {touristic && <Link to="/"> volver</Link>}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
