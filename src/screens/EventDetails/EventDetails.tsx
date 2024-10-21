import { useCallback, useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import SettingsContext from "@contexts/SettingsContext";
import Icon from "@components/Icon";
import AttendeeWrapper from "@components/AttendeeWrapper";
import Loader from "@components/Loader";
import { Colors } from "@constants/constants";
import globalStyles from "@styles/global";
import styles from "./styles";

const EventDetails = ({
  navigation: { goBack, navigate },
  route: {
    params: { eventId },
  },
}: EventDetailsParamList) => {
  const isFocused = useIsFocused();

  const storageManager = AsyncStorageManager.getInstance();

  const { getDateString, getTimeString } = useContext(SettingsContext);

  const [event, setEvent] = useState<MainEvent | null>(null);
  const [focus, setFocus] = useState(true);

  const fetchEvent = () => {
    const events = storageManager.getEvents();
    const selectedEvent = events.find(({ id }: MainEvent) => id === eventId);
    if (selectedEvent) {
      setEvent(selectedEvent);
    }
  };

  useEffect(() => setFocus(isFocused), [isFocused]);

  useFocusEffect(useCallback(fetchEvent, [eventId, isFocused, focus]));

  const changeFocus = () => setFocus(!focus);

  if (event === null) {
    return (
      <Loader
        animName="LineSpinFadeLoader"
        size={30}
      />
    );
  }

  const getStartDate = () => {
    const { startDateTime: start } = event;
    const startDate = `${getDateString(start)} - ${getTimeString(start)}`;
    return startDate;
  };

  const getEndDate = () => {
    const { endDateTime: end } = event;
    const endDate = `${getDateString(end)} - ${getTimeString(end)}`;
    return endDate;
  };

  const deleteEvent = () => {
    Alert.alert(
      "Delete Attendee",
      "Are you sure you want to delete this attendee?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Deletion canceled"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            storageManager.deleteEventById(event.id);
            goBack();
          },
          style: "destructive",
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={globalStyles.screen}>
      <View style={styles.foreground}>
        <View style={styles.content}>
          <View style={styles.core}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{event.title}</Text>
            </View>
            <View style={styles.venue}>
              <Icon
                family="FontAwesome6"
                name="location-dot"
                size={16}
              />
              <Text style={styles.venueText}>{event.venue}</Text>
            </View>
            <View style={styles.dateWrapper}>
              <Text style={styles.dateHeading}>Starts at : </Text>
              <Text style={styles.date}>{getStartDate()}</Text>
            </View>

            <View style={styles.dateWrapper}>
              <Text style={styles.dateHeading}>Ends at : </Text>
              <Text style={styles.date}>{getEndDate()}</Text>
            </View>

            <View style={styles.dateWrapper}>
              <Text style={styles.dateHeading}>Max Attendees :</Text>
              <Text style={styles.date}>{event.attendeeLimit}</Text>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.descriptionHeading}>Description</Text>
              <Text style={styles.description}>{event.description}</Text>
            </View>
            <View style={styles.attendees}>
              <AttendeeWrapper
                currentEvent={event}
                labelColor={Colors.black}
                changeFocus={changeFocus}
              />
            </View>
            <View style={styles.bottomButtons}>
              <TouchableOpacity
                style={[styles.button, styles.redColor]}
                onPress={deleteEvent}
              >
                <Icon
                  family="MaterialCommunityIcons"
                  name="delete"
                  size={21}
                  color={Colors.white}
                />
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.blueColor]}
                onPress={() => navigate("AddEditEvent", { eventId: eventId })}
              >
                <Icon
                  family="FontAwesome"
                  name="edit"
                  size={21}
                  color={Colors.white}
                />
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventDetails;
