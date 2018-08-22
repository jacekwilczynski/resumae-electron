import { applyMiddleware } from 'redux';
import { createRendererStore } from 'redux-electron';
import { logger } from 'redux-logger';

const create = () => createRendererStore(applyMiddleware(logger));

export default create;
