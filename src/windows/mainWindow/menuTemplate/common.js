import { app } from 'electron';
import loadResume from '../loadResume';
import showOpenResumeDialog from '../showOpenResumeDialog';

export default () => [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: `CmdOrCtrl+O`,
        click: (_item, focusedWindow) => {
          showOpenResumeDialog(focusedWindow).then(filepath => {
            if (filepath) loadResume(focusedWindow, filepath);
          });
        }
      },
      {
        label: 'Quit',
        click: () => {
          app.quit();
        }
      }
    ]
  }
];
