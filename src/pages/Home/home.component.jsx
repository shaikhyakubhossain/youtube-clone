import { useEffect, useState } from "react";
import styles from './home.module.css';
import { connect } from "react-redux";


const Home = (props) => {

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [apiData]);

  const fetchData = async () => {
    const response = await fetch('');
    const json = await response.json();

    if(response.ok){
      setApiData(json);
    }
  };

  // console.log(props.isMaximized);

  return (
    <div className={props.isMaximized ? styles.mainHomeContainerExpand : styles.mainHomeContainerMinimize}>
      {apiData && apiData.map((item) => {
       return (
        <div key={item.id}>
        <div >
          // json data here...
          </div>
        </div>
       );
        
      
        
      })}
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    isMaximized: state.isMaximized
  }

}

export default connect(mapStateToProps)(Home);
