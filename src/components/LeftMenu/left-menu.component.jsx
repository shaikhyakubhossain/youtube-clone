import React, { useState } from "react";
import styles from "../LeftMenu/left-menu.module.css";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {leftMenuMainSectionRow1} from '../../constants/btn-list'

function LeftMenu() {
  const toggleLeftMenu = () => {};
  const [btnStyle, setBtnStyle] = useState({background: "rgb(39,39,39)",
  width: "100%",
  height: "40px",
  justifyContent: "left",
  borderRadius: "10px",});

  return (
    <>
      <div className={styles.mainSectionExpand}>
        <div className={styles.row1}>
          <div className={styles.btnContainer}>
            <Button variant="text"
              sx={
                btnStyle
              }
            >
              <div>
                <div className={styles.btnIconContainer}>
                  <HomeIcon />
                </div>
                <div className={styles.btnFontContainer}>
                  <div className={styles.btnFont}>Home</div>
                </div>
              </div>
            </Button>
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
