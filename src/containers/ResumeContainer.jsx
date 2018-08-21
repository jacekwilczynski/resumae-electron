import { ipcRenderer } from 'electron';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ResumeContainer extends Component {
  static propTypes = {
    Resume: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: 'Nobody',
        contactInfo: ['unreachable'],
        sections: []
      }
    };
    ipcRenderer.on('resume:load', (e, data) => {
      this.setState({ data });
    });
  }

  render() {
    const { Resume } = this.props;
    return <Resume {...this.state.data} />;
  }
}

export default ResumeContainer;
