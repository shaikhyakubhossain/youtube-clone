import styles from './top-loading.module.css';
import { connect } from 'react-redux';

const TopLoading = (props) => {
    return (
        <div className={styles.mainContainer} style={{width: props.showLoading ? "80%" : "0%", transition: "width 2s"}}>
            <div className={styles.loadingContainer}>
                <div className={styles.loadingBar}></div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      showLoading: state.showLoading
    }
  }

export default connect(mapStateToProps, null)(TopLoading);
