import { app, BrowserWindow } from "electron"
app.commandLine.appendSwitch("remote-debugging-port", "8315")

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = require("path")
    .join(__dirname, "statics")
    .replace(/\\/g, "\\\\")
}

let mainWindow

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    fullscreen: false,
    useContentSize: true,
    movable: true,
    resizable: true,
  })

  mainWindow.loadURL(process.env.APP_URL)

  mainWindow.on("closed", () => {
    mainWindow = null
  })
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow()
  }
})