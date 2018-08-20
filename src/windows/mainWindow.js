import { BrowserWindow, Menu } from 'electron';
import * as path from 'path';
import * as url from 'url';
import createMenuTemplate from './mainWindow/menuTemplate';

const create = () => {
  const win = new BrowserWindow({});
  win.loadURL(
    url.format({
      protocol: 'file:',
      slashes: true,
      pathname: path.join(__dirname, 'mainWindow', 'page.html')
    })
  );
  const menu = Menu.buildFromTemplate(
    createMenuTemplate({ win, runningOnMac: process.platform === 'darwin' })
  );
  Menu.setApplicationMenu(menu);
  return win;
};

export default create;
