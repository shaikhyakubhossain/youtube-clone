import { useEffect, useState } from "react";
import styles from './home.module.css';
import { connect } from "react-redux";
import shortNumber from 'short-number';
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import { setFalse } from '../../redux/index';
import axios from "axios";
import { globalReactJSVideos, localReactJSVideos } from "../../constants/url-list";
import { checkIfMaxResAvailableInAllItems, toggleURL, videoDurationCalculator } from "../../constants/utils";
import { dummyArrayForLoading } from "../../constants/utils";
const Home = (props) => {
  const [apiData, setApiData] = useState(null);
  const [urls, setUrl] = useState([globalReactJSVideos, localReactJSVideos])
  useEffect(() => {
    props.setFalse();
    apiData === null  && fetchData();
    console.log(apiData);
  }, [apiData]);

 
  const fetchData = () => {
    axios.get(toggleURL(urls))
    
    .then((response) => {
      const json = response.data;
      if(response.status === 200){
        setApiData(json);
    }
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
      { apiData && apiData.map ? apiData.map((item, index) => {
        // console.log("apiData.lenght", apiData.items.lenght);
        // if (apiData.items[index].snippet && apiData.items[index].snippet.thumbnails){
          return (
            <Link key={index} to={"/watch-video/" + item.videoId} className={styles.containerCard}>
                  <div className={props.isMaximized ? styles.cardImgExpand : styles.cardImgMinimize} >
                    <img src={ checkIfMaxResAvailableInAllItems(apiData) ? item.thumbnails.maxres.url : item.thumbnails.medium.url } />
                    <div className={styles.videoDuration}>{ videoDurationCalculator(item.duration) }</div>
                  </div>
                  <div className={styles.mainCardDetailContainerFlex}>
                  <div className={styles.channelLogo}></div>
                  <div className={styles.cardDetailContainer}>
                  <div className={styles.videoTitle}>{item.title.length > 58 ? item.title.slice(0, 57) + "...": item.title }</div>
                  <div className={styles.channelTitle}>{item.channelTitle}</div>
                  <div className={styles.viewCount}>{ shortNumber(parseInt(item.viewCount))} views</div>
                  </div>
                  </div>
            </Link>
           ); 
        // }
      }) :  dummyArrayForLoading.map((items, index) => {
        return (
          <div key={index} className={styles.containerCard}>
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
