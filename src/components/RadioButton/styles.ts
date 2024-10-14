import { Colors } from "@src/constants/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	view: {
		position: "relative",
	},
	heading: {
		color: Colors.accent500,
		fontWeight: "700",
		fontSize: 16,
	},
	container: {
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		left: 50,
		bottom: -5,
	},
	itemLabel: {
		color: "grey",
	},
});

export default styles;
