import React,{useEffect} from "react";
import Backdrop from "@mui/material/Backdrop";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  backdrop: {
    position: "fixed",
    zIndex: 1501,
    color: "#fff",
  },
}));

const Loader = () => {
  const classes = useStyles();
  const loading = useSelector((state) => state.loader);

  
    console.log("At laoderSec: ", loading);
  const bool = loading > 0 ? true : false;

  return (
    <Backdrop className={classes.backdrop} open={bool}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
