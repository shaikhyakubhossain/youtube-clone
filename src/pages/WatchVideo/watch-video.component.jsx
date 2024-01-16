import { useEffect, useState } from "react";
import styles from './watch-video.module.css';
import VideoPlayer from '../../components/VideoPlayer/video-player.component';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setFalse } from "../../redux/index";

const WatchVideo = (props) => {

    const params = useParams();


    useEffect((() => {
        props.setFalse();
        // console.log(params);
    }),[params]);


    return (
        <div className={styles.mainContainer}>
            <VideoPlayer embedId={params ? params.id : null} className={styles.videoPlayer} ></VideoPlayer>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFalse: () => dispatch(setFalse())
    }
  }

export default connect(null, mapDispatchToProps)(WatchVideo);