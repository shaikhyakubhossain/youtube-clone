import { useEffect, useState } from "react";
import styles from './home.module.css';
import { connect } from "react-redux";
import numberShortener from 'https://cdn.skypack.dev/number-shortener';
import { Link } from "react-router-dom";


const Home = (props) => {

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    apiData === null  && fetchData();
  }, [apiData]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:4000/mostPopularVideos');
    const json = await response.json();

    if(response.ok){
      setApiData(json);
    }
  };



  return (
    <div className={props.isMaximized ? styles.mainHomeContainerExpand : styles.mainHomeContainerMinimize}>
      {apiData && apiData.items && apiData.items.map && apiData.items.map((item, index) => {
        console.log("apiData.lenght", apiData.items.lenght);
        if (apiData.items[index].snippet && apiData.items[index].snippet.thumbnails){
          return (
            <Link to="/watch-video" key={index} className={styles.containerCard}>
                  <div className={props.isMaximized ? styles.cardImgExpand : styles.cardImgMinimize} ><img src={item.snippet.thumbnails.standard.url} /></div>
                  <div className={styles.mainCardDetailContainerFlex}>
                    <div className={styles.channelLogo}></div>
                  <div className={styles.cardDetailContainer}>
                  <div className={styles.videoTitle}>{item.snippet.title}</div>
                  <div className={styles.channelTitle}>{item.snippet.channelTitle}</div>
                  <div className={styles.viewCount}>{ numberShortener(item.statistics.viewCount)} views</div>
                  </div>
                  </div>
            </Link>
           ); 
        }
       
      })}
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    isMaximized: state.isMaximized
  }

}

export default connect(mapStateToProps)(Home);
