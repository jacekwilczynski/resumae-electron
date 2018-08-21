import PropTypes from 'prop-types';
import React from 'react';

const Text = ({ children }) => <p className="text">{children}</p>;

Text.propTypes = {
  children: PropTypes.node
};

export default Text;
