import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../container/Home";
import Departments from "../container/Departments";
import Layout from "./../components/Layout";
import { TouristicZone } from "../container/TouristicZone";
import { City } from "../container/City";
export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/city" element={<City />} />
          <Route exact path="/region/:id/" element={<Departments />} />
          <Route exact path="/touristic/:idItem/" element={<TouristicZone />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
