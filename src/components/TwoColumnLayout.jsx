import PropTypes from 'prop-types';
import React from 'react';

const TwoColumnLayout = ({ leftContent, rightContent }) => (
  <div className="two-column-layout">
    <div className="two-column-layout__left">{leftContent}</div>
    <div className="two-column-layout__right">{rightContent}</div>
  </div>
);

TwoColumnLayout.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node
};

export default TwoColumnLayout;
