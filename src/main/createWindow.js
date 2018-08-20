import { BrowserWindow, Menu } from 'electron';
import * as url from 'url';

const getUrl = src =>
  url.format({
    protocol: 'file:',
    slashes: true,
    pathname: src
  });

const createWindow = ({ src, options, menuTemplate }) => {
  const win = new BrowserWindow(options);
  win.loadURL(getUrl(src));
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
  return win;
};

export default createWindow;
