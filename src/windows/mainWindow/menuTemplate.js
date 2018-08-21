import loadResume from './loadResume';
import showOpenResumeDialog from './showOpenResumeDialog';

const create = ({ runningOnMac }) => {
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
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'DevTools',
          accelerator: runningOnMac ? 'Command+Shift+I' : 'Ctrl+Shift+I',
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
