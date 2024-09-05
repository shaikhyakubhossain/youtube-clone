import React, { useRef, useEffect, useState } from "react";
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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const Nav = (props) => {
  const internalSearchIconRef = useRef(null);
  const externalSearchIconRef = useRef(null);
  const TextFieldRef = useRef(null);
  const textFieldContainerRef = useRef(null);
  const mobileSearchBtnRef = useRef(null);
  const leftContainerRef = useRef(null);
  const middleContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [shouldKeepMobileSearchBarOn, setShouldKeepMobileSearchBarOn] = useState(false);

  const toggleSearchIcon = () => {
    if (internalSearchIconRef.current.style.display === "block") {
      internalSearchIconRef.current.style.display = "none";
    } else if (internalSearchIconRef.current.style.display === "none") {
      internalSearchIconRef.current.style.display = "block";
    }
  };

  const toggleSearchBarMobile = () => {
    if(screenSize.width <= 650 && shouldKeepMobileSearchBarOn === false){
      // textFieldContainerRef.current.style.display = "none";
      // // externalSearchIconRef.current.style.borderRadius = "40px 40px 40px 40px";
      // externalSearchIconRef.current.style.borderRadius = "100%";

      middleContainerRef.current.style.display = "none";
      // middleContainerRef.current.style.justifyContent = "space-between";
      mobileSearchBtnRef.current.style.display = "block"; 



    }
    if(screenSize.width >= 650){
      handleMobileSearchBarOnOff("flex", "none", false);
      // textFieldContainerRef.current.style.display = "block";
      // externalSearchIconRef.current.style.borderRadius = "0 40px 40px 0";
      leftContainerRef.current.style.display = "flex"
      middleContainerRef.current.style.display = "flex";
      rightContainerRef.current.style.display = "flex"
      mobileSearchBtnRef.current.style.display = "none";

    }

  }

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleMobileSearchBarOnOff = (leftRight, middle, setShouldKeepMobileSearchBarOnBoolean) => {
    leftContainerRef.current.style.display = leftRight;
    rightContainerRef.current.style.display = leftRight;
    middleContainerRef.current.style.display = middle;
    setShouldKeepMobileSearchBarOn(setShouldKeepMobileSearchBarOnBoolean);
  }

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth
    })
  } 

  useEffect(() => {
    internalSearchIconRef.current.style.display = "none";
    window.addEventListener('resize', handleResize);
    toggleSearchBarMobile();
    // console.log("input: ", TextFieldRef.current.children[0].children[1]);    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);

  return (
    <div className={`${styles.mainContainer} ${styles.allContainers}`}>
      <div ref={leftContainerRef} className={`${styles.leftContainer} ${styles.allContainers}`}>
        <IconButton id="LeftMenuController" onClick={props.toggleMinMax}>
          <MenuIcon />
        </IconButton>
        <Link to="/" className={`${styles.youtubeLogoIcon} ${styles.allContainers}`}>
          <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
          <div>YouTube-Clone</div>
        </Link>
      </div>
      <div className={`${styles.middleContainer} ${styles.allContainers}`} ref={middleContainerRef}>
        <div className={styles.mobileSearchBackBtn} onClick={() => handleMobileSearchBarOnOff("flex", "none", false)}>
          <IconButton >
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className={styles.textFieldContainer} ref={textFieldContainerRef}>
          <TextField
            onFocus={toggleSearchIcon}
            onBlur={toggleSearchIcon}
            onChange={handleOnChange}
            ref={TextFieldRef}
            placeholder="Search"
            size="small"
            sx={{
              width: "100%",
            }}
            InputProps={{
              sx: {
                borderRadius: "40px 0 0 40px",
                // maxWidth: "519.200px",
                Height: "38.400px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{}} ref={internalSearchIconRef} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Link to={'search-videos/' + searchQuery} reloadDocument>
        <Button
          ref={externalSearchIconRef}
          // size="small"
          sx={{
            borderRadius: "0 40px 40px 0",
            // borderRadius: "40px 40px 40px 40px",
            border: "1px solid rgb(48, 48, 48)",
            background: "hsla(0, 0%, 100%, 0.08)"
          }}
        >
          <SearchIcon fontSize="medium" sx={{ color: "#f1f1f1" }} />
        </Button>
        </Link>
        <IconButton sx={{marginLeft:"6px", background:"rgba(88,88,88, 0.1)"}} >
          <MicIcon sx={{color:"white"}}/>
        </IconButton>
      </div>
      <div ref={rightContainerRef} className={`${styles.rightContainer} ${styles.allContainers}`}>
        <div ref={mobileSearchBtnRef} onClick={() => handleMobileSearchBarOnOff("none", "flex", true)}>
        <IconButton >
          <SearchIcon/>
        </IconButton>
        </div>
        <div>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
        </div>
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
