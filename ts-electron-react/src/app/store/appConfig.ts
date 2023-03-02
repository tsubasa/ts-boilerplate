import Store from 'electron-store';
import Config from '@domain/app/Config';

class AppConfigStore {
  private store: Store;

  public constructor() {
    this.store = new Store({
      name: 'appConfig',
    });
  }

  public getConfig<T extends keyof Config>(key: T): Config[T] {
    return this.store.get(key) as Config[T];
  }

  public setConfig<T extends keyof Config>(key: T, value: Config[T]): void {
    this.store.set(key, value);
  }
}

export default new AppConfigStore();
