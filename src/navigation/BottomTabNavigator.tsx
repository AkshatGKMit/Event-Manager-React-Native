import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "@constants/routes";
import { Home } from "@screens/index";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabNavigator = ({ navigation: { replace } }: MainScreenParamList) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{ headerShown: false }}
        initialParams={{ replace }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
