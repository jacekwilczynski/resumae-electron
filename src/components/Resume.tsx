import * as React from 'react';
import Header from './resume/Header';
import { ResumeData } from '../types';

const Resume: React.StatelessComponent<ResumeData> = ({
  name,
  contactInfo,
  sections
}) => (
  <React.Fragment>
    <Header caption={name} list={contactInfo} />
    {sections.toString()}
  </React.Fragment>
);

export default Resume;
