import { StyleSheet } from "react-native";
import { Colors } from "@constants/constants";

const styles = StyleSheet.create({
  outsideView: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "600",
  },
  link: {
    color: Colors.accent600,
    textDecorationLine: "underline",
    marginLeft: 2,
  },
  isDisabled: {
    color: `${Colors.grey}44`,
  },
});

export default styles;
