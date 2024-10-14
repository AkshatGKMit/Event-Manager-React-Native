import { ReactNode } from "react";
import {
	GestureResponderEvent,
	TouchableOpacityProps,
	StyleProp,
	TextInputProps,
	TouchableWithoutFeedbackProps,
} from "react-native";

declare global {
	type TextFieldProps = {
		placeholder: string;
		value: string;
		onChangeText: (text: string) => void;
		textType?: "name" | "emailAddress" | "username";
		keyboardType?: "number-pad" | "email-address" | "default" | "numeric";
		inputMode?: "decimal" | "numeric" | "email" | "text";
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
		children: ReactNode | string;
		onPress: () => void;
		isDisabled?: boolean;
		isLoading?: boolean;
		addOns?: TouchableWithoutFeedbackProps;
		styles?: StyleProp;
	};

	type TextButtonProps = {
		text: string;
		onPress: () => void;
		isDisabled?: boolean;
		addOns?: TouchableWithoutFeedbackProps;
		styles?: StyleProp;
		textColor?: string;
	};

	type LoaderAnim =
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

	type LoaderProps = {
		animName: LoaderAnim;
		size: number;
		color?: string;
	};

	type RadioItemProp = {
		id: string;
		label: string;
		value: string | undefined;
	};

	type RadioItemProps = RadioItemProp[];

	type RadioButtonProps = {
		heading: string;
		buttons: RadioItemProps;
		changeChecked: (id: string) => void;
		layout?: "row" | "column";
	};
}
