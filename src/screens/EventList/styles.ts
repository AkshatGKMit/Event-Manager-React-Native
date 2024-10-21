import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  topBar: {
    height: 40,
    width: "100%",
    padding: 5,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderWidth: 0.5,
    borderColor: Colors.grey,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 20,
  },
  header: {},
  heading: {
    width: "100%",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 15,
    marginLeft: 10,
    color: Colors.black,
  },
  content: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 20,
  },
  floatingActionButton: {
    position: "absolute",
    right: 21,
    bottom: 21,
    backgroundColor: Colors.accent700,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.5,
    elevation: 2,
    shadowRadius: 15,
  },
});

export default styles;
