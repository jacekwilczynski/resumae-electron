import { dialog } from 'electron';
import * as path from 'path';
import createWindow from '../main/createWindow';
import loadResume from './mainWindow/loadResume';
import menuTemplate from './mainWindow/menuTemplate';

const createMainWindow = () => {
  const win = createWindow({
    src: path.join(__dirname, 'mainWindow', 'mainWindow.html'),
    menuTemplate: menuTemplate({
      onFileOpenClick: () => {
        dialog.showOpenDialog(
          win,
          {
            properties: ['openFile']
          },
          filePaths => {
            loadResume(win, filePaths[0]);
          }
        );
      },
      runningOnMac: process.platform === 'darwin'
    })
  });
  return win;
};

export default createMainWindow;
