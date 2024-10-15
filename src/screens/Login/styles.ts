import { Colors } from "@constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
  },
  image: {
    width: 250,
    height: 250,
  },
  loginScreen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginWrapper: {
    flex: 1,
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
