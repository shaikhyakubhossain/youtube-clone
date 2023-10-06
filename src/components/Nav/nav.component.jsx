import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { toggleMinMax } from "../../redux/index";
import styles from "../Nav/nav.module.css";
import { Button, IconButton } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicIcon from "@mui/icons-material/Mic";

const Nav = (props) => {
  const SearchIconRef = useRef(null);
  const TextFieldRef = useRef(null);

  const toggleSearchIcon = () => {
    if (SearchIconRef.current.style.display === "block") {
      SearchIconRef.current.style.display = "none";
    } else if (SearchIconRef.current.style.display === "none") {
      SearchIconRef.current.style.display = "block";
    }
  };

  useEffect(() => {
    SearchIconRef.current.style.display = "none";
    // TextFieldRef.current;
  }, []);

  return (
    <div className={`${styles.mainContainer} ${styles.allContainers}`}>
      <div className={`${styles.leftContainer} ${styles.allContainers}`}>
        <IconButton onClick={props.toggleMinMax}>
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
            onFocus={toggleSearchIcon}
            onBlur={toggleSearchIcon}
            inputref={TextFieldRef}
            placeholder="Search"
            size="small"
            InputProps={{
              sx: {
                borderRadius: "40px 0 0 40px",
                width: "519.200px",
                Height: "38.400px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{}} ref={SearchIconRef} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          size="small"
          sx={{
            borderRadius: "0 40px 40px 0",
            border: "1px solid rgb(48, 48, 48)",
            background: "hsla(0, 0%, 100%, 0.08)",
          }}
        >
          <SearchIcon fontSize="medium" sx={{ color: "#f1f1f1" }} />
        </Button>
        <IconButton sx={{marginLeft:"6px", background:"rgba(88,88,88, 0.1)"}} >
          <MicIcon sx={{color:"white"}}/>
        </IconButton>
      </div>
      <div className={`${styles.rightContainer} ${styles.allContainers}`}>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMinMax: () => dispatch(toggleMinMax())
  }
}

export default connect(null, mapDispatchToProps)(Nav);
