import { minEndDate, minStartDate } from "@src/helpers/date";

export const Colors = {
  accent50: "#edf6ff",
  accent100: "#d6eaff",
  accent200: "#b5dbff",
  accent300: "#83c6ff",
  accent400: "#48a7ff",
  accent500: "#1e7fff",
  accent600: "#065dff",
  accent700: "#0045f5",
  accent800: "#0838c5",
  accent900: "#0d359b",
  accent950: "#0e225d",
  barrierColor: "#00000045",
  black: "#000000",
  white: "#ffffff",
  grey: "#989898",
  placeholderColor: "#99999999",
  logout: "#ff000099",
  redError: "#ca0000",
  deleteColor: "#ff5757",
  placeholderError: "#ca000099",
  statusBarColor: "#0045f520",
  datePickerColor: "#000000018",
  transparent: "#00000000",
  separator: "#00000050",
  eventSummaryColor: "#00000005",
  attendeeCountColor: "#00000008",
  dashboardCardColor: "#F2F2F2",
};

export const initialSignUpData: User = {
  id: "",
  age: "",
  email: "",
  name: "",
  gender: "Male",
  username: "",
  password: "",
};

export const signUpValidations: Partial<Record<keyof User, Validation>> = {
  name: {
    required: "This field is required",
    minLength: {
      value: 3,
      message: "Minimum characters must be 3",
    },
    maxLength: {
      value: 15,
      message: "Maximum characters must be 15",
    },
    pattern: {
      value: /^[A-Za-z]+(?: [A-Za-z]+)*$/i,
      message: "Invalid name format",
    },
  },
  email: {
    required: "This field is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Must match a valid email format (e.g., user@example.com)",
    },
  },
  age: {
    required: "Age is required",
    min: {
      value: 10,
      message: "Minimum Age must be 10",
    },
    max: {
      value: 75,
      message: "Maximum Age must be 75",
    },
  },
  username: {
    required: "Username is required",
    minLength: {
      value: 5,
      message: "Minimum characters must be 5",
    },
    maxLength: {
      value: 12,
      message: "Maximum characters must be 12",
    },
    pattern: {
      value: /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/,
      message: "Should only contain alphanumeric characters and underscores",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Minimum password length must be 8",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message: "Must include at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
  },
};

export const initialEventData: MainEvent = {
  attendeeLimit: "1",
  attendeeIds: [],
  description: "",
  startDateTime: minStartDate(),
  endDateTime: minEndDate(),
  id: "",
  title: "",
  venue: "Admin Room",
} as const;

export const eventValidations: Partial<Record<keyof MainEvent, Validation>> = {
  title: {
    required: "Title cannot be empty",
    minLength: {
      value: 3,
      message: "Minimum 3 characters required",
    },
    maxLength: {
      value: 40,
      message: "Maximum 40 characters allowed",
    },
    pattern: {
      value: /^[A-Za-z]+(?: [A-Za-z]+)*$/i,
      message: "Invalid name format",
    },
  },
  attendeeLimit: {
    required: "At least one attendee should be present",
  },
  description: {
    minLength: { value: 10, message: "Minimum 10 characters required" },
  },
  startDateTime: {
    required: "Select date and time",
    minTime: {
      value: 5,
      message: "Event date must be at least 5 minutes from now.",
    },
  },
};

export const initialAttendeeData: Attendee = {
  id: "",
  name: "",
  email: "",
};

export const attendeeValidations: Partial<Record<keyof Attendee, Validation>> = {
  name: {
    required: "This field is required",
    minLength: {
      value: 3,
      message: "Minimum characters must be 3",
    },
    maxLength: {
      value: 15,
      message: "Maximum characters must be 15",
    },
    pattern: {
      value: /^[A-Za-z]+(?: [A-Za-z]+)*$/i,
      message: "Invalid name format",
    },
  },
  email: {
    required: "This field is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Must match a valid email format (e.g., user@example.com)",
    },
  },
};

export const venues: Venues = [
  "Decision Dome",
  "Strategy Sphere",
  "Idea Incubator",
  "Think Tank",
  "Hr Room",
  "Js Room",
  "Admin Room",
  "Escape Room",
];

export const filters: Filters = ["All", "Next Month", "Outdated", "This Month", "This Week", "Upcoming", "Today"];

export const initialSettings: Settings = {
  defaultFilter: "All",
  is12HourTimeFormat: true,
  monthFirstDateTimeFormat: true,
};
