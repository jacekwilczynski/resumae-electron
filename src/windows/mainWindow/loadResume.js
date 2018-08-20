import * as fs from 'fs';
import * as yaml from 'js-yaml';

function loadResume(win, filePath) {
  win.webContents.send(
    'resume:load',
    yaml.safeLoad(fs.readFileSync(filePath, 'utf-8'))
  );
}

export default loadResume;
