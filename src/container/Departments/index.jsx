import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card";
import { useParams } from "react-router-dom";

const Departments = () => {
  const [items, setItems] = useState();

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api-colombia.com/api/v1/Region/${id}/deparments`)
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        setItems(items);
      });
  }, [id]);

  return (
    <>
      <div className="container-fluid text-center align-items-center">
        {items && (
          <div className="jumbotron">
            <h1 className="display-4">Bienvenido a {`${items.name}`}!</h1>
            <hr className="my-4" />
            <p className="lead">{`${items.description}`}</p>
            <hr className="my-4" />
          </div>
        )}
        <div className="row align-items-start justify-content-center">
          <h1 className="display-1">Bienvenido</h1>
          <p className="lead">Busca sitios turisticos</p>
          {items && <Card departments={false} regiones={items?.departments} />}
        </div>
      </div>
    </>
  );
};

export default Departments;
