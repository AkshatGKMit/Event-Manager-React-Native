import { View, Text } from "react-native";
import { useForm } from "@src/hooks/useForm";
import styles from "./styles";
import { eventValidations, initialEventData } from "@src/constants/constants";
import TextField from "@src/components/TextField";
import TextFieldStyles from "@components/TextField/styles";
import { Dropdown } from "react-native-element-dropdown";
import SelectDropdown from "@src/components/SelectDropdown";

const AddEditEvent = ({}: AddEditEventParamList) => {
  const { data, errors, handleChangeText, handleSubmit, isLoadingOnSubmit } = useForm<MainEvent>({
    initialData: initialEventData,
    validations: eventValidations,
    onSubmit: () => {},
  });

  const attendeeLimit = parseInt(data.attendeeLimit);

  return (
    <View style={styles.screen}>
      <View style={styles.inputWrapper}>
        <TextField
          label="Title"
          value={data.title}
          onChangeText={text => handleChangeText("title", text)}
          placeholder="Enter title"
          textType="name"
          errorMsg={errors.title}
          addOns={{ autoFocus: true }}
        />
        <View>
          <Text style={[TextFieldStyles.label]}>Start Date & Time</Text>
          <View></View>
        </View>
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
          label="Attendee Limits"
          value={data.attendeeLimit}
          onChangeText={text => handleChangeText("attendeeLimit", text)}
          placeholder="Enter attendee limit"
          keyboardType="numeric"
          inputMode="numeric"
          errorMsg={errors.title}
        />
        <SelectDropdown />
      </View>
    </View>
  );
};

export default AddEditEvent;
