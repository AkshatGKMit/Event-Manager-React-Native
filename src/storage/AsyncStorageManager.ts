import AsyncStorage from "@react-native-async-storage/async-storage";
import { initialSettings } from "@constants/constants";

class AsyncStorageManager {
  private static instance: AsyncStorageManager;

  public users: Users = [];
  public events: MainEvents = [];
  public attendees: Attendees = [];
  public settings: Settings = initialSettings;

  private constructor() {
    this.loadFromStorage();
  }

  public static getInstance(): AsyncStorageManager {
    if (!AsyncStorageManager.instance) {
      AsyncStorageManager.instance = new AsyncStorageManager();
    }
    return AsyncStorageManager.instance;
  }

  public async getFromStorage<T>(key: StorageKey): Promise<T | undefined> {
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
    await AsyncStorage.setItem(key, value).then(() => this.loadFromStorage());
  }

  private async loadFromStorage() {
    this.settings = (await this.getFromStorage<Settings>("Settings")) ?? initialSettings;
    this.users = (await this.getFromStorage<Users>("Users")) ?? [];
    this.events = (await this.getFromStorage<MainEvents>("Events")) ?? [];
    this.attendees = (await this.getFromStorage<Attendees>("Attendees")) ?? [];
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

    const attendee: Attendee = { ...newUser };
    this.addAttendee(attendee);
  }

  public async changeUsers(newUsers: Users) {
    this.users = newUsers;
    await this.saveToStorage("Users", JSON.stringify(newUsers));
  }

  public getUsers() {
    return this.users;
  }

  public async addEvent(newEvent: MainEvent) {
    this.events.push(newEvent);
    await this.saveToStorage("Events", JSON.stringify(this.events)).then(() => this.loadFromStorage());
  }

  public async updateEvent(updatedEvent: MainEvent): Promise<void> {
    const eventIndex = this.events.findIndex(event => event.id === updatedEvent.id);

    if (eventIndex !== -1) {
      this.events[eventIndex] = updatedEvent;
      await this.saveToStorage("Events", JSON.stringify(this.events));
    }
  }

  public async changeEvents(newEvents: MainEvents) {
    this.events = newEvents;
    await this.saveToStorage("Events", JSON.stringify(newEvents));
  }

  public async deleteEventById(eventId: string): Promise<void> {
    this.events = this.events.filter(event => event.id !== eventId);
    await this.saveToStorage("Events", JSON.stringify(this.events));
  }

  public getEvents(): MainEvents {
    return this.events;
  }

  public async addAttendee(newAttendee: Attendee) {
    this.attendees.push(newAttendee);
    await this.saveToStorage("Attendees", JSON.stringify(this.attendees));
  }

  public async updateAttendee(updatedAttendee: Attendee): Promise<void> {
    const attendeeIndex = this.attendees.findIndex(({ id }) => id === updatedAttendee.id);

    if (attendeeIndex !== -1) {
      this.attendees[attendeeIndex] = updatedAttendee;
      await this.saveToStorage("Attendees", JSON.stringify(this.attendees));
    }
  }

  public getAttendees(): Attendees {
    return this.attendees;
  }

  public async changeSettings(newSettings: Settings) {
    this.settings = newSettings;
    await this.saveToStorage("Settings", JSON.stringify(newSettings));
  }

  public async addAttendeeIdToEvent(eventId: string, attendeeId: string): Promise<void> {
    const event = this.events.find(event => event.id === eventId);

    if (event) {
      if (!event.attendeeIds.includes(attendeeId)) {
        event.attendeeIds.push(attendeeId);
        await this.saveToStorage("Events", JSON.stringify(this.events));
      } else {
        console.warn(`Attendee ID ${attendeeId} is already added to event ${eventId}.`);
      }
    } else {
      console.error(`Event with ID ${eventId} not found.`);
    }
  }

  public async removeAttendeeIdFromEvent(eventId: string, attendeeId: string): Promise<void> {
    const event = this.events.find(event => event.id === eventId);

    if (event) {
      if (!event.attendeeIds.includes(attendeeId)) {
        event.attendeeIds = event.attendeeIds.filter((id: string) => id !== attendeeId);
        await this.saveToStorage("Events", JSON.stringify(this.events));
      }
    } else {
      console.error(`Event with ID ${eventId} not found.`);
    }
  }

  public async resetData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove(["Events", "Attendees", "Settings"]);

      this.events = [];
      this.attendees = [];
      this.settings = initialSettings;

      console.log("Data has been reset successfully.");
    } catch (error) {
      console.error("Error resetting data:", error);
    }
  }

  public async updateUser(updatedUser: User): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === updatedUser.id);

    if (userIndex !== -1) {
      this.users[userIndex] = updatedUser;
      await this.saveToStorage("Users", JSON.stringify(this.users));
    } else {
      console.error(`User with ID ${updatedUser.id} not found.`);
    }
  }
}

export default AsyncStorageManager;
