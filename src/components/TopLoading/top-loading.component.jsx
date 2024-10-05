import styles from './top-loading.module.css';

const TopLoading = () => {
    return (
        <div className={styles.mainContainer} style={{width: true ? "80%" : "0%", transition: "width 2s"}}>
            <div className={styles.loadingContainer}>
                <div className={styles.loadingBar}></div>
            </div>
        </div>
    );
}

export default TopLoading;
