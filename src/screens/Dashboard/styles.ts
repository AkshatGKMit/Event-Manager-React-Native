import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dashboard: {
    gap: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.black,
  },
  cards: {
    flexDirection: "column",
    gap: 20,
    backgroundColor: Colors.dashboardCardColor,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  valueView: {
    backgroundColor: `${Colors.accent700}99`,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
    gap: 6,
  },
  noCard: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  value: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.white,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.black,
  },
  shadowStyle: {
    shadowColor: Colors.black,
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
