import { BottomTabBarProps, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
    Main: undefined;
  };

  type BottomTabsParamList = {
    Dashboard: undefined;
    EventList: undefined;
    Profile: {
      replace: (screen: keyof AuthStackParamList) => void;
    };
  };

  type LoginScreenParamList = NativeStackScreenProps<AuthStackParamList, "Login">;
  type SignUpScreenParamList = NativeStackScreenProps<AuthStackParamList, "SignUp">;
  type MainScreenParamList = NativeStackScreenProps<AuthStackParamList, "Main">;

  type DashboardScreenParamList = BottomTabScreenProps<BottomTabsParamList, "Dashboard">;
  type EventListScreenParamList = BottomTabScreenProps<BottomTabsParamList, "EventList">;
  type ProfileScreenParamList = BottomTabScreenProps<BottomTabsParamList, "Profile">;
}

export {};
