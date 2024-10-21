import { StyleSheet } from "react-native";
import { Colors } from "@constants/constants";

const styles = StyleSheet.create({
  textfieldWrapper: {
    flexDirection: "column",
    gap: 3,
  },
  label: {
    color: Colors.grey,
    fontWeight: "700",
    fontSize: 16,
  },
  textfield: {
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    height: 45,
    borderColor: Colors.grey,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  error: {
    marginTop: 3,
    color: Colors.redError,
    fontSize: 14,
  },
  errorTextfield: {
    borderColor: Colors.redError,
  },
  errorLabel: {
    color: Colors.redError,
  },
  focused: {
    color: Colors.accent700,
    borderColor: Colors.accent700,
  },
});

export default styles;
