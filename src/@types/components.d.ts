import { GestureResponderEvent, StyleProp, TextInputProps } from "react-native";

declare global {

	type IconFamily =
		| "AntDesign"
		| "Entypo"
		| "EvilIcons"
		| "Feather"
		| "FontAwesome"
		| "FontAwesome5"
		| "FontAwesome6"
		| "Fontisto"
		| "Foundation"
		| "Ionicons"
		| "MaterialCommunityIcons"
		| "MaterialIcons"
		| "Octicons"
		| "SimpleLineIcons"
		| "Zocial";

	type IconProps = {
		family: IconFamily;
		name: string;
		size?: number;
		color?: string;
	};

	type IconBtnProps = {
		icon: IconProps;
		onPress: (ev?: GestureResponderEvent) => void;
		onPressIn?: (ev?: GestureResponderEvent) => void;
		onPressOut?: (ev?: GestureResponderEvent) => void;
	};
}
