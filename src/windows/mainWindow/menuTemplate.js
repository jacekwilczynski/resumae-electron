import { app } from 'electron';
import loadResume from './loadResume';
import showOpenResumeDialog from './showOpenResumeDialog';

const create = ({ runningOnMac }) => {
  const ctrl = runningOnMac ? 'Command' : 'Ctrl';
  const mainMenuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
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
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'DevTools',
          accelerator: `${ctrl}+Shift+I`,
          click: (item, focusedWindow) => {
            focusedWindow.toggleDevTools();
          }
        }
      ]
    }
  ];

  if (runningOnMac) {
    mainMenuTemplate.unshift({});
  }

  return mainMenuTemplate;
};

export default create;
