import React from "react";
import loadingImg from "../../assets/images/loading.gif";

export const Loader = ({ loading, children }) => {
  if (loading) {
    return (
      <div>
        <img src={loadingImg} alt="Loading..." />
      </div>
    );
  }
  return children;
};
