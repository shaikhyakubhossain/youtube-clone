import { useEffect, useState } from "react";
import styles from "./watch-video.module.css";
import VideoPlayer from "../../components/VideoPlayer/video-player.component";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setFalse } from "../../redux/index";
import axios from "axios";
import { Button } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import shortNumber from "short-number";

const WatchVideo = (props) => {
  const params = useParams();
  const [apiData, setApiData] = useState(null);
  const [muiBtnSx, setMuiBtnSx] = useState({
    fontSize: "14px",
    fontWeight: "500",
    color: "black",
    height: "36px",
    background: "rgba(255, 255, 255, 1)",
    borderRadius: "18px",
    padding: "0 16px",
    ":hover": {
      background: "rgba(255, 255, 255, 0.8)",
    },
  });

  useEffect(() => {
    props.setFalse();
    fetchData();
    // console.log("apiData", apiData, "params.id", params.id);
  }, [params]);

  const fetchData = () => {
    // axios.get("http://localhost:4000/videoDetail" + params.id)
      axios.get('https://youtube-clone-backend-five.vercel.app/videoDetail' + params.id)
      .then((response) => {
        const json = response.data;
        if (response.status === 200) {
          setApiData(json);
        }
      });
  };

  const whenVideoDetailIsLoaded = () => {
    return (
      <>
        <div className={styles.title}>{apiData && apiData.snippet.title}</div>
        <div className={styles.subContainer1Main}>
          <div className={styles.subContainer1LeftPart}>
            <div className={styles.channelLogo}></div>
            <div className={styles.channelTitleAndSubscribersCountContainer}>
              <div className={styles.channelTitle}>
                {apiData.snippet.channelTitle}
              </div>
              {/* <div className={styles.subscribersCount}>{} subscribers</div> */}
            </div>
            <div className={styles.subscribeBtn}>
              <Button variant="text" sx={muiBtnSx}>
                Subscribe
              </Button>
            </div>
          </div>
          <div className={styles.subContainer1RightPart}>
            <div className={styles.rightPartBtn}>
            <Button startIcon={<ThumbUpOutlinedIcon />} sx={{
              ...muiBtnSx,
              background: "rgba(255, 255, 255, 0.1)",
              color: "white",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
              ":hover": {
                  background: "rgba(255, 255, 255, 0.2)",
                }
            }}>
              {shortNumber(parseInt(apiData.statistics.likeCount))}
            </Button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const whenVideoDetailIsLoading = () => {
    return <></>;
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <VideoPlayer
          embedId={params ? params.id : null}
          className={styles.videoPlayer}
        ></VideoPlayer>
        <div className={styles.videoDetail}>
          {apiData ? whenVideoDetailIsLoaded() : whenVideoDetailIsLoading}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFalse: () => dispatch(setFalse()),
  };
};

export default connect(null, mapDispatchToProps)(WatchVideo);
