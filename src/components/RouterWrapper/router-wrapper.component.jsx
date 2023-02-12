import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/home.component";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
