import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  screenHeading: {
    fontSize: 25,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  avatarView: {
    justifyContent: "center",
  },
  avatar: {
    backgroundColor: Colors.accent300,
    borderRadius: 120,
    height: 130,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  avatarText: {
    fontSize: 50,
    fontWeight: "700",
  },
  detailsWrapper: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  title: {
    fontSize: 16,
  },
  value: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: "600",
  },
  name: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.black,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.separator,
  },
  appButton: {
    width: "100%",
    gap: 8,
  },
  operateButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    fontSize: 20,
    backgroundColor: Colors.datePickerColor,
    borderRadius: 4,
  },
  buttonText: {
    color: Colors.black,
  },
  logout: { color: Colors.logout },
  white: {
    color: Colors.white,
  },

  removeImage: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 3,
    backgroundColor: Colors.redError,
    borderRadius: 100,
    padding: 6,
  },
  editImage: {
    position: "absolute",
    bottom: 6,
    right: 6,
    zIndex: 3,
    backgroundColor: Colors.accent700,
    borderRadius: 100,
    padding: 8,
  },
  image: {
    height: 130,
    width: 130,
    aspectRatio: 1,
    borderRadius: 100,
  },
});

export default styles;
