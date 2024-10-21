import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listStyle: {
    width: "100%",
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  stepIndicator: {
    alignItems: "center",
    position: "relative",
    backgroundColor: Colors.accent700,
    height: 12,
    width: 12,
    borderRadius: 30,
  },
  stepLine: {
    position: "absolute",
    flex: 1,
    top: 20,
    left: 5,
    width: 2,
    height: "100%",
    backgroundColor: Colors.grey,
    zIndex: -1,
  },
  stepIndicatorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    backgroundColor: Colors.accent700,
    borderRadius: 20,
    width: 30,
    height: 30,
    textAlign: "center",
    lineHeight: 30,
  },
  step: {
    marginLeft: 40,
    marginBottom: 10,
    marginRight: 10,
  },
  stepName: {
    fontSize: 16,
    color: "#333",
  },
  sectionHeader: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: Colors.grey,
    backgroundColor: Colors.white,
  },
  passedTime: {
    backgroundColor: Colors.accent700,
  },
  currentStep: {
    borderWidth: 2,
    borderColor: Colors.accent700,
    backgroundColor: Colors.white,
  },

  upcomingStep: {
    borderWidth: 2,
    borderColor: Colors.grey,
    backgroundColor: Colors.white,
  },
  currentTime: {
    color: Colors.accent700,
    fontSize: 22,
  },
  upcomingTime: {
    backgroundColor: Colors.grey,
  },
  emptyMessage: {
    textAlign: "center",
    color: Colors.grey,
    marginTop: 10,
    fontSize: 16,
  },
});

export const getLineHeight = (length: number) => ({
  height: length * 75 + 10,
});

export default styles;
