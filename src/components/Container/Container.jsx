import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { useContainerStyles } from './Container.styles';

export const Container = ({ children, className = '' }) => {
  const classes = useContainerStyles();

  return (
    <div className={classNames(classes.container, className)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
