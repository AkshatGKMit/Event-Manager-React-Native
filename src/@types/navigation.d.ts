import { BottomTabBarProps, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
    Main: undefined;
  };

  type BottomTabsParamList = {
    Home: {
      replace: (screen: keyof AuthStackParamList) => void;
    };
  };

  type LoginScreenParamList = NativeStackScreenProps<AuthStackParamList, "Login">;
  type SignUpScreenParamList = NativeStackScreenProps<AuthStackParamList, "SignUp">;
  type MainScreenParamList = NativeStackScreenProps<AuthStackParamList, "Main">;

  type HomeScreenParamList = BottomTabScreenProps<BottomTabsParamList, "Home">;
}

export {};
