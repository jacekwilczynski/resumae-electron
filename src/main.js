import { app } from 'electron';
import { enableLiveReload } from 'electron-compile';
import installExtension, {
  REACT_DEVELOPER_TOOLS
} from 'electron-devtools-installer';
import createMainWindow from './windows/main';

let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

app.on('ready', () => {
  mainWindow = createMainWindow();
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
