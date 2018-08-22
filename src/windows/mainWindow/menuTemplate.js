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
    }
  ];

  if (runningOnMac) {
    mainMenuTemplate.unshift({});
  }

  if (devMode) {
    mainMenuTemplate.push({
      label: 'Developer Tools',
      submenu: [
        {
          label: 'Toggle Chrome DevTools',
          accelerator: `${ctrl}+Shift+I`,
          click: (item, focusedWindow) => {
            focusedWindow.toggleDevTools();
          }
        },
        {
          role: 'reload'
        }
      ]
    });
  }

  return mainMenuTemplate;
};

export default create;
