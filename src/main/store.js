import { createMainStore } from 'redux-electron';
import reducer from '../reducer';

const create = () => createMainStore(reducer);

export default create;
