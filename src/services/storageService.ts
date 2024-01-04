export interface StorageService {
  getItem: <T>(rey: string) => Promise<T>;
  setItem: <T>(rey: string, value: T) => Promise<void>;
  removeItem: (rey: string) => Promise<void>;
}
