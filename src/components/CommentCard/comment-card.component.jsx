import styles from './comment-card.module.css';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { IconButton } from "@mui/material";





const CommentCard = (props) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}><img src={props.commentAuthorChannelLogo} alt="" /></div>
            <div>
                <div>
                    <div>{props.commentAuthorName}</div>
                    <div></div>
                </div>
                <div>{props.commentMessage}</div>
                <div className={styles.reactionContainer}>
                    <div><IconButton><ThumbUpOutlinedIcon /></IconButton> {props.commentMessageLikeCount > 0 ? props.commentMessageLikeCount : null}</div>
                    <div><IconButton><ThumbDownOutlinedIcon /></IconButton></div>
                    <div></div>
                    <div></div>
                </div>
                {/* <div>replies</div> */}
            </div>
        </div>
    )
}

export default CommentCard;