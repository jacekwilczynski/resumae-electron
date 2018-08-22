import initializeElectron from './main/initializeElectron';
import createStore from './main/store';

const windows = {};

initializeElectron(windows);

createStore();
