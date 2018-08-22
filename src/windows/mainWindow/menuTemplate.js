import common from './menuTemplate/common';
import dev from './menuTemplate/dev';

const create = ({ runningOnMac, devMode }) => {
  const ctrl = runningOnMac ? 'Command' : 'Ctrl';
  const mainMenuTemplate = common({ ctrl });
  if (runningOnMac) mainMenuTemplate.unshift({});
  if (devMode) mainMenuTemplate.push(...dev({ ctrl }));
  return mainMenuTemplate;
};

export default create;
