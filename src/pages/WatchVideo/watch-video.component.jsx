import { useEffect, useRef, useState } from "react";
import styles from "./watch-video.module.css";
import VideoPlayer from "../../components/VideoPlayer/video-player.component";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setFalse } from "../../redux/index";
import axios from "axios";
import shortNumber from "short-number";
import { localReactJSVideos, localVideoDetail, globalReactJSVideos, globalVideoDetail } from "../../constants/url-list";
import { checkIfMaxResAvailableInAllItems, toggleURL, videoDurationCalculator } from "../../constants/utils";
import {Link} from 'react-router-dom';
import VideoDetail from "../../components/VideoDetail/video-detail.component";
import VideoDetailLoading from "../../components/VideoDetail/video-detail.loading";

const WatchVideo = (props) => {
  const params = useParams();
  const [videoId, setVideoId] = useState({id: params.id})
  const [apiDataVideoDetail, setApiDataVideoDetail] = useState(null);
  const [apiDataReactJSVideos, setApiDataReactJSVideos] = useState(null);
  const [urlsForReactJSVideos, setUrlsForReactJSVideos] = useState([globalReactJSVideos, localReactJSVideos])
  const [urlsForVideoDetail, setUrlsForVideoDetail] = useState([globalVideoDetail, localVideoDetail])
  const [urlListForAxios, setUrlListForAxios] = useState([toggleURL(urlsForReactJSVideos), toggleURL(urlsForVideoDetail) + params.id]);

  useEffect(() => {
    // console.log("watch");
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
        // console.log(response[1].data);
        setApiDataReactJSVideos(response[0].data);
        setApiDataVideoDetail(response[1].data);
      }
    );
}


  const whenVideoDetailIsLoaded = () => {
    
  };

  const whenVideoDetailIsLoading = () => {
    
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
        <VideoPlayer embedId={params ? params.id : null} className={styles.videoPlayer} />
        <div className={styles.videoDetail}>
          {apiDataVideoDetail ? <VideoDetail title={apiDataVideoDetail.title} description={apiDataVideoDetail.description} channelLogo={apiDataVideoDetail.channelLogo} channelTitle={apiDataVideoDetail.channelTitle} viewCount={apiDataVideoDetail.viewCount} publishTime={apiDataVideoDetail.publishTime} commentCount={apiDataVideoDetail.commentCount} commentList={apiDataVideoDetail.commentList} likeCount={apiDataVideoDetail.likeCount} /> : <VideoDetailLoading />}
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
