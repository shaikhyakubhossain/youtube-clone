import React, { useEffect, useState } from 'react';
import styles from './search-videos.module.css'
import SearchedVideoCard from '../../components/SearchedVideoCard/searched-video-card.component';
import axios from 'axios';
import { localSearchVideos, globalSearchVideos } from '../../constants/url-list' ;
import { toggleURL } from '../../constants/utils';
import { useParams, Link } from 'react-router-dom';

const SearchVideos = () => {

  const param = useParams();
  const [searchQuery, setSearchQuery] = useState(param.search_query);
  const [urls, setUrls] = useState([localSearchVideos, globalSearchVideos]);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // console.log("hhhhhhiiiiii");
    fetchData();
    
  }, []);

  const fetchData = () => {
    axios.get(toggleURL(urls) + searchQuery)
    .then((response) => {
      console.log(response.data);
      // setApiData
      setApiData(response.data, console.log(response.data));
    })

  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchedVideoCardContainer}>
      {apiData ? apiData.map((item, index) => {
        return(
          <Link to={'/watch-video/' + item.videoId} style={{textDecoration: "none"}}>
          <SearchedVideoCard key={index} title={item.title} thumbnail={item.thumbnails.medium.url} viewCount={item.viewCount} channelTitle={item.channelTitle} description={item.description}/>
          </Link>
        )
      }) :
      <h1>Loading</h1>}
      </div>
      
      
    </div>
  )
}

export default SearchVideos;