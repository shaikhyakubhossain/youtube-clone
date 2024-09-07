import { useEffect, useState } from "react";
import styles from './home.module.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import { setFalse } from '../../redux/index';
import axios from "axios";
import { globalReactJSVideos, localReactJSVideos } from "../../constants/url-list";
import { checkIfMaxResAvailableInAllItems, toggleURL } from "../../constants/utils";
import { dummyArrayForLoading } from "../../constants/utils";
import VideoCard from "../../components/VideoCard/video-card.component";

const Home = (props) => {
  const [apiData, setApiData] = useState(null);
  const [urls, setUrl] = useState([globalReactJSVideos, localReactJSVideos]);

  const [isMaxresAvailable, setIsMaxresAvailable] = useState(null);

  useEffect(() => {
    props.setFalse();
    apiData === null  && fetchData();
    // console.log(apiData);
  }, [apiData]);

  const fetchData = () => {
    axios.get(toggleURL(urls))
    
    .then((response) => {
      const json = response.data;
        // console.log(json);
        setApiData(json);
        setIsMaxresAvailable(checkIfMaxResAvailableInAllItems(json));
    })
}

  const loadMuiSkeletonForVideo = () => {
      return (
        <>
          <div className={props.isMaximized ? styles.cardImgSkeletonExpand : styles.cardImgSkeletonMinimize} > <Skeleton sx={{background: "grey"}} variant="rounded" width={"100%"} height={"100%"}/> </div>
          <div className={styles.mainCardDetailContainerFlex}>
          <Skeleton sx={{background: "grey", margin: "15px 4px 4px 4px"}} variant="circular" width={40} height={40}/>
          <div className={styles.cardDetailContainer}>
          <Skeleton sx={{background: "grey", margin: "4px"}} variant="text" width={"250px"} height={40}/>
          <Skeleton sx={{background: "grey", margin: "4px"}} variant="text" width={"150px"} height={40}/>
          </div>
          </div>
        </>
      )
  }

  return (
    <div className={props.isMaximized ? styles.mainHomeContainerExpand : styles.mainHomeContainerMinimize}>
      { apiData && apiData[0].errorMessageWithCode 
      ? 
      <div className={styles.errorContainer}>
        <div>{apiData[0].errorMessageWithCode}</div>
        <div>{apiData[0].errorCause}</div>
      </div>
      : 
      apiData && apiData.map ? apiData.map((item, index) => {
        // console.log("apiData.lenght", apiData.items.lenght);
        // if (apiData.items[index].snippet && apiData.items[index].snippet.thumbnails){
        return(
          <Link to={"/watch-video/" + item.videoId} className={styles.containerCard}>
            <VideoCard key={index} isMaximized={props.isMaximized} duration={item.duration} thumbnail={ props.isMaxresAvailable ? item.thumbnails.maxres.url : item.thumbnails.medium.url } title={item.title} channelTitle={item.channelTitle} channelLogo={item.channelLogo} viewCount={item.viewCount} />
          </Link>
        )
        // }
      }) :  dummyArrayForLoading.map((item) => {
        return (
          <div key={item} className={styles.containerCard}>
            {loadMuiSkeletonForVideo()}
          </div>
        )
      })
    }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isMaximized: state.isMaximized
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    setFalse: () => dispatch(setFalse())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
