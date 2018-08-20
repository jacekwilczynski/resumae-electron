import * as path from 'path';
import createWindow from '../main/createWindow';
import menuTemplate from './mainWindow/menuTemplate';

const createMainWindow = () =>
  createWindow({
    src: path.join(__dirname, 'mainWindow', 'page.html'),
    menuTemplate: menuTemplate({
      onFileOpenClick: () => {},
      runningOnMac: process.platform === 'darwin'
    })
  });

export default createMainWindow;
