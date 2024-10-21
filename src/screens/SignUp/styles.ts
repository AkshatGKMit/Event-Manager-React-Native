import { Colors } from "@constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  image: {
    width: "100%",
    height: 75,
  },
  signUp: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    gap: 30,
  },
  heading: {
    color: Colors.accent700,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  inputWrapper: {
    width: "100%",
    gap: 15,
  },
  textButton: {
    fontWeight: "400",
    fontSize: 14,
    marginBottom: 10,
  },
  submit: {
    marginTop: 10,
  },
  content: {
    flex: 1,
    gap: 20,
  },
  scrollView: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

export default styles;
