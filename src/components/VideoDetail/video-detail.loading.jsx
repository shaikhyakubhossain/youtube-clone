import Skeleton from '@mui/material/Skeleton';
import styles from './video-detail.module.css';


const VideoDetailLoading = () => {
    const marginLR = {
        margin: "0 4px 0 4px"
      } 
  
    const marginTB = {
        margin: "4px 0 4px 0"
      }
      return (
        <>
        <Skeleton variant="rounded" width={410} height={20} sx={marginTB}/>
        <div className={styles.videoDetailFlex1} >
        <Skeleton variant="rounded" width={210} height={20} sx={marginTB}/>
        <div>
        <Skeleton variant="circular" width={20} height={20} sx={marginLR}/>
        <Skeleton variant="circular" width={20} height={20} sx={marginLR}/>
        <Skeleton variant="circular" width={20} height={20} sx={marginLR}/>
        <Skeleton variant="circular" width={20} height={20} sx={marginLR}/>
        <Skeleton variant="circular" width={20} height={20} sx={marginLR}/>
        </div>
        </div>
        <div className={styles.videoDetailLoadingFlex}>
          <div>
          <Skeleton variant="circular" width={60} height={60} sx={marginLR}/>
          <div >
        <Skeleton variant="rounded" width={210} height={20} sx={marginTB}/>
        <Skeleton variant="rounded" width={210} height={20} sx={marginTB}/>
          </div>
          </div>
          <div className={styles.subscribeBtnSkeleton}>
            <Skeleton variant="rounded" width={150} height={40} sx={marginTB}/>
          </div>
        </div>
        </>
      );
}

export default VideoDetailLoading;