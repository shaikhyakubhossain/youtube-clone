import { useEffect, useState } from "react";
import styles from './watch-video.module.css';
import VideoPlayer from '../../components/VideoPlayer/video-player.component';
import { useParams } from "react-router-dom";

const WatchVideo = (props) => {

    const params = useParams();


    useEffect((() => {
        console.log(params.id);
    }),[params]);


    return (
        <div className={styles.mainContainer}>
            <VideoPlayer embedId={params ? params.id : null} className={styles.videoPlayer} ></VideoPlayer>
        </div>
    )
}

export default WatchVideo;