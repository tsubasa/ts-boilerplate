import { BrowserWindow } from 'electron';
import path from 'path';
import appConfigStore from '@app/store/appConfig';

export default class App {
  static application: Electron.App;

  static mainWindow: Electron.BrowserWindow | null;

  static BrowserWindow: typeof BrowserWindow;

  public static isDevelopmentMode(): boolean {
    return process.env.NODE_ENV === 'development';
  }

  private static onWindowAllClosed() {
    if (process.platform !== 'darwin') {
      App.application.quit();
    }
  }

  private static async onClose() {
    if (App.mainWindow) {
      appConfigStore.setConfig('window.size', App.mainWindow.getSize());
      appConfigStore.setConfig('window.position', App.mainWindow.getPosition());
    }
  }

  private static onReady() {
    App.setup();
    App.initMainWindow();
    App.loadMainWindow();
    App.loadDevTools();
  }

  private static onActivate() {
    if (App.mainWindow === null) {
      App.onReady();
    }
  }

  private static setup() {}

  private static initMainWindow() {
    App.mainWindow = new BrowserWindow({
      show: false,
      frame: false,
      width: appConfigStore.getConfig('window.size')?.[0] ?? 1080,
      height: appConfigStore.getConfig('window.size')?.[1] ?? 640,
      x: appConfigStore.getConfig('window.position')?.[0],
      y: appConfigStore.getConfig('window.position')?.[1],
      webPreferences: {
        devTools: this.isDevelopmentMode(),
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
        backgroundThrottling: false,
      },
    });

    App.mainWindow.setMenu(null);

    App.mainWindow.once('ready-to-show', () => {
      if (App.mainWindow) {
        App.mainWindow.show();
      }
    });

    App.mainWindow.on('closed', () => {
      App.mainWindow = null;
    });

    App.mainWindow.on('close', async () => {
      await this.onClose();
    });
  }

  private static loadMainWindow() {
    if (App.mainWindow) {
      if (this.isDevelopmentMode()) {
        App.mainWindow.loadURL('http://localhost:8080');
      } else {
        App.mainWindow.loadFile(path.join(__dirname, 'index.html'));
      }
    }
  }

  private static loadDevTools() {
    if (App.mainWindow && App.isDevelopmentMode()) {
      App.mainWindow.webContents.openDevTools();
    }
  }

  static main(app: Electron.App, browserWindow: typeof BrowserWindow): void {
    App.BrowserWindow = browserWindow;
    App.application = app;

    App.application.on('window-all-closed', App.onWindowAllClosed);
    App.application.on('ready', App.onReady);
    App.application.on('activate', App.onActivate);
  }
}
