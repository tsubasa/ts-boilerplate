import { contextBridge, ipcRenderer } from 'electron';
import { ElectronAPI } from './types/global.d';

contextBridge.exposeInMainWorld('electron', {
  controller: {
    close: () => ipcRenderer.send('close'),
    minimize: () => ipcRenderer.send('minimize'),
    maximize: () => ipcRenderer.send('maximize'),
    unmaximize: () => ipcRenderer.send('unmaximize'),
  },
} as ElectronAPI);
