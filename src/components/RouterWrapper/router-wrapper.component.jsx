import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home/home.component";
import WatchVideo from "../../pages/WatchVideo/watch-video.component"
import Nav from '../Nav/nav.component.jsx'
import LeftMenuForDesktop from "../LeftMenu/desktop/left-menu.component.jsx";
import LeftMenuForMobile from "../LeftMenu/mobile/left-menu.component.jsx"
import { connect } from "react-redux";
import { setFalse } from "../../redux";
import styles from './router-wrapper.module.css';
import { toggleMinMax } from "../../redux/index";



const RouterWrapper = (props) => {

  const LeftMenuForDesktopRef = useRef(null);
  const LeftMenuForMobileRef = useRef(null);
  const location = useLocation();
  // const [leftMenuStyle, setLeftMenuStyle] = useState("block")


  const toggleMaxMinOfLeftMenu = (props) => {

    if(location.pathname.slice(1, 12) === "watch-video"){
      toggleMinMax();
      console.log("hello");
      if(!props.isMaximized){
        LeftMenuForDesktopRef.current.className = styles.LeftMenuForDesktopActive;
        //  LeftMenuForDesktopRef.current.style.display = "block";
        // setLeftMenuStyle("block")
        console.log("blocked");
      }
      if(props.isMaximized){
        LeftMenuForDesktopRef.current.className = styles.LeftMenuForDesktopInactive;
        //  LeftMenuForDesktopRef.current.style.display = "none";
        // setLeftMenuStyle("none")
        console.log("noned");
      }
    }
    else{
      LeftMenuForDesktopRef.current.className = styles.LeftMenuForDesktopInactive;
      console.log("hiiiiiii")
      if(!props.isMaximized){
         LeftMenuForDesktopRef.current.style.display = "block";
         LeftMenuForMobileRef.current.style.display = "none";
        // setLeftMenuStyle("block")
        console.log("blocked");
      }
      if(props.isMaximized){
         LeftMenuForDesktopRef.current.style.display = "none";
         LeftMenuForMobileRef.current.style.display = "block";
        // setLeftMenuStyle("none")
        console.log("noned");
      }
    }
  }

  useEffect(() => {
    // LeftMenuForDesktopRef.current.style.display = leftMenuStyle;
    // console.log("location", location.pathname.slice(1, 12));
    toggleMaxMinOfLeftMenu(props);
  }, [props.isMaximized, location])


  return (
    <>
    <Nav />
    <div className={styles.LeftMenuForDesktopInactive} ref={LeftMenuForDesktopRef}><LeftMenuForDesktop /></div>
    <div ref={LeftMenuForMobileRef}><LeftMenuForMobile /></div>
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