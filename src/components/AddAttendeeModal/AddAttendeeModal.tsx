import { useEffect } from "react";
import { View, Text, Modal, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import uuid from "react-native-uuid";
import { useForm } from "@hooks/useForm";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import { attendeeValidations, Colors, initialAttendeeData } from "@constants/constants";
import SelectDropdown from "@components/SelectDropdown";
import TextField from "@components/TextField";
import Icon from "@components/Icon";
import styles from "./styles";

const AddAttendeeModal = ({
  currentEvent,
  attendeeId,
  attendees,
  modalVisible,
  closeModal,
  shouldSelect,
}: AttendeeModalProps) => {
  const onSubmit = () => {
    const emailExists = storageManager.getAttendees().find(({ email }: Attendee) => email === data.email);
    if (!attendeeId) {
      if (emailExists) {
        setErrors({ email: "Email id already exists" });
      } else {
        const newId = uuid.v4().toString();
        const newAttendee: Attendee = { ...data, id: newId };

        storageManager.addAttendee(newAttendee);
        if (currentEvent && currentEvent?.id !== "") {
          storageManager.addAttendeeIdToEvent(currentEvent.id, newAttendee.id);
        } else if (currentEvent && currentEvent?.id === "") {
          currentEvent?.attendeeIds.push(newAttendee.id);
        }
      }
    } else {
      const globalAttendeeToUpdate = storageManager.getAttendees().find(({ id }: Attendee) => id === attendeeId);
      if (globalAttendeeToUpdate) {
        storageManager.updateAttendee({ ...data, id: globalAttendeeToUpdate.id });
      }
    }

    closeModal();
  };

  const { data, errors, handleChangeText, handleSubmit, setData, setErrors } = useForm<Attendee>({
    initialData: initialAttendeeData,
    onSubmit: onSubmit,
    validations: attendeeValidations,
  });

  const storageManager = AsyncStorageManager.getInstance();

  useEffect(() => {
    const attendeeToUpdate = storageManager.getAttendees().find(({ id }: Attendee) => id === attendeeId);
    if (attendeeToUpdate) {
      setData({ name: attendeeToUpdate.name, email: attendeeToUpdate.email, id: uuid.v1().toString() });
    }
  }, [attendeeId]);

  const attendeesAsDropdown: DropdownItems =
    attendees.map(({ name, email, id }: Attendee) => ({ label: name, value: email, id })) ?? [];

  const handleOnSelect = (item: DropdownItem) => {
    const selectedAttendee = storageManager.getAttendees().find(({ id }: Attendee) => id === item.id);
    if (selectedAttendee) {
      if (currentEvent && currentEvent?.id !== "") {
        storageManager.addAttendeeIdToEvent(currentEvent.id, selectedAttendee.id);
      } else if (currentEvent && currentEvent?.id === "") {
        currentEvent?.attendeeIds.push(selectedAttendee.id);
      }
    }
    closeModal();
  };

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
    >
      <TouchableOpacity
        onPress={closeModal}
        style={[styles.barrier]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalView}
        >
          <TouchableOpacity
            style={styles.closeButton}
            onPress={closeModal}
          >
            <Icon
              family={"MaterialCommunityIcons"}
              name={"close-box"}
              size={24}
              color={Colors.black}
            />
          </TouchableOpacity>
          {shouldSelect && !!attendees.length && (
            <>
              <Text style={styles.heading}>Select an attendee</Text>
              <View style={styles.dropdownView}>
                <SelectDropdown
                  data={attendeesAsDropdown}
                  onChange={handleOnSelect}
                  placeholder="--Select--"
                  style={styles.dropdown}
                  isSearch
                  searchPlaceholder="Search by name"
                  top={50}
                />
              </View>
              <View style={styles.separator}>
                <View style={styles.dash}></View>
                <Text style={styles.or}>OR</Text>
                <View style={styles.dash}></View>
              </View>
            </>
          )}
          <Text style={styles.heading}>{attendeeId ? "Update" : "Add"} Attendee</Text>
          <View style={styles.addAttendeeView}>
            <TextField
              label="Name"
              value={data.name}
              onChangeText={(text: string) => handleChangeText("name", text)}
              placeholder="Enter name"
              errorMsg={errors.name}
            />
            <TextField
              label="Email"
              value={data.email}
              onChangeText={(text: string) => handleChangeText("email", text)}
              placeholder="Enter email"
              errorMsg={errors.email}
            />
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={closeModal}
                style={[styles.button, styles.clearButton]}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmit}
                style={[styles.button, styles.submitButton]}
              >
                <Text style={styles.buttonText}>{attendeeId ? "Save" : "Add"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddAttendeeModal;
