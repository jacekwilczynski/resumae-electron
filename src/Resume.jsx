import PropTypes from 'prop-types';
import React from 'react';
import Header from './components/Header';

const Resume = ({ name, contactInfo, sections }) => (
  <div>
    <Header caption={name} list={contactInfo} />
    {sections.toString()}
  </div>
);

Resume.propTypes = {
  name: PropTypes.string.isRequired,
  contactInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Resume;
