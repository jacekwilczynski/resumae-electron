import { app } from 'electron';
import { enableLiveReload } from 'electron-compile';
import installExtension, {
  REACT_DEVELOPER_TOOLS
} from 'electron-devtools-installer';
import createMainWindow from '../windows/mainWindow';

function setupMainWindow(windows) {
  windows.main = createMainWindow();
  windows.main.on('closed', () => {
    windows.main = null;
  });
}

function initializeElectron(windows) {
  const isDevMode = process.execPath.match(/[\\/]electron/);

  if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

  app.on('ready', () => {
    setupMainWindow(windows);
    if (isDevMode) installExtension(REACT_DEVELOPER_TOOLS);
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (windows.main === null) {
      setupMainWindow(windows);
    }
  });
}

export default initializeElectron;
