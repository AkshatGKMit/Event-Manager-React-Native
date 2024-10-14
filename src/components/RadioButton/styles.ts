import { Colors } from "@src/constants/constants";
import { StyleProp, StyleSheet, TextStyle } from "react-native";

const styles = StyleSheet.create({
  view: {
    position: "relative",
  },
  heading: {
    color: Colors.accent500,
    fontWeight: "700",
    fontSize: 16,
  },
  container: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 50,
    bottom: -5,
  },
  itemLabel: {
    color: Colors.grey,
    fontWeight: "normal",
  },
  selected: {
    borderColor: Colors.accent700,
    color: Colors.accent700,
  },
  selectedLabel: {
    color: Colors.accent700,
    fontWeight: "900",
  },
});

export default styles;
