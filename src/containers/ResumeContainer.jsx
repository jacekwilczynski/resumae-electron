import { ipcRenderer } from 'electron';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ResumeContainer extends Component {
  static propTypes = {
    Display: PropTypes.func.isRequired
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
    const { Display } = this.props;
    return <Display {...this.state.data} />;
  }
}

export default ResumeContainer;
