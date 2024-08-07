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
import { localReactJSVideos, localVideoDetail, globalReactJSVideos, globalVideoDetail } from "../../constants/url-list";
import { checkIfMaxResAvailableInAllItems, toggleURL, videoDurationCalculator } from "../../constants/utils";
import Skeleton from '@mui/material/Skeleton';
import {Link} from 'react-router-dom';


const WatchVideo = (props) => {
  const params = useParams();
  const [videoId, setVideoId] = useState({id: params.id})
  const [apiDataVideoDetail, setApiDataVideoDetail] = useState(null);
  const [apiDataReactJSVideos, setApiDataReactJSVideos] = useState(null);
  const [urlsForReactJSVideos, setUrlsForReactJSVideos] = useState([globalReactJSVideos, localReactJSVideos])
  const [urlsForVideoDetail, setUrlsForVideoDetail] = useState([globalVideoDetail, localVideoDetail])
  const [urlListForAxios, setUrlListForAxios] = useState([toggleURL(urlsForReactJSVideos), toggleURL(urlsForVideoDetail) + params.id]);

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
    console.log("watch");
    props.setFalse();
    fetchData();
    // console.log("videoId ",videoId);
    // console.log("apiData", apiData, "params.id", params.id);
    // console.log(apiDataReactJSVideos.items.snippet);
    // console.log("params ", params);
  }, [videoId]);

  const fetchData = () => {
    axios.all(urlListForAxios.map((endpoint) => axios.get(endpoint))).then(
      (response) => {
        // console.log(response[0].data);
        // console.log(response[0].data);
        setApiDataReactJSVideos(response[0].data);
        setApiDataVideoDetail(response[1].data);
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
        <div className={styles.title}>{apiDataVideoDetail && apiDataVideoDetail.title}</div>
        <div className={styles.subContainer1Main}>
          <div className={styles.subContainer1LeftPart}>
            <div className={styles.channelLogo}></div>
            <div className={styles.channelTitleAndSubscribersCountContainer}>
              <div className={styles.channelTitle}>
                {apiDataVideoDetail.channelTitle}
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
                {shortNumber(parseInt(apiDataVideoDetail.likeCount))}
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
                      <Button className={ item.value === "Download" ? `${styles.downloadBtn} ${styles.subContainer1RightPartBtns}` : styles.subContainer1RightPartBtns}
                        startIcon={item.logo}
                        sx={subContainer1RightPartStaticBtnSX}
                      >
                        {item.value ? item.value : null}
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
            {apiDataVideoDetail.viewCount} views
          </div>
          <div className={styles.descriptionMinimize} ref={descriptionRef}>
            {apiDataVideoDetail.description}
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
          <div className={styles.commentCount}>{apiDataVideoDetail.commentCount} Comments</div>
        </div>
      </>
    );
  };

  const whenVideoDetailIsLoading = () => {
    const marginLR = {
      margin: "0 4px 0 4px"
    } 

    const marginTB = {
      margin: "4px 0 4px 0"
    }
    return (
      <>
      <Skeleton variant="rounded" width={410} height={20} sx={marginTB}/>
      <div className={styles.videoDetailFlex1} >
      <Skeleton variant="rounded" width={210} height={20} sx={marginTB}/>
      <div>
      <Skeleton variant="circular" width={20} height={20} sx={marginLR}/>
      <Skeleton variant="circular" width={20} height={20} sx={marginLR}/>
      <Skeleton variant="circular" width={20} height={20} sx={marginLR}/>
      <Skeleton variant="circular" width={20} height={20} sx={marginLR}/>
      <Skeleton variant="circular" width={20} height={20} sx={marginLR}/>
      </div>
      </div>
      <div className={styles.videoDetailLoadingFlex}>
        <div>
        <Skeleton variant="circular" width={60} height={60} sx={marginLR}/>
        <div >
      <Skeleton variant="rounded" width={210} height={20} sx={marginTB}/>
      <Skeleton variant="rounded" width={210} height={20} sx={marginTB}/>
        </div>
        </div>
        <div className={styles.subscribeBtnSkeleton}>
          <Skeleton variant="rounded" width={150} height={40} sx={marginTB}/>
        </div>
      </div>
      </>
    );
  };

  const whenVideoSuggestionIsLoaded = () => {
    // console.log("apiDataReactJSVideos: ", apiDataReactJSVideos);
    return apiDataReactJSVideos.map((item, index) => {
      return (
        <Link key={index} to={"/watch-video/" + item.videoId} style={{textDecoration: "none"}} reloadDocument >
        <div className={styles.videoSuggestionItemContainer}>
          <div className={styles.videoSuggestionThumbnail}>
            <img src={checkIfMaxResAvailableInAllItems(apiDataReactJSVideos) ? item.thumbnails.maxres.url : item.thumbnails.medium.url } />
            <div className={styles.videoDuration}>{ videoDurationCalculator(item.duration) }</div>
          </div>
          <div className={styles.videoSuggestionDetailContainer}>
          {item.title.length >= 58 ? <div className={styles.videoSuggestionTitle}>{item.title.slice(0, 57)}...</div> : <div className={styles.videoSuggestionTitle}>{item.title}</div>}
          <div className={styles.videoSuggestionChannelName}>{item.channelTitle}</div>
          <div className={styles.videoSuggestionViewAndTimeContainer} >
            <div>{shortNumber(parseInt(item.viewCount))} views</div>
            {/* <div>Video Upload Time here</div> */}
          </div>
          </div>
        </div>
        </Link>
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
      {apiDataReactJSVideos && apiDataReactJSVideos.length > 14 ? whenVideoSuggestionIsLoaded() : whenVideoSuggestionIsLoading()}
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
