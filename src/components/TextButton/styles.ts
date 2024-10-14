import { StyleSheet } from "react-native";
import { Colors } from "@constants/constants";

const styles = StyleSheet.create({
  outsideView: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: Colors.accent600,
    fontSize: 16,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});

export default styles;
