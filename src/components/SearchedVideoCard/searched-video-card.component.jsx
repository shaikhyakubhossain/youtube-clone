import React from 'react';
import styles from './searched-video-card.module.css'

function SearchedVideoCard(props) {
  return (
    <div className={`${styles.mainContainer} ${styles.flex}`}>
        <div><img src={props.thumbnail} alt="" /></div>
        <div>
            <div>{props.title}</div>
            <div className={`${styles.viewAndDateContainer} ${styles.flex}`}>
                <div>{props.viewCount} views</div>
                {/* <div></div> */}
            </div>
            <div className={`${styles.channelLogoAndTitleContainer} ${styles.flex}`}>
                {/* <div>{props.channelLogo}</div> */}
                <div>{props.channelTitle}</div>
            </div>
            <div>{props.description}</div>
        </div>
    </div>
  )
}

export default SearchedVideoCard