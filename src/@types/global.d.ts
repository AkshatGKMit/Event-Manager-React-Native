declare global {
  type Gender = "Male" | "Female";

  interface User {
    id: string;
    name: string;
    email: string;
    gender: Gender;
    age: string;
    username: string;
    password: string;
  }

  type Users = User[];

  interface MainEvent {
    id: string;
    title: string;
    startDateTime: Date;
    endDateTime: Date;
    description: string;
    attendeeLimit: string;
    venue: Venue;
    attendees: Attendees;
  }

  type Venue =
    | "Decision Dome"
    | "Strategy Sphere"
    | "Idea Incubator"
    | "Think Tank"
    | "Hr Room"
    | "Js Room"
    | "Admin Room"
    | "Escape Room";

  type StorageKey = "Users" | "LoginUserId";

  type Options = {
    value: number | string | RegExp;
    message: string;
  };

  interface Validation {
    required?: string;
    pattern?: Options;
    min?: Options;
    minLength?: Options;
    max?: Options;
    maxLength?: Options;
    pattern?: Options;
    minTime?: Options;
  }

  type ErrorRecord<T> = Partial<Record<keyof T, string>>;

  type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

  type UseFormOptions<T> = {
    onSubmit: () => void;
    initialData: Partial<T>;
    validations?: Validations<T>;
  };

  type OnLoginTextChangeKeyType = "usernameOrEmail" | "password";
}

export {};
