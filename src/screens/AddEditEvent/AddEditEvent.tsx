import { useContext, useEffect, useState } from "react";
import { View, Text, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import uuid from "react-native-uuid";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import { useForm } from "@hooks/useForm";
import SettingsContext from "@contexts/SettingsContext";
import TextField from "@components/TextField";
import TextFieldStyles from "@components/TextField/styles";
import AttendeeWrapper from "@components/AttendeeWrapper";
import DateSelector from "@components/DateSelector";
import GestureDetector from "@components/GestureDetector";
import SelectDropdown from "@components/SelectDropdown";
import Loader from "@components/Loader";
import IconButton from "@components/IconButton";
import { Colors, eventValidations, initialEventData, venues } from "@constants/constants";
import { minEndDate, minStartDate } from "@helpers/date";
import { filterAvailableVenues } from "@helpers/events";
import styles from "./styles";

const AddEditEvent = ({
  navigation: { goBack },
  route: {
    params: { eventId },
  },
}: AddEditEventParamList) => {
  const { data, errors, handleChangeText, handleSubmit, setData } = useForm<MainEvent>({
    initialData: initialEventData,
    validations: eventValidations,
    onSubmit: onSubmit,
  });

  const storageManager = AsyncStorageManager.getInstance();

  const { getDateString, getTimeString } = useContext(SettingsContext);

  const [isLoading, setIsLoading] = useState(false);

  const [events, setEvents] = useState<MainEvents>([]);

  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);

  function getEventId() {
    if (eventId) {
      setIsLoading(true);

      const updatingEvent = storageManager.getEvents().find(({ id }: MainEvent) => eventId === id);
      if (updatingEvent) {
        setData(updatingEvent);
      }
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setData({ ...initialEventData, attendeeIds: [] });
  }, []);

  useEffect(() => {
    const asyncEffect = async () => {
      const allEvents = storageManager.getEvents();
      setEvents(allEvents);
    };

    getEventId();
    asyncEffect();
  }, [storageManager]);

  const setStartDate = (newDate: Date) => {
    let newEndDate = new Date(data.endDateTime);
    if (newDate > new Date(data.endDateTime)) {
      newEndDate = new Date(newDate);
      newEndDate.setTime(newEndDate.getTime() + 10 * 60 * 1000);
      Alert.alert("Auto Update End Date", "The end date has been updated to match the new start date.", [{ text: "OK" }]);
    }

    setData({ ...data, startDateTime: newDate, endDateTime: newEndDate });
  };

  const setEndDate = (date: Date) => {
    const startDate = new Date(data.startDateTime);
    const newDate = new Date(date);

    if (newDate < startDate) {
      Alert.alert("Invalid End Date", "The end date cannot be before the start date.", [{ text: "OK" }]);
      return;
    }

    const isEndDate10MinAhead = newDate <= new Date(startDate.getTime() + 10 * 60 * 1000);
    if (data.startDateTime && isEndDate10MinAhead) {
      Alert.alert("Invalid End Date", "The end date and time must be at least 10 minutes after the start date and time.");
      return;
    }

    setData({ ...data, endDateTime: newDate });
  };

  function handleOnChangeVenue({ value }: DropdownItem): void {
    handleChangeText("venue", value);
  }

  const availableVenues = filterAvailableVenues(events, data.startDateTime, data.endDateTime, venues);
  const updatedVenues = () => {
    availableVenues.unshift({ label: data.venue, value: data.venue, id: data.venue });
    return availableVenues;
  };

  function handleChangeAttendee(text: string): void {
    const limit = parseInt(text);
    if (limit < data.attendeeIds.length) {
      Alert.alert(
        "Limit Exceeded",
        `You currently have ${data.attendeeIds.length} attendees. Please reduce the number of attendees before setting the limit to ${limit}.`,
        [{ text: "OK" }],
      );
    } else {
      handleChangeText("attendeeLimit", text);
    }
  }

  function handleOnClickAddEvent(): void {
    if (!data.attendeeIds.length) {
      Alert.alert("No Attendees Selected", "Please select at least one attendee or cancel the event.", [{ text: "OK" }]);
      return;
    }

    if (data.startDateTime > data.endDateTime) {
      Alert.alert("Invalid Date Range", "The start date and time must be before the end date and time.", [{ text: "OK" }]);
      return;
    }

    handleSubmit();
  }

  function onSubmit(): void {
    const newId = uuid.v1().toString();
    const dataWithId: MainEvent = { ...data, id: eventId ?? newId };
    if (eventId) {
      storageManager.updateEvent(dataWithId);
    } else {
      storageManager.addEvent(dataWithId);
    }
    goBack();
  }

  if (isLoading)
    return (
      <Loader
        animName="BallBeat"
        size={30}
      />
    );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      >
        <View style={styles.header}>
          <View style={styles.heading}>
            <IconButton
              icon={{ family: "Feather", name: "arrow-left", size: 20, color: Colors.black }}
              onPress={goBack}
            />
            <Text style={styles.title}>{`${eventId ? "Update" : "Add"} Event`}</Text>
          </View>
          <Text style={styles.message}>
            {eventId
              ? "Enter the details to update the existing event."
              : "Please fill in the details below to create a new event."}
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.inputWrapper}>
            <TextField
              label="Title"
              value={data.title}
              onChangeText={text => handleChangeText("title", text)}
              placeholder="Enter title"
              textType="name"
              errorMsg={errors.title}
            />
            <View>
              <Text style={[TextFieldStyles.label]}>Start Date</Text>
              <DateSelector
                title={`${getDateString(data.startDateTime)} - ${getTimeString(data.startDateTime)}`}
                date={data.startDateTime?.toString() ?? new Date().toString()}
                setDate={setStartDate}
                mode="datetime"
                minDate={minStartDate()}
                open={startDateOpen}
                setOpen={setStartDateOpen}
              />
            </View>
            <View>
              <Text style={[TextFieldStyles.label]}>End Date</Text>
              <DateSelector
                title={`${getDateString(data.endDateTime)} - ${getTimeString(data.endDateTime)}`}
                date={data.endDateTime?.toString() ?? new Date().toString()}
                setDate={setEndDate}
                mode="datetime"
                minDate={minEndDate()}
                open={endDateOpen}
                setOpen={setEndDateOpen}
              />
            </View>
            <SelectDropdown
              data={eventId ? updatedVenues() : availableVenues}
              value={{ label: data.venue, value: data.venue, id: data.venue }}
              onChange={handleOnChangeVenue}
              placeholder="Select Venue"
              searchPlaceholder="Search Venue"
              label="Venue"
              isSearch
            />
            <TextField
              label="Description"
              value={data.description}
              onChangeText={text => handleChangeText("description", text)}
              placeholder="Enter description"
              textType="name"
              errorMsg={errors.description}
              addOns={{ numberOfLines: 3 }}
            />
            <TextField
              label="Attendee Limit"
              value={data.attendeeLimit}
              onChangeText={text => handleChangeAttendee(text)}
              placeholder="Enter attendee limit"
              keyboardType="numeric"
              inputMode="numeric"
              errorMsg={errors.title}
            />
            <View style={styles.attendeeWrapperView}>
              <AttendeeWrapper
                currentEvent={data}
                maxHeight={135}
              />
            </View>
          </View>
        </View>
        <View style={styles.submit}>
          <GestureDetector
            children={`${eventId ? "Save" : "Add"}`}
            onPress={handleOnClickAddEvent}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddEditEvent;
