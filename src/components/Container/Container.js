import React from "react";
import "./Container.css";
import classNames from "classnames";

// eslint-disable-next-line react/prop-types
export const Container = ({ children, className }) => (
  <div className={classNames("container", className)}>{children}</div>
);
