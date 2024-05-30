import React, { useEffect } from "react";
import PropsTypes from "prop-types";
import styles from "./video-player..module.css";

const VideoPlayer = (props) => {

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
    <div className={props.className}>
      <iframe className={styles.iframe1}
        id="YTIframeAPI"
        src={"https://www.youtube.com/embed/" + props.embedId + "?autoplay=1"}
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  );
};

VideoPlayer.propsTypes = {
  embedId: PropsTypes.string.isRequired,
};

export default VideoPlayer;
