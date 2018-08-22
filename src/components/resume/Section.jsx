import PropTypes from 'prop-types';
import React from 'react';
import List from '../List';
import Text from '../Text';
import TwoColumnLayout from '../TwoColumnLayout';
import Subsection from './Subsection';

const getPlainBody = (text, list) => {
  if (text) return <Text>{text}</Text>;
  if (list) return <List items={list} />;
};

const serializeSubsection = ({ post, company, time, place }) =>
  post + company + time + place;

const getBody = (subsections, text, list) => {
  if (subsections)
    return subsections.map(subsection => (
      <Subsection key={serializeSubsection(subsection)} {...subsection} />
    ));
  return <TwoColumnLayout rightContent={getPlainBody(text, list)} />;
};

const Section = ({ title, text, list, subsections }) => (
  <section className="section">
    <h2 className="section__title">{title}</h2>
    <div className="section__body">{getBody(subsections, text, list)}</div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  subsections: PropTypes.arrayOf(PropTypes.shape(Subsection.propTypes))
};

export default Section;
