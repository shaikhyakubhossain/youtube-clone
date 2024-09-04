import styles from "./video-card.module.css";
import shortNumber from 'short-number';
import { videoDurationCalculator } from "../../constants/utils";



const VideoCard = (props) => {

    return (
            <>
              <div className={props.isMaximized ? styles.cardImgExpand : styles.cardImgMinimize} >
                <img src={ props.thumbnail } />
                <div className={styles.videoDuration}>{ videoDurationCalculator(props.duration) }</div>
              </div>
              <div className={styles.mainCardDetailContainerFlex}>
                <div className={styles.channelLogo}><img src={props.channelLogo} alt="" /></div>
                <div className={styles.cardDetailContainer}>
                    <div className={styles.videoTitle}>{props.title.length > 58 ? props.title.slice(0, 57) + "...": props.title }</div>
                    <div className={styles.channelTitle}>{props.channelTitle}</div>
                    <div className={styles.viewCount}>{ shortNumber(parseInt(props.viewCount))} views</div>
                </div>
              </div>
            </>
       )

}

export default VideoCard;