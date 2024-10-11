import { GestureResponderEvent, StyleProp, TextInputProps } from "react-native";

declare global {
	type TextFieldProps = {
		placeholder: string;
		value: string;
		onChangeText: (text: string) => void;
		label?: string;
		prefixIcon?: IconProps;
		suffixIcon?: IconProps;
		suffixIconButton?: IconBtnProps;
		isPassword?: boolean;
		styles?: StyleProp;
		errorMsg?: string;
		addOns?: TextInputProps;
	};

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
