import { useContext, useEffect, useState } from "react";
import { View, Text, Alert, ActivityIndicator, TextInput } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import IconButton from "@components/IconButton";
import { Colors, filters } from "@constants/constants";
import StepIndicator from "@components/StepIndicator/StepIndicator";
import { applyFilter } from "@helpers/date";
import SettingsContext from "@contexts/SettingsContext";
import PopupButton from "@components/PopupButton";
import Icon from "@components/Icon";
import globalStyles from "@styles/global";
import styles from "./styles";

const EventList = ({ navigation: { navigate } }: EventListScreenParamList) => {
  const isFocused = useIsFocused();
  const storageManager = AsyncStorageManager.getInstance();

  const { defaultFilter } = useContext(SettingsContext);

  const [isLoading, setIsLoading] = useState(true);
  const [filterOption, setFilterOption] = useState<Filter>("All");
  const [pageEvents, setPageEvents] = useState<MainEvents>([]);
  const [groupedEvents, setGroupedEvents] = useState<Record<string, MainEvent[]>>({});

  let debounceTimer: NodeJS.Timeout;

  function loadStart(time: number = 300) {
    return new Promise(resolve => {
      setTimeout(() => {
        setPageEvents(storageManager.events);
        setIsLoading(false);
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
  }, [storageManager.events, isFocused]);

  useEffect(() => {
    setEvents();
  }, [pageEvents, filterOption]);

  useEffect(() => {
    setFilterOption(defaultFilter);
  }, [defaultFilter]);

  function setEvents() {
    if (pageEvents) {
      const filteredEvents = applyFilter(pageEvents, filterOption);

      const newGroupedEvents = getUpcomingEvents(filteredEvents).reduce((acc, event) => {
        const date = new Date(event.startDateTime).toDateString();
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(event);
        return acc;
      }, {} as Record<string, MainEvent[]>);

      setGroupedEvents(newGroupedEvents);
    }
  }

  const getUpcomingEvents = (eventsList: MainEvent[]): MainEvent[] => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    return eventsList.sort(
      ({ startDateTime: event1DateTime }, { startDateTime: event2DateTime }) =>
        new Date(event1DateTime).getTime() - new Date(event2DateTime).getTime(),
    );
  };

  const searchFilter = (text: string) => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      if (text) {
        setPageEvents(_ => {
          return storageManager.events.filter(({ title }: MainEvent) => title.toLowerCase().includes(text.toLowerCase()));
        });
      } else {
        loadStart(0);
      }
    }, 500);
  };

  function onFilterChange(idx: number) {
    switch (idx) {
      case 0:
        setFilterOption("All");
        break;
      case 1:
        setFilterOption("Next Month");
        break;
      case 2:
        setFilterOption("Outdated");
        break;
      case 3:
        setFilterOption("This Month");
        break;
      case 4:
        setFilterOption("This Week");
        break;
      case 5:
        setFilterOption("Upcoming");
        break;
      case 6:
        setFilterOption("Today");
    }
  }

  if (isLoading)
    return (
      <View style={styles.screen}>
        <ActivityIndicator size={30} />
      </View>
    );

  return (
    <View style={globalStyles.screen}>
      <View style={styles.topBar}>
        <View style={styles.search}>
          <TextInput
            placeholder="Search event by name"
            onChangeText={searchFilter}
            style={styles.searchInput}
          />
        </View>
        <PopupButton
          items={filters}
          onSelect={onFilterChange}
          itemWidth={150}
          left={-100}
          label={
            <Icon
              family={"AntDesign"}
              name={"filter"}
              size={26}
            />
          }
        />
      </View>
      <Text style={styles.heading}>{filterOption === "Today" ? "Today's Events" : filterOption} Events</Text>
      <View style={styles.content}>
        <StepIndicator
          steps={groupedEvents}
          navigate={navigate}
        />
      </View>
      <IconButton
        icon={{ family: "Ionicons", name: "add", color: Colors.white, size: 45 }}
        onPress={() => navigate("AddEditEvent", {})}
        styles={styles.floatingActionButton}
      />
    </View>
  );
};

export default EventList;
