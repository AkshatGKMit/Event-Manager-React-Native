import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";
import textFieldStyles from "@components/TextField/styles";

const styles = StyleSheet.create({
  attendeeWrapper: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    gap: 2,
  },
  heading: {
    flexDirection: "row",
    gap: 10,
  },
  label: {
    flexDirection: "row",
    gap: 10,
    fontSize: textFieldStyles.label.fontSize,
    fontWeight: textFieldStyles.label.fontWeight,
  },
  tableHeadRow: {
    backgroundColor: Colors.black,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: `${Colors.accent700}10`,
  },
  tableHeading: {
    color: Colors.white,
    fontWeight: "700",
  },
  addedAttendees: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
  },
  noAttendees: {
    flex: 1,
  },
  attendee: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  nameWidth: {
    width: "25%",
    justifyContent: "flex-start",
  },
  emailWidth: {
    width: "60%",
    justifyContent: "flex-start",
  },
  actionWidth: {
    width: "15%",
    flex: 1,
    alignItems: "flex-end",
  },
  actionMargin: {
    marginHorizontal: 8,
    flexDirection: "row",
    gap: 10,
  },
});

export default styles;
