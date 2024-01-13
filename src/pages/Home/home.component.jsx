import { useEffect, useState } from "react";
import styles from './home.module.css';
import { connect } from "react-redux";
import shortNumber from 'short-number';
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';


const Home = (props) => {

  const [apiData, setApiData] = useState(null);
  const [dummyArrayForLoading, setDummyArrayForLoading] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

  useEffect(() => {
    apiData === null  && fetchData();
  }, [apiData]);

  const fetchData = async () => {
    const response = await fetch('https://youtube-clone-backend-u2zy.onrender.com/mostPopularVideos');
    const json = await response.json();

    if(response.ok){
      setApiData(json);
    }
  };


  const loadMuiSkeletonForVideo = () => {
    
      return (
        <div className={styles.containerCard}>
                  <div className={props.isMaximized ? styles.cardImgExpand : styles.cardImgMinimize} > <Skeleton sx={{background: "grey"}} variant="rounded" width={"100%"} height={"100%"}/> </div>
          <div className={styles.mainCardDetailContainerFlex}>
          <Skeleton sx={{background: "grey", margin: "15px 4px 4px 4px"}} variant="circular" width={40} height={40}/>
          <div className={styles.cardDetailContainer}>
          <Skeleton sx={{background: "grey", margin: "4px"}} variant="text" width={"250px"} height={40}/>

          <Skeleton sx={{background: "grey", margin: "4px"}} variant="text" width={"150px"} height={40}/>
          </div>
          </div>
          
        </div>

      )
  }

  return (
    <div className={props.isMaximized ? styles.mainHomeContainerExpand : styles.mainHomeContainerMinimize}>
      { apiData && apiData.items && apiData.items.map ? apiData.items.map((item, index) => {
        console.log("apiData.lenght", apiData.items.lenght);
        if (apiData.items[index].snippet && apiData.items[index].snippet.thumbnails){
          return (
            <Link to={"/watch-video/" + item.id} key={index} className={styles.containerCard}>
                  <div className={props.isMaximized ? styles.cardImgExpand : styles.cardImgMinimize} ><img src={item.snippet.thumbnails.standard.url} /></div>
                  <div className={styles.mainCardDetailContainerFlex}>
                  <div className={styles.channelLogo}></div>
                  <div className={styles.cardDetailContainer}>
                  <div className={styles.videoTitle}>{item.snippet.title}</div>
                  <div className={styles.channelTitle}>{item.snippet.channelTitle}</div>
                  <div className={styles.viewCount}>{ shortNumber(parseInt(item.statistics.viewCount))} views</div>
                  </div>
                  </div>
            </Link>
           ); 
        }
      }) :  dummyArrayForLoading.map(() => {
        return loadMuiSkeletonForVideo();
      })
      
      }
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    isMaximized: state.isMaximized
  }

}

export default connect(mapStateToProps)(Home);
