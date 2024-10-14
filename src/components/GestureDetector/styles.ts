import { StyleSheet } from "react-native";
import { Colors } from "@constants/constants";

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.accent600,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  // styles: () => ({
  // 	alignItems: "center"
  // })
});

export default styles;
