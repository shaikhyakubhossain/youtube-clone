import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "../LeftMenu/left-menu.module.css";
import { Button } from "@mui/material";
import { leftMenuMainSectionRow1 } from "../../constants/btn-list";

function LeftMenu(props) {
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
    toggleMaxMinOfLeftMenu()
  }, [props.isMaximized]);

  const toggleActiveLeftMenuBtn = (e) => {
    if (previousElemInBtnList !== null) {
      previousElemInBtnList.style.background = "rgb(15, 15, 15)";
    }
    e.currentTarget.style.background = "rgb(39,39,39)";
    // console.log("this", e.currentTarget, "style", e.currentTarget.style);
    setPreviousElemInBtnList(e.currentTarget);
  };

  const toggleMaxMinOfLeftMenu = () => {
    if(!props.isMaximized){
      mainSection.current.className = styles.mainSectionExpand;
      leftMenuMainSectionRow1.forEach((item, index) => {
        mainSection.current.children[0].children[0].children[index].children[0].className = styles.btnContainerMainMax;
        mainSection.current.children[0].children[0].children[index].children[0].children[0].className = styles.btnIconContainerMax;

      });

      

      // console.log(mainSection.current.className);
    }
    if(props.isMaximized){
      mainSection.current.className = styles.mainSectionMinimize;
      leftMenuMainSectionRow1.forEach((item, index) => {
        mainSection.current.children[0].children[0].children[index].children[0].className = styles.btnContainerMainMin;
        mainSection.current.children[0].children[0].children[index].children[0].children[0].className = styles.btnIconContainerMin;

      });
      // console.log(mainSection.current.className);

     

    }
    console.log(mainSection.current.children[0].children[0].children[2].children[0]);

    
  }
 
  // console.log(props.isMaximized);


  return (
    <>
      <div ref={mainSection} className={styles.mainSectionExpand}>
        <div className={styles.row1}>
          <div className={styles.btnContainer}>
            {leftMenuMainSectionRow1.map((item, index) => {
              return (
                <Button
                  key={index}
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



export default connect(mapStateToProps)(LeftMenu);
