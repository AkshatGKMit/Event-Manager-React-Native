import { Colors } from "@constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    marginTop: 20,
  },
  loginScreen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginWrapper: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  heading: {
    color: Colors.accent700,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 30,
  },
  inputWrapper: {
    width: "100%",
    gap: 15,
  },
  textButton: {
    marginTop: "auto",
    fontWeight: "400",
    fontSize: 14,
  },
  submit: {
    marginTop: 10,
  },
  content: {
    flex: 1,
  },
});

export default styles;
