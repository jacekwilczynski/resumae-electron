import { dialog } from 'electron';

function showOpenResumeDialog(win) {
  return new Promise(resolve => {
    dialog.showOpenDialog(win, { properties: ['openFile'] }, filePaths => {
      resolve(filePaths && filePaths[0]);
    });
  });
}

export default showOpenResumeDialog;
