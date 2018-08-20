import { dialog } from 'electron';
import * as fs from 'fs';
import * as path from 'path';
import createWindow from '../main/createWindow';
import menuTemplate from './mainWindow/menuTemplate';

const createMainWindow = ({ loadResume }) => {
  const win = createWindow({
    src: path.join(__dirname, 'mainWindow', 'page.html'),
    menuTemplate: menuTemplate({
      onFileOpenClick: () => {
        dialog.showOpenDialog(
          win,
          {
            properties: ['openFile']
          },
          filePaths => {
            loadResume(fs.readFileSync(filePaths[0], 'utf-8'));
          }
        );
      },
      runningOnMac: process.platform === 'darwin'
    })
  });
  return win;
};

export default createMainWindow;
