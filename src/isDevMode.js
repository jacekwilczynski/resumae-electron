const isDevMode = () => process.execPath.match(/[\\/]electron/);

export default isDevMode;
