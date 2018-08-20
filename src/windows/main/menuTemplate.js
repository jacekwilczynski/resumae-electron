const create = ({ onFileOpenClick, runningOnMac }) => {
  const mainMenuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          click: onFileOpenClick
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
