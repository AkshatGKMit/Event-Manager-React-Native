import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventListNavigator from "./EventListNavigator";
import ProfileNavigator from "./ProfileNavigator";
import Header from "@components/Header/Header";
import Dashboard from "@screens/Dashboard/Dashboard";
import Icon from "@components/Icon";
import { ROUTES } from "@constants/routes";
import { Colors } from "@constants/constants";
import globalStyles from "@styles/global";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
      <Tab.Screen
        name={ROUTES.DASHBOARD}
        component={Dashboard}
        options={{
          header: () => <Header text="Dashboard" />,
          title: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <Icon
              family="MaterialIcons"
              name="dashboard"
              size={24}
              color={focused ? Colors.accent700 : Colors.black}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[globalStyles.tabBarLabel, { color: focused ? Colors.accent700 : Colors.black }]}>Dashboard</Text>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAINEVENTLIST}
        component={EventListNavigator}
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
          tabBarLabel: ({ focused }) => (
            <Text style={[globalStyles.tabBarLabel, { color: focused ? Colors.accent700 : Colors.black }]}>Event List</Text>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAINPROFILE}
        component={ProfileNavigator}
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
          tabBarLabel: ({ focused }) => (
            <Text style={[globalStyles.tabBarLabel, { color: focused ? Colors.accent700 : Colors.black }]}>Profile</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
