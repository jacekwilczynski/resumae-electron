export default ({ ctrl }) => [
  {
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
  }
];
