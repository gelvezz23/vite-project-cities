import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import "./style.css";
const Home = () => {
  const [regiones, setRegiones] = useState([]);
  const [country, setCountry] = useState();

  useEffect(() => {
    fetch(`https://api-colombia.com/api/v1/Region`)
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        setRegiones(items);
      });

    fetch(`https://api-colombia.com/api/v1/Country/Colombia`)
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        setCountry(items);
      });
  }, []);

  return (
    <>
      <div className="container-fluid text-center align-items-center">
        {country ? (
          <div className="jumbotron">
            <h1 className="display-4">Bienvenido a {`${country?.name}`}!</h1>
            <p className="lead">{`${country?.description}`}</p>
            <hr className="my-4" />
            <ul className="list-group list-group-horizontal justify-content-center align-items-center">
              <li className="list-group-item">
                Capital : {`${country?.stateCapital}`}
              </li>
              <li className="list-group-item">
                Moneda: {`${country?.currencyCode} - ${country?.currency}`}
              </li>
              <li className="list-group-item">
                Bandera:{" "}
                <img className="img-flags" src={`${country?.flags[1]}`} />
              </li>
              <li className="list-group-item">
                Prefijo: {`${country?.phonePrefix}`}
              </li>
              <li className="list-group-item">
                Region: {`${country?.region} - ${country?.subRegion}`}
              </li>
            </ul>
            <hr className="my-4" />
          </div>
        ) : (
          <p>loading ...</p>
        )}
        <div className="row align-items-start justify-content-center">
          <h1 className="display-1">Bienvenido</h1>
          <p className="lead">Busca sitios turisticos</p>
          {regiones ? (
            <Card departments={false} regiones={regiones} />
          ) : (
            <p>loading ...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
