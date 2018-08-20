import { app } from 'electron';
import { enableLiveReload } from 'electron-compile';
import installExtension, {
  REACT_DEVELOPER_TOOLS
} from 'electron-devtools-installer';
import * as yaml from 'js-yaml';
import createMainWindow from './windows/mainWindow';

let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

app.on('ready', () => {
  mainWindow = createMainWindow({
    loadResume: data => {
      mainWindow.webContents.send('resume:load', yaml.safeLoad(data));
    }
  });
  if (isDevMode) installExtension(REACT_DEVELOPER_TOOLS);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});
