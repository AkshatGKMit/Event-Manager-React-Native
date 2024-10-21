import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.barrierColor,
    zIndex: 2,
  },
  modalView: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-160%, -100%)",
    zIndex: 3,
    width: "80%",
    borderRadius: 9,
    padding: 20,
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
  },
  filters: {
    width: "100%",
    justifyContent: "flex-start",
    gap: 4,
  },
  filterButton: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginLeft: 20,
  },

  selected: {
    backgroundColor: Colors.datePickerColor,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    marginLeft: 0,
  },
  closeButton: {
    backgroundColor: Colors.accent300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});

export default styles;
