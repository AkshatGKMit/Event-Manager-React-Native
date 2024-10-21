import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SettingsContext from "@src/contexts/SettingsContext";
import styles from "./styles";

const EventSummary = ({ event, navigate }: EventSummaryProps) => {
  const { id, title, startDateTime, endDateTime, venue, attendeeIds } = event;

  const { getTimeString } = useContext(SettingsContext);

  return (
    <TouchableOpacity onPress={() => navigate("EventDetails", { eventId: id })}>
      <View style={styles.event}>
        <View style={styles.summaryWrapper}>
          <Text style={styles.eventTitle}>{title}</Text>
          <Text style={styles.eventTime}>
            {getTimeString(startDateTime)} - {getTimeString(endDateTime)}
          </Text>
          <Text style={styles.eventVenue}>{venue}</Text>
        </View>
        <View style={styles.attendeeCount}>
          <Text style={styles.count}>{attendeeIds.length}</Text>
          <Text style={styles.attendeeText}>Attendees</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventSummary;
