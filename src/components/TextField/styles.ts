import { StyleSheet } from "react-native";
import { Colors } from "@constants/constants";

const styles = StyleSheet.create({
  textfieldWrapper: {
    flexDirection: "column",
    height: 50,
  },
  label: {
    position: "absolute",
    backgroundColor: Colors.white,
    left: 22,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  textfield: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    height: 42,
    borderColor: Colors.darkGrey,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  textInput: {
    flex: 1,
    height: "100%",
    width: "100%",
    fontSize: 16,
    color: "black",
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
