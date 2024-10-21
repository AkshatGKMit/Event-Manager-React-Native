import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 16,
  },
  placeholder: {
    color: Colors.placeholderColor,
  },
  focusDd: {
    borderColor: Colors.accent700,
  },
  dropdown: {
    height: 50,
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
    top: 70,
    paddingHorizontal: 10,
    elevation: 2,
    borderWidth: 0.1,
    position: "absolute",
    maxHeight: 170,
    zIndex: 4,
    width: "100%",
    backgroundColor: Colors.white,
    gap: 10,
  },
  data: {
    backgroundColor: Colors.white,
    padding: 6,
    width: "100%",
  },
  dataText: {
    color: Colors.black,
    fontSize: 16,
  },
});

export default styles;
