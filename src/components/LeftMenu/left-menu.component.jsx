import React from 'react';
import styles from '../LeftMenu/left-menu.module.css';

function LeftMenu() {
  return (
    <div>
        <div className={styles.mainSection}></div>
        <div className={styles.exploreSection}></div>
        <div className={styles.moreFromYoutubeSection}></div>
    </div>
  )
}

export default LeftMenu