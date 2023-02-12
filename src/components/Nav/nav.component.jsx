import React from "react";
import styles from "../Nav/nav.module.css";
import { IconButton } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Nav = () => {
  return (
    <div className={`${styles.mainContainer} ${styles.allContainers}`}>
      <div className={`${styles.leftContainer} ${styles.allContainers}`}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div className={`${styles.youtubeLogoIcon} ${styles.allContainers}`}>
          <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
          <div>YouTube-Clone</div>
        </div>
      </div>
      <div className={`${styles.middleContainer} ${styles.allContainers}`}>
        <div>
          <TextField
            placeholder="Search"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className={`${styles.rightContainer} ${styles.allContainers}`}></div>
    </div>
  );
};

export default Nav;
