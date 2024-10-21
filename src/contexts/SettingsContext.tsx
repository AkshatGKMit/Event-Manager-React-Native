import { createContext, useEffect, useState } from "react";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import { getMonthString } from "@helpers/date";

const defaultSettingsContextValue: SettingsContextInterface = {
  defaultFilter: "All",
  is12HourTimeFormat: true,
  monthFirstDateTimeFormat: true,
  changeDateFormat: () => {},
  changeDefaultFilter: () => {},
  changeTimeFormat: () => {},
  getTimeString: () => "",
  getDateString: () => "",
  loading: true,
  loginUserId: null,
  logOut: () => {},
  login: () => {},
};

const SettingsContext = createContext<SettingsContextInterface>(defaultSettingsContextValue);

export const SettingsContextProvider = ({ children }: CtxProviderProps) => {
  const {
    defaultFilter: filter,
    is12HourTimeFormat: timeFormat,
    monthFirstDateTimeFormat: dateFormat,
  } = defaultSettingsContextValue;

  const storageManager = AsyncStorageManager.getInstance();

  const [loginUserId, setLoginUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [defaultFilter, setDefaultFilter] = useState(filter);
  const [is12HourTimeFormat, setIs12HourTimeFormat] = useState(timeFormat);
  const [monthFirstDateTimeFormat, setMonthFirstDateTimeFormat] = useState(dateFormat);

  useEffect(() => {
    const fetchLoginUserId = async () => {
      const id = await storageManager.getLoginUserId();
      setLoginUserId(id || null);
      setLoading(false);
    };

    fetchLoginUserId();
  }, []);

  useEffect(() => {
    const loadSettings = async () => {
      const loadedSettings = await storageManager.getFromStorage<Settings>("Settings");
      if (loadedSettings) {
        setDefaultFilter(loadedSettings.defaultFilter);
        setIs12HourTimeFormat(loadedSettings.is12HourTimeFormat);
        setMonthFirstDateTimeFormat(loadedSettings.monthFirstDateTimeFormat);
      }
    };

    loadSettings();
  }, []);

  const logOut = () => {
    setLoginUserId(null);
  };

  const login = (id: string) => {
    setLoginUserId(id);
  };

  const changeDefaultFilter = (newFilter: Filter) => {
    storageManager.changeSettings({ ...storageManager.settings, defaultFilter: newFilter });
    setDefaultFilter(newFilter);
  };

  const changeTimeFormat = (value: boolean) => {
    storageManager.changeSettings({ ...storageManager.settings, is12HourTimeFormat: value });
    setIs12HourTimeFormat(value);
  };

  const changeDateFormat = (value: boolean) => {
    storageManager.changeSettings({ ...storageManager.settings, monthFirstDateTimeFormat: value });
    setMonthFirstDateTimeFormat(value);
  };

  function getTimeString(incomingDate: Date): string {
    const date = new Date(incomingDate);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let formattedHours;

    if (is12HourTimeFormat) {
      const suffix = hours >= 12 ? "PM" : "AM";
      formattedHours = hours % 12 || 12;
      return `${formattedHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${suffix}`;
    }

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  }

  function getDateString(incomingDate: Date): string {
    const date = new Date(incomingDate);
    const monthString = getMonthString(date.getMonth());
    const dayString = date.getDate().toString().padStart(2, "0");
    const yearString = date.getFullYear();

    if (monthFirstDateTimeFormat) {
      return `${monthString} ${dayString}, ${yearString}`;
    }

    return `${dayString} ${monthString} ${yearString}`;
  }

  const contextValue: SettingsContextInterface = {
    defaultFilter,
    is12HourTimeFormat,
    monthFirstDateTimeFormat,
    changeDateFormat,
    changeDefaultFilter,
    changeTimeFormat,
    getTimeString,
    getDateString,
    loading,
    loginUserId,
    logOut,
    login,
  };

  return <SettingsContext.Provider value={contextValue}>{children}</SettingsContext.Provider>;
};

export default SettingsContext;
