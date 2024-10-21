import { useEffect, useState } from "react";
import { Alert, Text, View, ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import IconButton from "@components/IconButton";
import Attendee from "@components/Attendee";
import AddAttendeeModal from "@components/AddAttendeeModal";
import { Colors } from "@constants/constants";
import textFieldStyles from "@components/TextField/styles";
import styles from "./styles";

const AttendeeWrapper = ({ currentEvent, labelColor, maxHeight, changeFocus }: AttendeeWrapperProps) => {
  const isFocused = useIsFocused();

  const storageManager = AsyncStorageManager.getInstance();

  const [attendees, setAttendees] = useState<Attendees>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [updatingAttendeeIdx, setUpdatingAttendeeIdx] = useState(-1);

  const reEffect = () => {
    const allAttendees = storageManager.getAttendees();

    const filteredAttendees = allAttendees.filter(({ id }) => currentEvent.attendeeIds?.includes(id));

    setAttendees(filteredAttendees);
  };

  useEffect(() => {
    reEffect();
  }, [isFocused, currentEvent.attendeeIds?.length]);

  const showModal = () => {
    setModalVisible(true);
    changeFocus?.();
  };
  const closeModal = () => {
    setModalVisible(false);
    setUpdatingAttendeeIdx(-1);
    reEffect();
    changeFocus?.();
  };

  const existingIdsSet = new Set(currentEvent.attendeeIds);

  const availableAttendees = storageManager
    .getAttendees()
    .filter(({ id: filterId }: Attendee) => !existingIdsSet.has(filterId));

  const isUnderLimit = currentEvent?.attendeeIds?.length < parseInt(currentEvent?.attendeeLimit);

  function deleteAttendee(index: number): void {
    Alert.alert(
      "Delete Attendee",
      "Are you sure you want to delete this attendee?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            const updatedAttendeeIds = currentEvent.attendeeIds.filter((_, idx) => idx !== index);
            currentEvent.attendeeIds = updatedAttendeeIds;

            if (currentEvent.id !== "")
              storageManager
                .removeAttendeeIdFromEvent(currentEvent.id, currentEvent.attendeeIds[index])
                .then(() => changeFocus?.());
            reEffect();
          },
          style: "destructive",
        },
      ],
      { cancelable: false },
    );
  }

  function updateAttendee(index: number): void {
    setUpdatingAttendeeIdx(index);
    showModal();
  }

  return (
    <>
      <View style={styles.attendeeWrapper}>
        <View style={styles.heading}>
          <Text style={[textFieldStyles.label, { color: labelColor ?? Colors.grey }]}>Attendees</Text>
          {isUnderLimit && (
            <IconButton
              icon={{ family: "Ionicons", name: "add-circle", size: 20 }}
              onPress={showModal}
            />
          )}
        </View>

        {!currentEvent.attendeeIds?.length ? (
          <View style={styles.noAttendees}>
            <Text>No Attendee to display</Text>
          </View>
        ) : (
          <ScrollView
            style={[styles.addedAttendees, { maxHeight: maxHeight }]}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
          >
            {currentEvent.attendeeIds.map((id: string, index: number) => {
              const attendee = storageManager.getAttendees().find(({ id: attendeeId }: Attendee) => id === attendeeId);
              if (!attendee) return <></>;
              return (
                <Attendee
                  key={`${attendee.id}`}
                  attendee={attendee}
                  onDelete={() => deleteAttendee(index)}
                  onEdit={() => updateAttendee(index)}
                />
              );
            })}
          </ScrollView>
        )}
      </View>

      {modalVisible && (
        <AddAttendeeModal
          attendeeId={updatingAttendeeIdx !== -1 ? currentEvent.attendeeIds[updatingAttendeeIdx] : undefined}
          attendees={availableAttendees}
          modalVisible={modalVisible}
          currentEvent={currentEvent}
          closeModal={closeModal}
          shouldSelect={updatingAttendeeIdx === -1}
        />
      )}
    </>
  );
};

export default AttendeeWrapper;
