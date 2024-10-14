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
    custom?: {
      isValid: (value: string) => boolean;
      message: string;
    };
  }

  type ErrorRecord<T> = Partial<Record<keyof T, string>>;

  type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

  type UseFormOptions<T> = {
    onSubmit: () => void;
    initialData: Partial<T>;
    validations?: Validations<T>;
  };
}

export {};
