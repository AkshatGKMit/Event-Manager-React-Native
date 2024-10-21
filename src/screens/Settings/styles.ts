import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backButton: {
    width: "100%",
    height: 28,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 20,
  },
  heading: {
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    paddingRight: 80,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  setting: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  initials: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    color: Colors.black,
  },
  value: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  switch: {
    transform: [{ scale: 0.75 }],
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: `${Colors.grey}30`,
  },
});

export default styles;
