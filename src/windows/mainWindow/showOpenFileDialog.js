import { dialog } from 'electron';
import loadResume from './loadResume';

function showOpenFileDialog(win) {
  dialog.showOpenDialog(
    win,
    {
      properties: ['openFile']
    },
    filePaths => {
      loadResume(win, filePaths[0]);
    }
  );
}

export default showOpenFileDialog;
