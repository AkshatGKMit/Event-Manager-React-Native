import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    width: "100%",
    height: 50,
    padding: 4,
    paddingStart: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 20,
    borderBottomWidth: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.black,
  },
});

export default styles;
