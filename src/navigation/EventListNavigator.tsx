import { useLayoutEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "@components/Header/Header";
import AddEditEvent from "@screens/AddEditEvent/AddEditEvent";
import EventDetails from "@screens/EventDetails/EventDetails";
import EventList from "@screens/EventList/EventList";
import { ROUTES } from "@constants/routes";

const EventStack = createNativeStackNavigator<EventStackParamList>();

const EventListNavigator = ({ navigation, route }: MainEventScreenParamList) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? ROUTES.EVENTLIST;
    navigation.setOptions({
      tabBarStyle: { display: routeName === ROUTES.EVENTLIST ? "flex" : "none" },
    });
  }, [navigation, route]);

  return (
    <EventStack.Navigator>
      <EventStack.Screen
        options={{
          header: () => <Header text="Event List" />,
        }}
        name={ROUTES.EVENTLIST}
        component={EventList}
      />
      <EventStack.Screen
        options={{ headerShown: false }}
        name={ROUTES.ADDEDITEVENT}
        component={AddEditEvent}
      />
      <EventStack.Screen
        options={{
          header: ({ navigation: { goBack } }) => (
            <Header
              back={goBack}
              text="Event Details"
              isLeft
            />
          ),
        }}
        name={ROUTES.EVENTDETAILS}
        component={EventDetails}
      />
    </EventStack.Navigator>
  );
};

export default EventListNavigator;
