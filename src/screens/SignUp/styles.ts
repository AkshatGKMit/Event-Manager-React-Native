import { Colors } from "@constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: Colors.white,
  },
  image: {
    width: "100%",
    height: 75,
  },
  signUp: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignItems: "center",
    gap: 30,
  },
  heading: {
    color: Colors.accent700,
    fontWeight: "bold",
    fontSize: 30,
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
});

export default styles;
