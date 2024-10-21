import { View, Text, TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import textFieldStyles from "@components/TextField/styles";
import styles from "./styles";
import Icon from "../Icon";
import globalStyles from "@src/styles/global";

const DateSelector = ({ title, date, setDate, mode, open, setOpen, errorMsg, minDate }: DateSelectorProps) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={[styles.button, globalStyles.inputBorder]}
      >
        <Text style={styles.text}>{title}</Text>
        <Icon
          family="Fontisto"
          name="date"
          size={15}
        />
      </TouchableOpacity>
      <DatePicker
        modal
        mode={mode}
        open={open}
        date={new Date(date)}
        minimumDate={new Date(minDate)}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      {errorMsg && <Text style={textFieldStyles.error}>{errorMsg}</Text>}
    </View>
  );
};

export default DateSelector;
