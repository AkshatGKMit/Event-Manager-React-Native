import { Colors } from "@src/constants/constants";
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    padding: 10,
    backgroundColor: `${Colors.accent700}20`,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backButton: {
    width: 28,
    height: 28,
    padding: 2,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.black,
  },
  message: {
    fontSize: 12,
    marginTop: 2,
    marginEnd: 10,
    color: Colors.black,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "space-evenly",
    marginTop: 20,
    paddingHorizontal: 8,
  },
  inputWrapper: {
    paddingHorizontal: 10,
    flex: 1,
    gap: 15,
    paddingBottom: 20,
  },
  submit: {
    padding: 15,
  },
  attendeeWrapperView: {
    flex: 1,
  },
});

export default styles;
