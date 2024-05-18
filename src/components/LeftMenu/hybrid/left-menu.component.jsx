import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { setFalse } from "../../../redux";
import styles from "../hybrid/left-menu.module.css";
import { Button } from "@mui/material";
import { leftMenuMainSectionRow1 } from "../../../constants/btn-list";
import { useLocation, Link } from "react-router-dom";
 

// hybrid left menu component
function LeftMenu(props) {
  const location = useLocation();
  const btnContainerMain = useRef(null);
  const mainSection = useRef(null)

  const [btnStyle, setBtnStyle] = useState({
    background: "rgb(0,0,0)",
    width: "100%",
    // height: "40px",
    justifyContent: "left",
    borderRadius: "10px",
    padding: "0"
  });
  const [previousElemInBtnList, setPreviousElemInBtnList] = useState(null);

  useEffect(() => {
    toggleMaxMinOfLeftMenu();
    // console.log("location", location.pathname.slice(1, 12));
    window.addEventListener('click', (e) => {
      if(location.pathname.slice(1, 12) === "watch-video" && e.target.id !== "LeftMenuController" && e.target.parentNode.id !== "LeftMenuController" && e.target.parentNode.parentNode.id !== "LeftMenuController" && e.target !== mainSection.current && props.isMaximized === true){
        props.setFalse();
        console.log(e.target, " ", props.isMaximized);
      }

    });
  }, [props.isMaximized, location.pathname]);

  const toggleActiveLeftMenuBtn = (e) => {
    if (previousElemInBtnList !== null) {
      previousElemInBtnList.style.background = "rgb(15, 15, 15)";
    }
    e.currentTarget.style.background = "rgb(39,39,39)";
    // console.log("this", e.currentTarget, "style", e.currentTarget.style);
    setPreviousElemInBtnList(e.currentTarget);
  };

  const toggleMaxMinOfLeftMenu = () => {
    
    if(location.pathname.slice(1, 12) === "watch-video"){
      if(!props.isMaximized){
        mainSection.current.className = styles.mainSectionHidden;
        leftMenuMainSectionRow1.forEach((item, index) => {
          mainSection.current.children[0].children[0].children[index].children[0].children[0].className = styles.btnContainerMainMax;
          mainSection.current.children[0].children[0].children[index].children[0].children[0].children[0].className = styles.btnIconContainerMax;
        });
      }
      if(props.isMaximized){
        mainSection.current.className = styles.mainSectionExpand;
        leftMenuMainSectionRow1.forEach((item, index) => {
          mainSection.current.children[0].children[0].children[index].children[0].children[0].className = styles.btnContainerMainMax;
          mainSection.current.children[0].children[0].children[index].children[0].children[0].children[0].className = styles.btnIconContainerMax;
        });
      }
    }
    else{
      if(!props.isMaximized){
        mainSection.current.className = styles.mainSectionExpand;
        leftMenuMainSectionRow1.forEach((item, index) => {
          mainSection.current.children[0].children[0].children[index].children[0].children[0].className = styles.btnContainerMainMax;
          mainSection.current.children[0].children[0].children[index].children[0].children[0].children[0].className = styles.btnIconContainerMax;
  
        });
  
        
  
        // console.log(mainSection.current.className);
      }
      if(props.isMaximized){
        mainSection.current.className = styles.mainSectionMinimize;
        leftMenuMainSectionRow1.forEach((item, index) => {
          mainSection.current.children[0].children[0].children[index].children[0].children[0].className = styles.btnContainerMainMin;
          mainSection.current.children[0].children[0].children[index].children[0].children[0].children[0].className = styles.btnIconContainerMin;
          
        });
        // console.log(mainSection.current.className);
  
       
  
      }
    }

    
    // console.log(mainSection.current.children[0].children[0].children[2].children[0]);

    
  }
 
  // console.log(props.isMaximized);

  return (
    <>
      <div ref={mainSection} className={styles.mainSectionExpand}>
        <div className={styles.row1}>
          <div className={styles.btnContainer}>
            {leftMenuMainSectionRow1.map((item, index) => {
              return (
                <Link className={styles.link} to={item.link} key={index}>
                <Button
                  
                  // variant="text"
                  sx={btnStyle}
                  onClick={(e) => toggleActiveLeftMenuBtn(e)}
                >
                  <div className={styles.btnContainerMainMax}>
                    <div className={styles.btnIconContainerMax}>{item.logo}</div>
                    
                    <div className={styles.btnFontContainer}>
                      <div className={styles.btnFont}>{item.name}</div>
                    </div>
                  </div>
                </Button>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.row2}></div>
      </div>
      <div className={styles.exploreSection}></div>
      <div className={styles.moreFromYoutubeSection}></div>
    </>
  );
}

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



export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
