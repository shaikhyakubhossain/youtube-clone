import styles from './comment-card.module.css';



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
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* <div>replies</div> */}
            </div>
        </div>
    )
}

export default CommentCard;