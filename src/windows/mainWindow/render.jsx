import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import createStore from './store';

const render = () => {
  const store = createStore();
  const Resume = require('../../components/Resume').default;
  const ResumeContainer = require('../../containers/ResumeContainer').default(
    Resume
  );
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ResumeContainer />
      </Provider>
    </AppContainer>,
    document.getElementById('App')
  );
};

render();
if (module.hot) {
  module.hot.accept(render);
}
