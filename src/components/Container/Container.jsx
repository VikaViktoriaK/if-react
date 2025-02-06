import React from "react";
import PropTypes from "prop-types";
import "./Container.css";
import classNames from "classnames";

export const Container = ({ children, className = "" }) => (
  <div className={classNames("container", className)}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
