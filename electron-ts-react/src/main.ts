import { app, BrowserWindow } from 'electron';
import App from '@app/App';
import ElectronEvents from '@app/events/electron';

export default class Main {
  static initialize(): void {
    if (!app.requestSingleInstanceLock()) {
      app.quit();
    }
  }

  static bootstrapApp(): void {
    App.main(app, BrowserWindow);
    ElectronEvents.bootstrapElectronEvents();
  }
}

Main.initialize();
Main.bootstrapApp();
