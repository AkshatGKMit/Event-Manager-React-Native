import { ReactNode } from "react";
import { GestureResponderEvent, TouchableOpacityProps, StyleProp, TextInputProps } from "react-native";

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

	type GestureDetectorProps = {
		children?: ReactNode | string;
		isDisabled?: boolean;
		isLoading?: boolean;
		addOns?: TouchableOpacityProps;
		styles?: StyleProp;
	};

	type LoaderAnims =
		| "BallPulse"
		| "BallGridPulse"
		| "BallClipRotate"
		| "SquareSpin"
		| "BallClipRotatePulse"
		| "BallClipRotateMultiple"
		| "BallPulseRise"
		| "BallRotate"
		| "CubeTransition"
		| "BallZigZag"
		| "BallZigZagDeflect"
		| "BallTrianglePath"
		| "BallScale"
		| "LineScale"
		| "LineScaleParty"
		| "BallScaleMultiple"
		| "BallPulseSync"
		| "BallBeat"
		| "LineScalePulseOut"
		| "LineScalePulseOutRapid"
		| "BallScaleRipple"
		| "BallScaleRippleMultiple"
		| "BallSpinFadeLoader"
		| "LineSpinFadeLoader"
		| "TriangleSkewSpin"
		| "Pacman"
		| "BallGridBeat"
		| "SemiCircleSpin";

	type LoaderPorops = {
		animName: LoaderAnims;
		size: number;
		color?: string;
	};
}
