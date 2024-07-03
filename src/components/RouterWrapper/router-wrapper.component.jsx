import React, { createRef, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/home.component";
import WatchVideo from "../../pages/WatchVideo/watch-video.component"
import Nav from '../Nav/nav.component.jsx'
import LeftMenuForDesktop from "../LeftMenu/desktop/left-menu.component.jsx";
import { connect } from "react-redux";
import { setFalse } from "../../redux";


const RouterWrapper = (props) => {

  const LeftMenuForDesktopRef = useRef(null);

  const toggleMaxMinOfLeftMenu = (toggleValue) => {
    if(!toggleValue){
      LeftMenuForDesktopRef.current.style.display = "block";
    }
    if(toggleValue){
      LeftMenuForDesktopRef.current.style.display = "none";
    }
  }

  useEffect(() => {
    toggleMaxMinOfLeftMenu(props.isMaximized);
  }, [props.isMaximized])


  return (
    <>
    <Nav />
    <div ref={LeftMenuForDesktopRef}>
    <LeftMenuForDesktop  />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="watch-video/:id" element={<WatchVideo />} />
    </Routes>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    isMaximized: state.isMaximized
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFalse: () => dispatch(setFalse())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RouterWrapper);