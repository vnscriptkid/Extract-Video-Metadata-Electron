const electron = require('electron');
var ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
  console.log('App ready!');
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });
  // mainWindow.loadURL('http://www.google.com');
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // listen for video submit from browser window through ipc
  ipcMain.on('video:submit', (event, path) => {
    // event here is to determine from which browser window data is sent

    // For some reasons, it doesn't work on Windows
    // ffmpeg.ffprobe(path, function(err, metadata) {
    //   if (err) {
    //     console.log('Ooops! Can not read metadata from video.');
    //     return;
    //   }
    //   console.log(metadata.format.duration);
    // });

    // fake getDuration service (underlying os job)
    setTimeout(() => {
      mainWindow.webContents.send('video:length', 5000);
    }, 1000);
  });
});
