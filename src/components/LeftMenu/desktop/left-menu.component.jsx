import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { setFalse } from "../../../redux";
import styles from "./left-menu.module.css";
import { Button } from "@mui/material";
import { leftMenuMainSectionRow1 } from "../../../constants/btn-list";
import { Link } from "react-router-dom";


// desktop left menu component
function LeftMenuForDesktop() {
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

  const toggleActiveLeftMenuBtn = (e) => {
    if (previousElemInBtnList !== null) {
      previousElemInBtnList.style.background = "rgb(15, 15, 15)";
    }
    e.currentTarget.style.background = "rgb(39,39,39)";
    // console.log("this", e.currentTarget, "style", e.currentTarget.style);
    setPreviousElemInBtnList(e.currentTarget);
  };

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
    isMaximized: state.leftMenu.isMaximized
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFalse: () => dispatch(setFalse())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuForDesktop);
