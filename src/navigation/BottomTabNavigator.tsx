import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/index";
import { ROUTES } from "@src/constants/routes";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.HOME}
        children={Home}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
