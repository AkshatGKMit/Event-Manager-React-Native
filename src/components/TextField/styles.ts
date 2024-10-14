import { StyleSheet } from "react-native";
import { Colors } from "@constants/constants";

const styles = StyleSheet.create({
  textfieldWrapper: {
    flexDirection: "column",
  },
  label: {
    color: Colors.grey,
    fontWeight: "700",
    fontSize: 16,
  },
  textfield: {
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    height: 42,
    borderColor: "darkgrey",
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  textInput: {
    flex: 1,
    height: "100%",
    width: "100%",
    fontSize: 16,
  },
  error: {
    marginTop: 3,
    color: Colors.redError,
    fontSize: 12,
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
