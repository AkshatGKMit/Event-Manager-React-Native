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
  black: "#000",
  grey: "#989898",
  placeholderColor: "#99999999",
  redError: "#ca0000",
  placeholderError: "#ca000099",
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

export const signUpValidations = {
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
