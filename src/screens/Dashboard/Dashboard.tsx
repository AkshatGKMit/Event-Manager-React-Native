import { useEffect, useState } from "react";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import globalStyles from "@styles/global";
import styles from "./styles";

const DashboardCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <View style={[styles.card, styles.shadowStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueView}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const Dashboard = () => {
  const storageManager = AsyncStorageManager.getInstance();
  const isFocused = useIsFocused();

  const [events, setEvents] = useState<MainEvents>([]);
  const [attendees, setAttendees] = useState<Attendees>([]);
  const [loading, setLoading] = useState(true);

  function loadStart(time: number = 300) {
    return new Promise(resolve => {
      setTimeout(() => {
        setEvents(storageManager.events);
        setAttendees(storageManager.attendees);
        setLoading(false);
      }, time);
    });
  }

  useEffect(() => {
    async function loadAsyncData() {
      try {
        await loadStart();
      } catch (error) {
        Alert.alert("Error", "An unexpected error occured");
      }
    }

    loadAsyncData();
  }, [storageManager.events, storageManager.users, storageManager.attendees, isFocused]);

  const getUpcomingEvents = (): MainEvents => {
    const now = new Date();
    const upcomingEvents = events.filter(({ startDateTime }: MainEvent) => new Date(startDateTime) > now);
    return upcomingEvents;
  };

  const getCompletedEvents = (): MainEvents => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const completedEvents = events.filter(({ startDateTime }: MainEvent) => new Date(startDateTime) <= now);
    return completedEvents;
  };

  if (loading)
    return (
      <View style={[globalStyles.screen, styles.loadingView]}>
        <ActivityIndicator size={30} />
      </View>
    );

  return (
    <View style={[globalStyles.screen, styles.dashboard]}>
      <View style={styles.cards}>
        <View style={styles.row}>
          <DashboardCard
            label="Total Events"
            value={events.length.toString()}
          />
          <DashboardCard
            label="Upcoming Events"
            value={getUpcomingEvents().length.toString()}
          />
        </View>
        <View style={styles.row}>
          <DashboardCard
            label="Outdated Events"
            value={getCompletedEvents().length.toString()}
          />
          <DashboardCard
            label="Total Attendees"
            value={attendees.length.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
