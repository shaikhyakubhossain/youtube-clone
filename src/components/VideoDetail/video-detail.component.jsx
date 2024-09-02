import {useState, useRef} from "react";
import styles from './video-detail.module.css';
import { Button } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { subContainer1RightPart } from "../../constants/btn-list";
import CommentCard from "../../components/CommentCard/comment-card.component";
import {subscribeBtnSX, subContainer1RightPartStaticBtnSX} from "../../constants/custom-sx-for-mui";
import shortNumber from "short-number";


const VideoDetail = (props) => {

  const descriptionRef = useRef(null);
  const descriptionShowLessBtnRef = useRef(null);
  const [shouldToggleDescriptionWindow, SetShouldToggleDescriptionWindow] = useState(true);

  const descriptionStyle = () => {
    // console.log("descriptionStyle");
    
    if (shouldToggleDescriptionWindow) {
      // console.log("if");

      descriptionRef.current.className = styles.descriptionExpand;
      descriptionShowLessBtnRef.current.className =
        styles.descriptionShowLessBtnEnabled;
      descriptionShowLessBtnRef.current.parentNode.className = styles.subContainer2MainExpand;
        SetShouldToggleDescriptionWindow(false);
    }
    
  };

  const descriptionShowLessBtnStyle = () => {
    if(!shouldToggleDescriptionWindow){
    descriptionRef.current.className = styles.descriptionMinimize;
    descriptionShowLessBtnRef.current.className =
      styles.descriptionShowLessBtnDisabled;
      descriptionShowLessBtnRef.current.parentNode.className = styles.subContainer2MainMinimize;
      SetShouldToggleDescriptionWindow(true);
    }
    
  };

    return (
        <>
          <div className={styles.title}>{props && props.title}</div>
          <div className={styles.subContainer1Main}>
            <div className={styles.subContainer1LeftPart}>
              <div className={styles.channelLogo}><img src={props.channelLogo} alt="" /></div>
              <div className={styles.channelTitleAndSubscribersCountContainer}>
                <div className={styles.channelTitle}>
                  {props.channelTitle}
                </div>
                {/* <div className={styles.subscribersCount}>{} subscribers</div> */}
              </div>
              <div className={styles.subscribeBtn}>
                <Button variant="text" sx={subscribeBtnSX}>
                  Subscribe
                </Button>
              </div>
            </div>
            <div className={styles.subContainer1RightPart}>
              <div className={styles.rightPartBtn}>
                <Button
                  startIcon={<ThumbUpOutlinedIcon />}
                  sx={{
                    ...subscribeBtnSX,
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                    ":hover": {
                      background: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  {shortNumber(parseInt(props.likeCount))}
                </Button>
              </div>
              <div className={styles.rightPartBtn}>
                <Button
                  startIcon={<ThumbDownOutlinedIcon />}
                  sx={{
                    ...subscribeBtnSX,
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                    ":hover": {
                      background: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                />
              </div>
              {subContainer1RightPart
                ? subContainer1RightPart.map((item, index) => {
                    return (
                      <div className={styles.rightPartBtnStatic}>
                        <Button className={ item.value === "Download" ? `${styles.downloadBtn} ${styles.subContainer1RightPartBtns}` : styles.subContainer1RightPartBtns}
                          startIcon={item.logo}
                          sx={subContainer1RightPartStaticBtnSX}
                        >
                          {item.value ? item.value : null}
                        </Button>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div
            className={styles.subContainer2MainMinimize}
            onClick={() => {
              descriptionStyle();
            }}
          >
            <div className={styles.viewCount}>
              {props.viewCount} views
            </div>
            <div className={styles.descriptionMinimize} ref={descriptionRef}>
              {props.description}
            </div>
            <div
              className={styles.descriptionShowLessBtnDisabled}
              onClick={descriptionShowLessBtnStyle}
              ref={descriptionShowLessBtnRef}
            >
              <Button>Show less</Button>
            </div>
          </div>
          <div className={styles.subContainer3}>
            <div className={styles.commentCount}>{props.commentCount} Comments</div>
            <div className={styles.commentListContainer}>
            {
              props.commentList.map((item, index) => {
                return <CommentCard key={index} commentMessage={item.snippet.topLevelComment.snippet.textOriginal} commentAuthorName={item.snippet.topLevelComment.snippet.authorDisplayName} commentAuthorChannelLogo={item.snippet.topLevelComment.snippet.authorProfileImageUrl} commentAuthorChannelUrl={item.snippet.topLevelComment.snippet.authorChannelUrl} commentMessageLikeCount={item.snippet.topLevelComment.snippet.likeCount} />
              })
            }
            </div>
          </div>
        </>
      );
}

export default VideoDetail;