import React from 'react';
import styles from './searched-video-card.module.css'
import { Skeleton } from '@mui/material';

const SearchedVideoCardLoading = (props) => {

  const customStyles = {
  }

  return (
    <div className={`${styles.mainContainer} ${styles.flex}`}>
        <div className={`${styles.thumbnailContainer}`} style={customStyles}><Skeleton variant="rectangular" width={"100%"} height={"100%"} /></div>
        <div className={`${styles.videoDetailContainer}`}>
          <div className={`${styles.title}}`}><Skeleton height={"40px"} /></div>
          <div className={`${styles.channelLogo}}`}><Skeleton variant='circular' width={"30px"} height={"30px"} /></div>
          <div className={`${styles.description1}}`}><Skeleton width={"70%"} height={"40px"} /></div>
          <div className={`${styles.description2}}`}><Skeleton width={"30%"} height={"40px"} /></div>
        </div>
    </div>
  )
}

export default SearchedVideoCardLoading;