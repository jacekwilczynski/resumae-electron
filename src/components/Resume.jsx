import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Header from './resume/Header';
import Section from './resume/Section';

const Resume = ({ name, contactInfo, sections }) => (
  <Fragment>
    <Header caption={name} list={contactInfo} />
    {sections.map(section => (
      <Section key={section.title} {...section} />
    ))}
  </Fragment>
);

Resume.propTypes = {
  name: PropTypes.string.isRequired,
  contactInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape(Section.propTypes)).isRequired
};

export default Resume;
