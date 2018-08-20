import * as path from 'path';
import createWindow from '../main/createWindow';
import menuTemplate from './main/menuTemplate';

const createMainWindow = () =>
  createWindow({
    src: path.join(__dirname, 'main', 'page.html'),
    menuTemplate: menuTemplate({
      onFileOpenClick: () => {},
      runningOnMac: process.platform === 'darwin'
    })
  });

export default createMainWindow;
