import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "@constants/routes";
import { Profile } from "@screens/index";
import Dashboard from "@src/screens/Dashboard/Dashboard";
import EventList from "@src/screens/EventList/EventList";
import Icon from "@src/components/Icon";
import { Colors } from "@src/constants/constants";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabNavigator = ({ navigation: { replace } }: MainScreenParamList) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.DASHBOARD}
        component={Dashboard}
        options={{
          headerShown: false,
          title: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <Icon
              family="MaterialIcons"
              name="dashboard"
              size={24}
              color={focused ? Colors.accent700 : Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.EVENTLIST}
        component={EventList}
        options={{
          headerShown: false,
          title: "Event List",
          tabBarIcon: ({ focused }) => (
            <Icon
              family="MaterialIcons"
              name="event"
              size={24}
              color={focused ? Colors.accent700 : Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Icon
              family="Fontisto"
              name="person"
              size={24}
              color={focused ? Colors.accent700 : Colors.black}
            />
          ),
        }}
        initialParams={{ replace }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
