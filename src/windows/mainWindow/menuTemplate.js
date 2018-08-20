import loadResume from './loadResume';
import showOpenResumeDialog from './showOpenResumeDialog';

const create = ({ win, runningOnMac }) => {
  const mainMenuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          click: () => {
            showOpenResumeDialog(win).then(filepath => {
              if (filepath) loadResume(win, filepath);
            });
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
