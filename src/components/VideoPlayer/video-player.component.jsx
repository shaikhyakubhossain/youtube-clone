import React, { useEffect } from "react";
import PropsTypes from "prop-types";
import styles from "./video-player..module.css";

const VideoPlayer = ({ embedId }) => {

  // useEffect(() => {
  //   player = new YT.Player('YTIframeAPI', {
  //     events: {
  //       'onReady': onPlayerReady,
  //       'onStateChange': onPlayerStateChange
  //     }
  // });
  // }, []);

  // const onPlayerReady = () => {

  // }  

  return (
    <div className={styles.videoPlayer}>
      <iframe
        id="YTIframeAPI"
        src={"https://www.youtube.com/embed/" + embedId + "?autoplay=1"}
        width="853"
        height="480"
        
      ></iframe>
    </div>
  );
};

VideoPlayer.propsTypes = {
  embedId: PropsTypes.string.isRequired,
};

export default VideoPlayer;
