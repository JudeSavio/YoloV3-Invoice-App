const { app, BrowserWindow , ipcMain , dialog } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('Main_Screen.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

ipcMain.on('open-file-dialog-for-file', function (event) {
    console.log('reached Main')
    console.log(dialog.showOpenDialog({ properties: ['openFile'] }))
    dialog.showOpenDialog({
        properties: ['openFile']
      }).then(result => {
        console.log(result.canceled)
        console.log(result.filePaths[0])
        event.sender.send('selected-file',results.filePaths[0])
      }).catch(err => {
        console.log(err)
      })
});