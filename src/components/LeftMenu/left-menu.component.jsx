import React from 'react';
import styles from '../LeftMenu/left-menu.module.css';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function LeftMenu() {


  const toggleLeftMenu = () => {
    
  }

  return (
    <>
        <div className={styles.mainSectionExpand}>
          <div className={styles.row1}>
           <div className={styles.btnContainer}><Button sx={{ width:"100%", justifyContent:"left" }}><div><div><HomeIcon /></div><div className={styles.btnFontContainer}><div className={styles.btnFont}>Home</div></div></div></Button></div>
          </div>
          <div className={styles.row2}></div>
        </div>
        <div className={styles.exploreSection}></div>
        <div className={styles.moreFromYoutubeSection}></div>
    </>
  )
}

export default LeftMenu