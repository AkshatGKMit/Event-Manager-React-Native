import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  popup: {},
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  placeholder: {
    color: Colors.placeholderColor,
  },
  dropdown: {
    height: 25,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ddValue: {
    fontSize: 14,
    color: Colors.black,
  },
  dropdownList: {
    flex: 1,
    top: 25,
    padding: 10,
    elevation: 2,
    position: "absolute",
    zIndex: 4,
    backgroundColor: Colors.white,
    paddingRight: 20,
    gap: 5,
  },
  data: {
    backgroundColor: Colors.white,
    padding: 3,
    flex: 1,
  },
  item: {
    fontSize: 16,
    color: Colors.black,
  },
  dataText: {
    fontSize: 16,
  },
  outsideView: {
    position: "absolute",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3,
    backgroundColor: "red",
  },
});

export default styles;
