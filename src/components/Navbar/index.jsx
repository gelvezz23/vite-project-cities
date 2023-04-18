import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  const [regions, setRegions] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    fetch("https://api-colombia.com/api/v1/Region")
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        setRegions(items);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My turistic
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/city">
                ciudades
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Regiones
              </a>
              <ul className="dropdown-menu">
                {regions?.map((items) => (
                  <li key={items.id}>
                    <Link className="dropdown-item" to={`/region/${items.id}`}>
                      {items.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <input
              onChange={(event) => setValue(event.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              onClick={() => setSelectorCategorie(`search.php?s=${value}`)}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
