import { ipcRenderer } from 'electron';
import React, { Component } from 'react';
import Resume from '../../Resume';

class MainWindow extends Component {
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
    return <Resume {...this.state.data} />;
  }
}

export default MainWindow;
