import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

export const City = () => {
  const [regiones, setRegiones] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api-colombia.com/api/v1/City`)
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        setRegiones(items);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading ...</p>;
  }
  return (
    <div className="row align-items-start justify-content-center">
      <h1 className="display-1">Bienvenido</h1>
      <p className="lead">Busca sitios turisticos</p>
      {regiones ? (
        <Card touristic={true} regiones={regiones} />
      ) : (
        <p>loading ...</p>
      )}
    </div>
  );
};
