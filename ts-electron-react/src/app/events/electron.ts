import { ipcMain } from 'electron';
import App from '@app/App';

export default class ElectronEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

ipcMain.on('close', () => App.mainWindow && App.mainWindow.close());
ipcMain.on('minimize', () => App.mainWindow && App.mainWindow.minimize());
ipcMain.on('maximize', () => App.mainWindow && App.mainWindow.maximize());
ipcMain.on('unmaximize', () => App.mainWindow && App.mainWindow.unmaximize());
