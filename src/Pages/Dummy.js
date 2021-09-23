import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Main from "./Main";

const Dummy = () => {
  const history = useHistory();
  // console.log("from route", params);
  const { artist } = useParams();
  if (!artist) {
    history.push("/fritz-bleichert");
  }
  return (
    <div>
      <Main />
    </div>
  );
};

export default Dummy;
