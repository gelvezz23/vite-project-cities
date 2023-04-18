import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Link, useParams } from "react-router-dom";

export const TouristicZone = () => {
  const [items, setItems] = useState();
  const { idItem } = useParams();

  useEffect(() => {
    fetch(
      `https://api-colombia.com/api/v1/Department/${idItem}/touristicattractions`
    )
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        setItems(items);
      });
  }, [idItem]);

  if (items?.length === 0) {
    return (
      <div className="container-fluid text-center align-items-center">
        <div className="row align-items-start justify-content-center">
          <h1 className="display-1">No se encontro sitios turisticos</h1>
          <Link to="/">Volver</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid text-center align-items-center">
        <div className="row align-items-start justify-content-center">
          <h1 className="display-1">Bienvenido</h1>
          <p className="lead">Busca sitios turisticos</p>
          {items ? (
            <Card departments={true} touristic={true} regiones={items} />
          ) : (
            <p>loading ...</p>
          )}
        </div>
      </div>
    );
  }
};
