import React from 'react';
import styles from './searched-video-card.module.css';

const SearchedVideoCard = (props) => {
  return (
    <div className={`${styles.mainContainer} ${styles.flex}`}>
        <div className={`${styles.thumbnailContainer}`}><img src={props.thumbnail} alt="" /></div>
        <div className={`${styles.videoDetailContainer}`}>
            <div>{props.title}</div>
            <div className={`${styles.viewAndDateContainer} ${styles.flex}`}>
                <div>{props.viewCount} views</div>
                {/* <div></div> */}
            </div>
            <div className={`${styles.channelLogoAndTitleContainer} ${styles.flex}`}>
                <div className={`${styles.channelLogo}`}><img src={props.channelLogo} alt="" /></div>
                <div>{props.channelTitle}</div>
            </div>
            <div>{
              props.description.length >= 126 ? props.description.slice(0, 125) + "..." : props.description
            }</div>
        </div>
    </div>
  )
}

export default SearchedVideoCard;