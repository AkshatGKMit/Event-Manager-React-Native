import { ReactNode } from "react";
import {
  GestureResponderEvent,
  TouchableOpacityProps,
  StyleProp,
  TextInputProps,
  ActivityIndicatorProps,
} from "react-native";

declare global {
  type StringLiteral = "string";
  type NumberLiteral = number;
  type BooleanLiteral = boolean;

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
    children: ReactNode | StringLiteral;
    onPress: () => void;
    isDisabled?: boolean;
    isLoading?: boolean;
    addOns?: TouchableOpacityProps;
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

  type LoaderProps = {
    size?: number | "small" | "large";
    color?: string;
    styles?: StyleProp;
    addons?: ActivityIndicatorProps;
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
