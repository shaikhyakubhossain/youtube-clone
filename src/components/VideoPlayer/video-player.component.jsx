import React from "react";
import PropsTypes from "prop-types";
import styles from "./video-player..module.css";

const VideoPlayer = ({ embedId }) => {
  return (
    <div className={styles.videoPlayer}>
      <iframe
        src={"https://www.youtube.com/embed/" + embedId}
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
