// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openFolderDialog: () => ipcRenderer.send('open-folder-dialog'),
  onFolderSelected: (callback) => ipcRenderer.on('folder-selected', (event, path) => callback(path)),
});
