import { useEffect, useState } from "react";
import styles from './home.module.css';
import { connect } from "react-redux";


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

  // console.log(props.isMaximized);

  return (
    <div className={props.isMaximized ? styles.mainHomeContainerExpand : styles.mainHomeContainerMinimize}>
      {apiData && apiData.items && apiData.items.map && apiData.items.map((item, index) => {
        console.log("apiData.lenght", apiData.items.lenght);
        if (apiData.items[index].snippet && apiData.items[index].snippet.thumbnails){
          return (
            <div key={index} className={styles.containerCard}>
                  <div className={styles.cardImg} ><img src={item.snippet.thumbnails.standard.url} /></div>
                  <div className={styles.videoTitle}>{item.snippet.title}</div>
                  <div className={styles.channelTitle}>{item.snippet.channelTitle}</div>
            </div>
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
