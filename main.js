// main.js
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const { ipcMain, dialog } = require('electron');

ipcMain.on('open-folder-dialog', async (event) => {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory'],
  });

  if (!result.canceled && result.filePaths.length > 0) {
    const folderPath = result.filePaths[0];
    event.sender.send('folder-selected', folderPath);
  }
});

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      // Note: In production, consider using a preload script for better security
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // In development, load from the React dev server.
  // In production, load the built index.html file.
  if (process.env.ELECTRON_DEV) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile(path.join(__dirname, 'build', 'index.html'));
  }

  // Set the custom menu
  setCustomMenu(win);
}

function setCustomMenu(win) {
  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New',
          accelerator: 'Ctrl+N',
          click: () => win.webContents.send('menu-action', 'new-file'),
        },
        {
          label: 'Open',
          accelerator: 'Ctrl+O',
          click: () => win.webContents.send('menu-action', 'open-file'),
        },
        {
          label: 'Save',
          accelerator: 'Ctrl+S',
          click: () => win.webContents.send('menu-action', 'save-file'),
        },
        { type: 'separator' },
        { label: 'Exit', role: 'quit' },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'Ctrl+Z', role: 'undo' },
        { label: 'Redo', accelerator: 'Ctrl+Y', role: 'redo' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'Ctrl+X', role: 'cut' },
        { label: 'Copy', accelerator: 'Ctrl+C', role: 'copy' },
        { label: 'Paste', accelerator: 'Ctrl+V', role: 'paste' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { label: 'Reload', accelerator: 'Ctrl+R', role: 'reload' },
        { label: 'Toggle Full Screen', accelerator: 'F11', role: 'togglefullscreen' },
      ],
    },
    {
      label: 'Window',
      submenu: [
        { label: 'Minimize', accelerator: 'Ctrl+M', role: 'minimize' },
        { label: 'Close', accelerator: 'Ctrl+W', role: 'close' },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: () => {
            console.log('About dialog triggered');
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it’s common to re-create a window when the dock icon is clicked
    // and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
