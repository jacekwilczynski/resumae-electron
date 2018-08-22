import { app } from 'electron';
import loadResume from './loadResume';
import showOpenResumeDialog from './showOpenResumeDialog';

const create = ({ runningOnMac, devMode }) => {
  const ctrl = runningOnMac ? 'Command' : 'Ctrl';
  const mainMenuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          accelerator: `${ctrl}+O`,
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
      submenu: []
    }
  ];

  if (runningOnMac) {
    mainMenuTemplate.unshift({});
  }

  if (devMode) {
    mainMenuTemplate.find(menu => menu.label === 'View').submenu.push({
      label: 'DevTools',
      accelerator: `${ctrl}+Shift+I`,
      click: (item, focusedWindow) => {
        focusedWindow.toggleDevTools();
      }
    });
  }

  return mainMenuTemplate;
};

export default create;
