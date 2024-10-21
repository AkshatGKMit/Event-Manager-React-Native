import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.2,
    borderColor: `${Colors.grey}99`,
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  details: {
    flexDirection: "column",
  },
  name: {
    fontSize: 18,
    color: Colors.black,
  },
  email: {
    fontSize: 14,
    color: `${Colors.black}aa`,
  },
  actions: {
    flexDirection: "row",
    gap: 15,
  },
});

export default styles;
