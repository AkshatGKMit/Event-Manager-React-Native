import { Text, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

const TextButton = ({ text, addOns, isDisabled = false, styles: customStyles, onPress, link }: TextButtonProps) => {
  return (
    <Text style={[styles.text, customStyles, isDisabled ? styles.isDisabled : undefined]}>
      {`${text} `}
      <TouchableWithoutFeedback
        onPress={onPress}
        disabled={isDisabled}
        {...addOns}
      >
        <Text style={styles.link}>{link}</Text>
      </TouchableWithoutFeedback>
    </Text>
  );
};

export default TextButton;
