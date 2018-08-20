import { BrowserWindow, Menu } from 'electron';
import * as path from 'path';
import * as url from 'url';
import menuTemplate from './mainWindow/menuTemplate';
import showOpenFileDialog from './mainWindow/showOpenFileDialog';

const mainWindow = () => {
  const win = new BrowserWindow({});
  win.loadURL(
    url.format({
      protocol: 'file:',
      slashes: true,
      pathname: path.join(__dirname, 'mainWindow', 'mainWindow.html')
    })
  );
  const menu = Menu.buildFromTemplate(
    menuTemplate({
      onFileOpenClick: () => {
        showOpenFileDialog(win);
      },
      runningOnMac: process.platform === 'darwin'
    })
  );
  Menu.setApplicationMenu(menu);
};

export default mainWindow;
