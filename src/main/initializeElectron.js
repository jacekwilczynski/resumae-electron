import { app } from 'electron';
import { enableLiveReload } from 'electron-compile';
import installExtension, {
  REACT_DEVELOPER_TOOLS
} from 'electron-devtools-installer';
import isDevMode from '../isDevMode';
import createMainWindow from '../windows/mainWindow';

function setupMainWindow(windows) {
  windows.main = createMainWindow();
  windows.main.on('closed', () => {
    windows.main = null;
  });
}

function initializeElectron(windows) {
  const devMode = isDevMode();

  if (devMode) enableLiveReload({ strategy: 'react-hmr' });

  app.on('ready', () => {
    setupMainWindow(windows);
    if (devMode) installExtension(REACT_DEVELOPER_TOOLS);
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
