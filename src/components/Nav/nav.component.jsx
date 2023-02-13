import React from "react";
import styles from "../Nav/nav.module.css";
import { Button, IconButton } from "@mui/material/";
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
        <Button size="small" sx={{borderRadius:"0 40px 40px 0", border:'1px solid rgb(48, 48, 48)', background:"hsla(0, 0%, 100%, 0.08)"}}>
        <SearchIcon fontSize='medium' sx={{color:"#f1f1f1"}} />
        </Button>
      </div>
      <div className={`${styles.rightContainer} ${styles.allContainers}`}></div>
    </div>
  );
};

export default Nav;
