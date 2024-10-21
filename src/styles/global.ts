import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 15,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flexColumn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  inputBorder: {
    borderColor: Colors.grey,
    borderWidth: 0.5,
    borderRadius: 8,
  },
  tabBarLabel: {
    fontSize: 12,
  },
});

export default globalStyles;
