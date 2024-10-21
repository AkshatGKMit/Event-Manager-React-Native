import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  foreground: {
    flex: 1,
    gap: 20,
  },
  backButton: {
    width: "100%",
    height: 28,
    padding: 2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 20,
  },
  topText: {
    fontSize: 18,
    fontWeight: "700",
  },
  content: {
    flex: 1,
  },
  core: {
    flex: 1,
    backgroundColor: Colors.datePickerColor,
    padding: 10,
    borderRadius: 20,
  },
  others: {
    flex: 1,
    padding: 10,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 26,
    fontWeight: "700",
    color: Colors.black,
  },
  dateWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  dateHeading: {
    color: Colors.black,
    fontWeight: "600",
  },

  date: {
    fontSize: 13,
  },
  venue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  venueText: {
    fontSize: 16,
  },
  descriptionWrapper: {
    gap: 2,
  },
  descriptionHeading: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    color: Colors.black,
  },
  description: {},
  attendees: {
    marginTop: 20,
    flex: 1,
  },
  maxAttendeesHeading: {
    color: Colors.black,
    fontWeight: "700",
  },
  bottomButtons: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    gap: 20,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 10,
    gap: 5,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "700",
  },
  redColor: {
    backgroundColor: Colors.deleteColor,
  },
  blueColor: {
    backgroundColor: Colors.accent400,
  },
});

export default styles;
