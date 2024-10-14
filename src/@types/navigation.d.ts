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
    MainEventList: undefined;
    Profile: {
      replace: (screen: keyof AuthStackParamList) => void;
    };
  };

  type EventStackParamList = {
    EventList: undefined;
    AddEditEvent: { eventId?: string };
    EventDetails: { eventId: string };
  };

  type LoginScreenParamList = NativeStackScreenProps<AuthStackParamList, "Login">;
  type SignUpScreenParamList = NativeStackScreenProps<AuthStackParamList, "SignUp">;
  type MainScreenParamList = NativeStackScreenProps<AuthStackParamList, "Main">;

  type DashboardScreenParamList = BottomTabScreenProps<BottomTabsParamList, "Dashboard">;
  type ProfileScreenParamList = BottomTabScreenProps<BottomTabsParamList, "Profile">;

  type EventListScreenParamList = BottomTabScreenProps<EventStackParamList, "EventList">;
  type AddEditEventParamList = NativeStackScreenProps<EventStackParamList, "AddEditEvent">;
  type EventDetailsParamList = NativeStackScreenProps<EventStackParamList, "EventDetails">;
}

export {};
