import PropTypes from 'prop-types';
import React from 'react';

import loadingImg from '../../assets/images/load.gif';

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

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
