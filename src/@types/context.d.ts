declare global {
  interface Settings {
    defaultFilter: Filter;
    is12HourTimeFormat: boolean;
    monthFirstDateTimeFormat: boolean;
  }

  interface SettingsContextInterface {
    monthFirstDateTimeFormat: boolean;
    is12HourTimeFormat: boolean;
    defaultFilter: Filter;
    loading: boolean;
    loginUserId: string | null;
    changeDefaultFilter: (newFilter: Filter) => void;
    changeTimeFormat: (value: boolean) => void;
    changeDateFormat: (value: boolean) => void;
    getTimeString: (date: Date) => string;
    getDateString: (date: Date) => string;
    logOut: () => void;
    login: (id: string) => void;
  }

  type CtxProviderProps = { children?: ReactNode };
}

export {};
