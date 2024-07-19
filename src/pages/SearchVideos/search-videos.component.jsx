import React, { useEffect, useState } from 'react';
import styles from './search-videos.module.css'
import SearchedVideoCard from '../../components/SearchedVideoCard/searched-video-card.component';
import axios from 'axios';
import { localSearchVideos, globalSearchVideos } from '../../constants/url-list' ;
import { toggleURL } from '../../constants/utils';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFalse } from '../../redux';

const SearchVideos = (props) => {

  const param = useParams();
  const [searchQuery, setSearchQuery] = useState(param.search_query);
  const [urls, setUrls] = useState([localSearchVideos, globalSearchVideos]);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // console.log("hhhhhhiiiiii");
    props.setFalse();
    fetchData();
    
  }, []);

  const fetchData = () => {
    axios.get(toggleURL(urls) + searchQuery)
    .then((response) => {
      // console.log(response.data);
      // setApiData
      setApiData(response.data);
    })

  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchedVideoCardContainer}>
      {apiData ? apiData.map((item, index) => {
        return(
          <Link key={index} to={'/watch-video/' + item.videoId} style={{textDecoration: "none"}}>
          <SearchedVideoCard  title={item.title} thumbnail={item.thumbnails.medium.url} viewCount={item.viewCount} channelTitle={item.channelTitle} description={item.description}/>
          </Link>
        )
      }) :
      <h1>Loading</h1>}
      </div>
      
      
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFalse: () => dispatch(setFalse()),
  };
};


export default connect(null, mapDispatchToProps)(SearchVideos);