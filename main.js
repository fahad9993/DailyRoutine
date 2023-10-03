const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
  });

  // Load your HTML file
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
