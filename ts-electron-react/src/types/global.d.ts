export type ElectronAPI = {
  controller: {
    close: () => void;
    minimize: () => void;
    maximize: () => void;
    unmaximize: () => void;
  };
};

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}
