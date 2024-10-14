import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "@src/constants/routes";
import AddEditEvent from "@src/screens/AddEditEvent/AddEditEvent";
import EventList from "@src/screens/EventList/EventList";

const EventStack = createNativeStackNavigator<EventStackParamList>();

const EventListNavigator = () => {
  return (
    <EventStack.Navigator>
      <EventStack.Screen
        name={ROUTES.EVENTLIST}
        component={EventList}
        options={{ headerShown: false, navigationBarHidden: true }}
      />
      <EventStack.Screen
        name={ROUTES.ADDEDITEVENT}
        component={AddEditEvent}
        options={{ header: () => <></> }}
      />
    </EventStack.Navigator>
  );
};

export default EventListNavigator;
