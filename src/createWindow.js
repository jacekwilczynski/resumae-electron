import { BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

const getUrl = src =>
  url.format({
    protocol: 'file:',
    slashes: true,
    pathname: path.join(__dirname, src)
  });

const createWindow = ({ src, options, onClosed }) => {
  const win = new BrowserWindow(options);
  win.loadURL(getUrl(src));
  win.on('closed', onClosed);
  return win;
};

export default createWindow;
