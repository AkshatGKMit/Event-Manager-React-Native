import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  event: {
    width: "100%",
    backgroundColor: Colors.eventSummaryColor,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryWrapper: {},
  attendeeCount: {
    position: "absolute",
    flexDirection: "row",
    top: 0,
    right: 0,
    backgroundColor: Colors.attendeeCountColor,
    alignItems: "center",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 12,
    gap: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  count: {
    fontSize: 10,
  },
  attendeeText: {
    fontSize: 10,
  },
  eventTitle: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: "700",
  },
  eventTime: {
    fontSize: 12,
  },
  eventVenue: {
    fontSize: 11,
  },
});

export default styles;
