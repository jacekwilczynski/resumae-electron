import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import List from '../List';
import Text from '../Text';
import TwoColumnLayout from '../TwoColumnLayout';

const getPlainBody = (text, list) => {
  if (text) return <Text>{text}</Text>;
  if (list) return <List items={list} />;
};

const Subsection = ({ company, list, location, post, text, time }) => (
  <div className="subsection">
    <TwoColumnLayout
      leftContent={
        <Fragment>
          <p className="subsection__time">{time.replace(/-/g, ' – ')}</p>
          <p className="subsection__location">{location}</p>
        </Fragment>
      }
      rightContent={
        <Fragment>
          <div className="subsection__header">
            <h3 className="subsection__post">{post}</h3>
            <h4 className="subsection__company">{company}</h4>
          </div>
          {getPlainBody(text, list)}
        </Fragment>
      }
    />
  </div>
);

Subsection.propTypes = {
  post: PropTypes.string,
  company: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  text: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string)
};

export default Subsection;
