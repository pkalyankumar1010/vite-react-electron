(async () => {
    const { app, BrowserWindow } = require('electron');
  const path = await import('path');
  const isDev = await import('electron-is-dev');
  function createWindow() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'), // Optional
        nodeIntegration: true,
        contextIsolation: false, // Use true if using preload
      },
    });
  
  //   win.loadURL('http://localhost:5173'); // URL served by Vite
    if (isDev) {
      win.loadURL('http://localhost:5173'); // Development: Load Vite server
    } else {
      win.loadFile(path.join(__dirname, 'dist/index.html')); // Production: Load the built app
    }
  }
  
  app.whenReady().then(() => {
    createWindow();
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  })();