import { ReactNode } from "react";
import {
  GestureResponderEvent,
  TouchableOpacityProps,
  StyleProp,
  TextInputProps,
  TouchableWithoutFeedbackProps,
  TextInput,
  StyleSheet,
  ViewStyle,
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
    styles?: StyleProp;
    onPressIn?: (ev?: GestureResponderEvent) => void;
    onPressOut?: (ev?: GestureResponderEvent) => void;
  };

  type GestureDetectorProps = {
    children: ReactNode | string;
    onPress: () => void;
    isDisabled?: boolean;
    isLoading?: boolean;
    addOns?: TouchableWithoutFeedbackProps;
    styles?: StyleProp<ViewStyle>;
  };

  type TextButtonProps = {
    text?: string;
    link: string;
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

  type DropdownItem = {
    id: string;
    label: string;
    value: string;
  };

  type DropdownItems = DropdownItem[];

  type SelectDropdownProps = {
    placeholder: string;
    data: DropdownItems;
    onChange: (item: DropdownItem) => void;
    value?: DropdownItem;
    label?: string;
    style?: StyleProp;
    placeholderStyle?: StyleProp;
    selectedTextStyle?: StyleProp;
    inputSearchStyle?: StyleProp;
    searchPlaceholder?: string;
    isSearch?: boolean;
    top?: number;
  };

  type PopupButtonProps = {
    label: string | ReactNode;
    items: string[];
    onSelect: (idx: number) => void;
    itemWidth?: number;
    left?: number;
  };

  type AttendeeWrapperProps = {
    labelColor?: string;
    currentEvent: MainEvent;
    maxHeight?: number;
    changeFocus?: () => void;
  };

  type AttendeeModalProps = {
    currentEvent?: MainEvent;
    modalVisible: boolean;
    closeModal: () => void;
    attendees: Attendees;
    attendeeId?: string;
    shouldSelect?: boolean;
  };

  type DateSelectorProps = {
    title: string;
    date: string;
    setDate: (date: Date) => void;
    mode: "date" | "datetime" | "time";
    open: boolean;
    setOpen: (value: boolean) => void;
    errorMsg?: string;
    minDate: Date;
  };

  type NavigateFunction = <T extends keyof EventStackParamList>(screen: T, params?: EventStackParamList[T]) => void;

  type StepIndicatorProps = {
    steps: Record<string, MainEvent[]>;
    navigate: NavigateFunction;
  };

  type Step = {
    title: string;
    events: MainEvents;
  };

  type Steps = Step[];

  type EventSummaryProps = {
    event: MainEvent;
    navigate: NavigateFunction;
  };

  type Filter = "All" | "Outdated" | "Upcoming" | "This Week" | "This Month" | "Next Month" | "Today";

  type Filters = Filter[];

  type FilterModalProps = {
    modalVisible: boolean;
    closeModal: () => void;
    setFilter: (filter: Filter) => void;
    selectedFilter: Filter;
    filters: Filters;
  };
}
