const { resolve } = require("path");
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    icon: resolve(__dirname, "build-assests", "logo.ico"),
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
