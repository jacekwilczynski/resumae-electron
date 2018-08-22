import common from './menuTemplate/common';
import dev from './menuTemplate/dev';

const create = ({ runningOnMac, devMode }) => {
  const mainMenuTemplate = common();
  if (runningOnMac) mainMenuTemplate.unshift({});
  if (devMode) mainMenuTemplate.push(...dev());
  return mainMenuTemplate;
};

export default create;
