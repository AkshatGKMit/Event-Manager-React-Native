import AsyncStorage from "@react-native-async-storage/async-storage";

class AsyncStorageManager {
  private static instance: AsyncStorageManager;

  private users: Users = [];

  private constructor() {
    this.loadFromStorage();
  }

  public static getInstance(): AsyncStorageManager {
    if (!AsyncStorageManager.instance) {
      AsyncStorageManager.instance = new AsyncStorageManager();
    }
    return AsyncStorageManager.instance;
  }

  private async getFromStorage<T>(key: StorageKey): Promise<T | undefined> {
    try {
      const item = await AsyncStorage.getItem(key);

      if (!item) {
        return undefined;
      }

      if (key === "LoginUserId") {
        return item as T;
      }

      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Error retrieving item for key "${key}":`, error);
      return undefined;
    }
  }

  private async saveToStorage(key: StorageKey, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(`Error saving value for key "${key}":`, error);
    }
  }

  private async loadFromStorage() {
    this.users = (await this.getFromStorage<Users>("Users")) ?? [];
  }

  public async saveLoginUserId(userId: string) {
    await this.saveToStorage("LoginUserId", userId);
  }

  public async getLoginUserId() {
    return (await this.getFromStorage<string>("LoginUserId")) ?? "";
  }

  public async addUser(newUser: User) {
    this.users.push(newUser);
    await this.saveToStorage("Users", JSON.stringify(this.users));
  }

  public async changeUsers(newUsers: Users) {
    this.users = newUsers;
    await this.saveToStorage("Users", JSON.stringify(newUsers));
  }

  public getUsers() {
    return this.users;
  }
}

export default AsyncStorageManager;
