import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "@screens/Settings/Settings";
import Profile from "@screens/Profile/Profile";
import Header from "@components/Header/Header";
import { ROUTES } from "@constants/routes";
import { useLayoutEffect } from "react";

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigator = ({ navigation, route }: MainProfileScreenParamList) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    navigation.setOptions({
      tabBarStyle: { display: routeName === "Settings" ? "none" : "flex" },
    });
  }, [navigation, route]);

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          header: () => <Header text="Profile" />,
        }}
      />
      <ProfileStack.Screen
        name={ROUTES.SETTINGS}
        component={Settings}
        options={{
          header: ({ navigation: { goBack } }) => (
            <Header
              back={goBack}
              text="Settings"
              isLeft
            />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
