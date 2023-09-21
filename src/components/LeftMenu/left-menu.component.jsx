import React, { useRef, useState } from "react";
import styles from "../LeftMenu/left-menu.module.css";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { leftMenuMainSectionRow1 } from "../../constants/btn-list";

function LeftMenu() {
  const btnContainerMain = useRef(null);
  const mainSection = useRef(null)

  const [btnStyle, setBtnStyle] = useState({
    
    background: "rgb(0,0,0)",
    width: "100%",
    // height: "40px",
    justifyContent: "left",
    borderRadius: "10px",
  });
  const [previousElemInBtnList, setPreviousElemInBtnList] = useState(null);

  const toggleActiveLeftMenuBtn = (e) => {
    if (previousElemInBtnList !== null) {
      previousElemInBtnList.style.background = "rgb(15, 15, 15)";
    }
    e.currentTarget.style.background = "rgb(39,39,39)";
    console.log("this", e.currentTarget, "style", e.currentTarget.style);
    setPreviousElemInBtnList(e.currentTarget);
  };

  const toggleLeftMenu = () => {

      


  };



  return (
    <>
      <div ref={mainSection} className={styles.mainSectionExpand}>
        <div className={styles.row1}>
          <div className={styles.btnContainer}>
            {leftMenuMainSectionRow1.map((item) => {
              return (
                <Button
                  // variant="text"
                  sx={btnStyle}
                  onClick={(e) => toggleActiveLeftMenuBtn(e)}
                >
                  <div ref={btnContainerMain} className={styles.btnContainerMainMax}>
                    <div className={styles.btnIconContainer}>{item.logo}</div>
                    
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

export default LeftMenu;
