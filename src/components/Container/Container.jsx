import './Container.css';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Container = ({ children, className = '' }) => (
  <div className={classNames('container', className)}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
