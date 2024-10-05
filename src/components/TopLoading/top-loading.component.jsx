import styles from './top-loading.module.css';
import { connect } from 'react-redux';

const TopLoading = (props) => {
    console.log("props", props);
    return (
        <div className={styles.mainContainer} style={{width: props.showLoading ? "80%" : "0%", transition: props.showLoading ? "width 2s" : "none"}}></div>
    );
}

const mapStateToProps = (state) => {
    return {
      showLoading: state.topLoading.showLoading
    }
  }

export default connect(mapStateToProps, null)(TopLoading);
