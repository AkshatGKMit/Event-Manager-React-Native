import { BottomTabBarProps, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
  };

  type BottomTabParamList = {
    Home: undefined;
  };

  type LoginScreenParamList = NativeStackScreenProps<AuthStackParamList, "Login">;
  type SignUpScreenParamList = NativeStackScreenProps<AuthStackParamList, "SignUp">;

  type HomeScreenParamList = BottomTabScreenProps<BottomTabParamList, "Home">;
}

export {};
