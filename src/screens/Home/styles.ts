import { Colors } from "@constants/constants";
import globalStyles from "@src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  loadingContainer: {
    ...globalStyles.flexCenter,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  errorText: {
    color: Colors.redError,
    fontSize: 18,
  },
});

export default styles;
