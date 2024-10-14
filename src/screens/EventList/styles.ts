import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "900",
  },
  floatingActionButton: {
    position: "absolute",
    right: 15,
    bottom: 15,
    backgroundColor: Colors.accent700,
    borderRadius: 10,
    shadowColor: "#000000FF",
    shadowOpacity: 0.5,
    elevation: 2,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 2 },
  },
});

export default styles;
