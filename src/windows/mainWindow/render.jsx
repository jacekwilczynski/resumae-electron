import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const render = () => {
  const ResumeContainer = require('../../containers/ResumeContainer').default;
  const Resume = require('../../components/Resume').default;
  ReactDOM.render(
    <AppContainer>
      <ResumeContainer Display={Resume} />
    </AppContainer>,
    document.getElementById('App')
  );
};

render();
if (module.hot) {
  module.hot.accept(render);
}
