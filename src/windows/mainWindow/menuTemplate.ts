import loadResume from './loadResume';
import showOpenResumeDialog from './showOpenResumeDialog';

interface createMenuTemplateOptions {
  win: Electron.BrowserWindow;
  runningOnMac: boolean;
}

const create = ({
  win,
  runningOnMac
}: createMenuTemplateOptions): Electron.MenuItemConstructorOptions[] => {
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
    mainMenuTemplate.unshift({ label: '', submenu: [] });
  }

  return mainMenuTemplate;
};

export default create;
