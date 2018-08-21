import * as fs from 'fs';
import * as yaml from 'js-yaml';

function loadResume(win: Electron.BrowserWindow, filePath: string) {
  win.webContents.send(
    'resume:load',
    yaml.safeLoad(fs.readFileSync(filePath, 'utf-8'))
  );
}

export default loadResume;
