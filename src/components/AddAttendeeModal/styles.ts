import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  barrier: {
    flex: 1,
    backgroundColor: Colors.barrierColor,
    paddingHorizontal: 50,
    paddingVertical: 200,
    justifyContent: "center",
  },
  modalView: {
    borderRadius: 9,
    padding: 20,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: Colors.black,
  },
  addAttendeeView: {
    flex: 1,
    gap: 10,
  },
  buttonWrapper: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
  },
  clearButton: {
    backgroundColor: Colors.black,
  },
  submitButton: {
    backgroundColor: Colors.accent700,
  },
  buttonText: {
    color: Colors.white,
  },
  dropdownView: {
    alignItems: "center",
    flex: 1,
  },
  dropdown: {
    flex: 1,
  },
  note: {
    color: Colors.accent900,
    fontSize: 10,
  },
  fullWidth: {
    flex: 1,
  },
  separator: {
    margin: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dash: {
    height: 2,
    width: 20,
    backgroundColor: Colors.placeholderColor,
    margin: 5,
  },
  or: {
    color: Colors.placeholderColor,
  },
});

export default styles;
