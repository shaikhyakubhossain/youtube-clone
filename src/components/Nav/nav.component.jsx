import React from 'react';
import styles from '../Nav/nav.module.css';
import { IconButton } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <div className={`${styles.mainContainer} ${styles.allContainers}`}>
        <div className={styles.leftContainer}>
          <IconButton><MenuIcon /></IconButton>
          <div></div>
        </div>
        <div className={styles.middleContainer}>
          
        </div>
        <div className={styles.rightContainer}>
          
        </div>
    </div>
  )
}

export default Nav;