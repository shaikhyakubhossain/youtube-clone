import { useEffect, useRef, useState } from "react";
import styles from "./watch-video.module.css";
import VideoPlayer from "../../components/VideoPlayer/video-player.component";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setFalse } from "../../redux/index";
import axios from "axios";
import { Button } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import shortNumber from "short-number";
import { subContainer1RightPart } from "../../constants/btn-list";
import { mostPopularVideos, videoDetail } from "../../constants/url-list";
import { fetchMaxAvailableThumbnailResolution } from "../../constants/utils";


const WatchVideo = (props) => {
  const params = useParams();
  const [apiDataVideoDetail, setApiDataVideoDetail] = useState(null);
  const [apiDataMostPopularVideos, setApiDataMostPopularVideos] = useState(null);
  const [urlList, setUrlList] = useState([mostPopularVideos, videoDetail + params.id]);

  const descriptionRef = useRef(null);
  const descriptionShowLessBtnRef = useRef(null);
  const [shouldToggleDescriptionWindow, SetShouldToggleDescriptionWindow] = useState(true);
  const [subscribeBtnSX, setSubscribeBtnSX] = useState({
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
  const [
    subContainer1RightPartStaticBtnSX,
    SetSubContainer1RightPartStaticBtnSX,
  ] = useState({
    ...subscribeBtnSX,
    color: "white",
    background: "rgba(255, 255, 255, 0.1)",
    ":hover": {
      background: "rgba(255, 255, 255, 0.2)",
    },
  });

  useEffect(() => {
    props.setFalse();
    fetchData();
    // fetchDataForVideoDetail();
    // fetchDataForMostPopularVideos();
    // console.log("apiData", apiData, "params.id", params.id);
    // console.log(apiDataMostPopularVideos.items.snippet);
  }, [params]);

  const fetchData = () => {
    axios.all(urlList.map((endpoint) => axios.get(endpoint))).then(
      (response) => {
        // console.log(response[0].data);
        console.log(response[0].data);
        setApiDataVideoDetail(response[1].data);
        setApiDataMostPopularVideos(response[0].data);
      }
    );
   
    
}


  const descriptionStyle = (e) => {
    // console.log("descriptionStyle");
    
    if (shouldToggleDescriptionWindow) {
      // console.log("if");

      descriptionRef.current.className = styles.descriptionExpand;
      descriptionShowLessBtnRef.current.className =
        styles.descriptionShowLessBtnEnabled;
      descriptionShowLessBtnRef.current.parentNode.className = styles.subContainer2MainExpand;
        SetShouldToggleDescriptionWindow(false);
    }
    
  };

  const descriptionShowLessBtnStyle = () => {
    if(!shouldToggleDescriptionWindow){
    descriptionRef.current.className = styles.descriptionMinimize;
    descriptionShowLessBtnRef.current.className =
      styles.descriptionShowLessBtnDisabled;
      descriptionShowLessBtnRef.current.parentNode.className = styles.subContainer2MainMinimize;
      SetShouldToggleDescriptionWindow(true);
    }
    
  };

  const whenVideoDetailIsLoaded = () => {
    return (
      <>
        <div className={styles.title}>{apiDataVideoDetail && apiDataVideoDetail.snippet.title}</div>
        <div className={styles.subContainer1Main}>
          <div className={styles.subContainer1LeftPart}>
            <div className={styles.channelLogo}></div>
            <div className={styles.channelTitleAndSubscribersCountContainer}>
              <div className={styles.channelTitle}>
                {apiDataVideoDetail.snippet.channelTitle}
              </div>
              {/* <div className={styles.subscribersCount}>{} subscribers</div> */}
            </div>
            <div className={styles.subscribeBtn}>
              <Button variant="text" sx={subscribeBtnSX}>
                Subscribe
              </Button>
            </div>
          </div>
          <div className={styles.subContainer1RightPart}>
            <div className={styles.rightPartBtn}>
              <Button
                startIcon={<ThumbUpOutlinedIcon />}
                sx={{
                  ...subscribeBtnSX,
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                  ":hover": {
                    background: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                {shortNumber(parseInt(apiDataVideoDetail.statistics.likeCount))}
              </Button>
            </div>
            <div className={styles.rightPartBtn}>
              <Button
                startIcon={<ThumbDownOutlinedIcon />}
                sx={{
                  ...subscribeBtnSX,
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  ":hover": {
                    background: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              />
            </div>
            {subContainer1RightPart
              ? subContainer1RightPart.map((item, index) => {
                  return (
                    <div className={styles.rightPartBtnStatic}>
                      <Button
                        startIcon={item.logo}
                        sx={subContainer1RightPartStaticBtnSX}
                      >
                        {item.value}
                      </Button>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div
          className={styles.subContainer2MainMinimize}
          onClick={(e) => {
            descriptionStyle(e);
          }}
        >
          <div className={styles.viewCount}>
            {apiDataVideoDetail.statistics.viewCount} views
          </div>
          <div className={styles.descriptionMinimize} ref={descriptionRef}>
            {apiDataVideoDetail.snippet.description}
          </div>
          <div
            className={styles.descriptionShowLessBtnDisabled}
            onClick={descriptionShowLessBtnStyle}
            ref={descriptionShowLessBtnRef}
          >
            <Button>Show less</Button>
          </div>
        </div>
        <div className={styles.subContainer3}>
          <div className={styles.commentCount}>{apiDataVideoDetail.statistics.commentCount} Comments</div>
        </div>
      </>
    );
  };

  const whenVideoDetailIsLoading = () => {
    return <></>;
  };

  const whenVideoSuggestionIsLoaded = () => {
    return apiDataMostPopularVideos.items.map((item) => {
      return (
        <div className={styles.videoSuggestionItemContainer}>
          <div className={styles.videoSuggestionThumbnail}><img src={fetchMaxAvailableThumbnailResolution(item).url} /></div>
          <div>
          {item.snippet.title.length >= 59 ? <div className={styles.videoSuggestionTitle}>{item.snippet.title.slice(0, 58)}...</div> : <div className={styles.videoSuggestionTitle}>{item.snippet.title}</div>}
          <div className={styles.videoSuggestionChannelName}>{item.snippet.channelTitle}</div>
          <div className={styles.videoSuggestionViewAndTimeContainer} >
            <div>{shortNumber(parseInt(item.statistics.viewCount))} views</div>
            <div></div>
          </div>
          </div>
        </div>
      )
    })
   
  }

  const whenVideoSuggestionIsLoading = () => {
    return (
      <>
      </>
    )
  }


  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <VideoPlayer
          embedId={params ? params.id : null}
          className={styles.videoPlayer}
        ></VideoPlayer>
        <div className={styles.videoDetail}>
          {apiDataVideoDetail ? whenVideoDetailIsLoaded() : whenVideoDetailIsLoading()}
        </div>
      </div>
      <div className={styles.rightContainer}>
      {apiDataMostPopularVideos && apiDataMostPopularVideos.items.length > 19 ? whenVideoSuggestionIsLoaded() : whenVideoSuggestionIsLoading()}
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
