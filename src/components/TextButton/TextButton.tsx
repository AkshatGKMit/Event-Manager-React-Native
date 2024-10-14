import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";

const TextButton = ({ text, addOns, isDisabled = false, styles: customStyles, onPress }: TextButtonProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      disabled={isDisabled}
      {...addOns}
    >
      <View>
        <Text style={[styles.text, customStyles, isDisabled && styles.isDisabled]}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TextButton;
