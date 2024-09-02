const subscribeBtnSX = {
    fontSize: "14px",
    fontWeight: "500",
    color: "black",
    height: "36px",
    background: "rgba(255, 255, 255, 1)",
    borderRadius: "18px",
    padding: "0 16px",
    ":hover": {
      background: "rgba(255, 255, 255, 0.8)",
    },
  };

const subContainer1RightPartStaticBtnSX = {
    ...subscribeBtnSX,
    color: "white",
    background: "rgba(255, 255, 255, 0.1)",
    ":hover": {
      background: "rgba(255, 255, 255, 0.2)",
    }
  };

  const likeBtnSX = {
    ...subscribeBtnSX,
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    ":hover": {
      background: "rgba(255, 255, 255, 0.2)",
    },
  }

  const dislikeBtnSX = {
    ...subscribeBtnSX,
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    ":hover": {
      background: "rgba(255, 255, 255, 0.2)",
    },
  }

  export {subscribeBtnSX, subContainer1RightPartStaticBtnSX, likeBtnSX, dislikeBtnSX}