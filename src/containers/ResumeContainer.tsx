import { ipcRenderer } from 'electron';
import * as React from 'react';
import { ResumeData } from '../types';

interface ResumeContainerProps {
  Resume: React.ComponentClass<ResumeData>;
}

interface ResumeContainerState {
  data: ResumeData;
}

class ResumeContainer extends React.Component<
  ResumeContainerProps,
  ResumeContainerState
> {
  state = {
    data: {
      name: 'Nobody',
      contactInfo: ['unreachable'],
      sections: []
    }
  };

  componentDidMount() {
    ipcRenderer.on('resume:load', (_e: Electron.Event, data: ResumeData) => {
      this.setState({ data });
    });
  }

  render() {
    const { Resume } = this.props;
    return <Resume {...this.state.data} />;
  }
}

export default ResumeContainer;
