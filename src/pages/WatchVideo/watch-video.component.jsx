import styles from "./watch-video.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setFalse, setTopLoadingFalse, setTopLoadingTrue } from "../../redux/index";
import { toggleURL, checkIfMaxResAvailableInAllItems } from "../../constants/utils";
import { localReactJSVideos, localVideoDetail, globalReactJSVideos, globalVideoDetail } from "../../constants/url-list";
import VideoPlayer from "../../components/VideoPlayer/video-player.component";
import VideoDetail from "../../components/VideoDetail/video-detail.component";
import VideoDetailLoading from "../../components/VideoDetail/video-detail.loading";
import VideoSuggestion from "../../components/VideoSuggestion/video-suggestion.component";

const WatchVideo = (props) => {
  const params = useParams();
  const [videoId, setVideoId] = useState({id: params.id})
  const [apiDataVideoDetail, setApiDataVideoDetail] = useState(null);
  const [apiDataReactJSVideos, setApiDataReactJSVideos] = useState(null);
  const [urlsForReactJSVideos, setUrlsForReactJSVideos] = useState([globalReactJSVideos, localReactJSVideos])
  const [urlsForVideoDetail, setUrlsForVideoDetail] = useState([globalVideoDetail, localVideoDetail])
  const [urlListForAxios, setUrlListForAxios] = useState([toggleURL(urlsForReactJSVideos), toggleURL(urlsForVideoDetail) + params.id]);

  const [isMaxresAvailable, setIsMaxresAvailable] = useState(null);

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
        setIsMaxresAvailable(checkIfMaxResAvailableInAllItems(response[0].data));
        props.setTopLoadingFalse();
      }
    );
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
      {apiDataReactJSVideos && isMaxresAvailable !== null ?
       apiDataReactJSVideos.map((item) => {
        return (
        <Link to={"/watch-video/" + item.videoId} style={{textDecoration: "none"}} reloadDocument onClick={() => props.setTopLoadingTrue()}>
          <VideoSuggestion key={item.videoId} title={item.title} channelTitle={item.channelTitle} viewCount={item.viewCount} duration={item.duration} thumbnail={isMaxresAvailable ? item.thumbnails.maxres.url : item.thumbnails.medium.url }  />
        </Link>
        );
      })
      : null}
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    setFalse: () => dispatch(setFalse()),
    setTopLoadingFalse: () => dispatch(setTopLoadingFalse()),
    setTopLoadingTrue: () => dispatch(setTopLoadingTrue()),
  };
};

export default connect(null, mapDispatchToProps)(WatchVideo);
