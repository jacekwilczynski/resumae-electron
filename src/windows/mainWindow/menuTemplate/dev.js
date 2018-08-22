export default () => [
  {
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle Chrome DevTools',
        accelerator: `CmdOrCtrl+Shift+I`,
        click: (item, focusedWindow) => {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  }
];
