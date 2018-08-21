import { dialog } from 'electron';

function showOpenResumeDialog(win: Electron.BrowserWindow) {
  return new Promise<string | null>(resolve => {
    dialog.showOpenDialog(win, { properties: ['openFile'] }, filePaths => {
      resolve(filePaths ? filePaths[0] : null);
    });
  });
}

export default showOpenResumeDialog;
