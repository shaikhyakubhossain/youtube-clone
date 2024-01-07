import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/home.component";
import WatchVideo from "../../pages/WatchVideo/watch-video.component"
import Nav from '../Nav/nav.component.jsx'
import LeftMenu from "../LeftMenu/left-menu.component.jsx";

export const RouterWrapper = () => {
  return (
    <>
    <Nav />
    <LeftMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="watch-video" element={<WatchVideo />} />
    </Routes>
    </>
  );
};
