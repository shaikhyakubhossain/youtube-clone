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

  const leftMenuForDesktopRef = useRef(null);
  const leftMenuForMobileRef = useRef(null);
  const homeComponent = useRef(null);

  const location = useLocation();
  // const [leftMenuStyle, setLeftMenuStyle] = useState("block")
  const [screenSize, setscreenSize] = useState({
    width: window.innerWidth
  });


  const toggleMaxMinOfLeftMenu = (props) => {

    if(screenSize.width < 650 && location.pathname.slice(1, 12) !== "watch-video"){
      // console.log("650: ", 650);
      leftMenuForMobileRef.current.style.display = "none";
      homeComponent.current.children[0].style.left = "0";
    }


    if(screenSize.width < 1312 && location.pathname.slice(1, 12) !== "watch-video"){
      // console.log("home: ", homeComponent.current.style);
      // leftMenuForDesktopRef.current.style.zIndex = 2;
      if(screenSize.width >= 650){
      homeComponent.current.children[0].style.left = "64px";

        leftMenuForMobileRef.current.style.display = "block";

      }
    }

    if(location.pathname.slice(1, 12) !== "watch-video" || screenSize.width < 1312){

      if(!props.isMaximized){
      toggleMinMax();

        leftMenuForDesktopRef.current.className = styles.LeftMenuForDesktopActive;
        //  leftMenuForDesktopRef.current.style.display = "block";
        // setLeftMenuStyle("block")
        // console.log("blocked");
      }
      if(props.isMaximized){
        leftMenuForDesktopRef.current.className = styles.LeftMenuForDesktopInactive;
        //  leftMenuForDesktopRef.current.style.display = "none";
        // setLeftMenuStyle("none")
        // console.log("noned");
      }

    }
    if(location.pathname.slice(1, 12) === "watch-video"){
      toggleMinMax();
      // console.log("hello");
      if(!props.isMaximized){
        leftMenuForDesktopRef.current.className = styles.LeftMenuForDesktopActive;
        //  leftMenuForDesktopRef.current.style.display = "block";
        // setLeftMenuStyle("block")
        // console.log("blocked");
      }
      if(props.isMaximized){
        leftMenuForDesktopRef.current.className = styles.LeftMenuForDesktopInactive;
        //  leftMenuForDesktopRef.current.style.display = "none";
        // setLeftMenuStyle("none")
        // console.log("noned");
      }
    }
    if(location.pathname.slice(1, 12) !== "watch-video" && screenSize.width >= 1312){
      leftMenuForDesktopRef.current.className = styles.LeftMenuForDesktopInactive;
      // console.log("hiiiiiii")
      if(!props.isMaximized){
        homeComponent.current.children[0].style.left = "244px";
         leftMenuForDesktopRef.current.style.display = "block";
         leftMenuForMobileRef.current.style.display = "none";
        // setLeftMenuStyle("block")
        // console.log("blocked");
      }
      if(props.isMaximized){
         toggleMinMax();
        homeComponent.current.children[0].style.left = "64px";
         leftMenuForDesktopRef.current.style.display = "none";
         leftMenuForMobileRef.current.style.display = "block";
        // setLeftMenuStyle("none")
        // console.log("noned");
      }
    }
  }

  const handleResize = () => {
    setscreenSize({
      width: window.innerWidth
    })
  }

  useEffect(() => {
    // leftMenuForDesktopRef.current.style.display = leftMenuStyle;
    // console.log("location", location.pathname.slice(1, 12));
    
    window.addEventListener('resize', handleResize);
    console.log("width: ", screenSize.width)
    toggleMaxMinOfLeftMenu(props);
    return () => {
      window.removeEventListener('resize', handleResize);
    };  
  }, [props.isMaximized, location, screenSize])


  return (
    <>
    <Nav />
    <div className={styles.LeftMenuForDesktopInactive} ref={leftMenuForDesktopRef}><LeftMenuForDesktop /></div>
    <div ref={leftMenuForMobileRef}><LeftMenuForMobile /></div>
    <Routes>
      <Route path="/" element={<div ref={homeComponent}><Home /></div>} />
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