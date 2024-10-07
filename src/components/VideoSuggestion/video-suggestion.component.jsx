import styles from './video-suggestion.module.css';
import shortNumber from "short-number";
import { Link } from 'react-router-dom';
import { videoDurationCalculator } from "../../constants/utils";



const VideoSuggestion = (props) => {
    return (
        <div className={styles.videoSuggestionItemContainer}>
          <div className={styles.videoSuggestionThumbnail}>
            <img src={props.thumbnail} />
            <div className={styles.videoDuration}>{ videoDurationCalculator(props.duration) }</div>
          </div>
          <div className={styles.videoSuggestionDetailContainer}>
          {props.title.length >= 58 ? <div className={styles.videoSuggestionTitle}>{props.title.slice(0, 57)}...</div> : <div className={styles.videoSuggestionTitle}>{props.title}</div>}
          <div className={styles.videoSuggestionChannelName}>{props.channelTitle}</div>
          <div className={styles.videoSuggestionViewAndTimeContainer} >
            <div>{shortNumber(parseInt(props.viewCount))} views</div>
            {/* <div>Video Upload Time here</div> */}
          </div>
          </div>
        </div>
      )
}

export default VideoSuggestion;