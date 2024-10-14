import { useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Colors } from "@constants/constants";
import styles from "./styles";

const TextButton = ({ text, addOns, isDisabled = false, styles: customStyles, onPress }: TextButtonProps) => {
  const [isPressIn, setIsPressIn] = useState(false);

  const handlePressIn = () => setIsPressIn(true);

  const handlePressOut = () => setIsPressIn(false);

  return (
    <View style={styles.outsideView}>
      <TouchableWithoutFeedback
        onPress={isDisabled ? undefined : onPress}
        onPressIn={isDisabled ? undefined : handlePressIn}
        onPressOut={isDisabled ? undefined : handlePressOut}
        disabled={isDisabled}
        {...addOns}
      >
        <View>
          <Text
            style={[
              styles.text,
              customStyles,
              {
                color: isDisabled ? `${Colors.grey}44` : styles.text.color,
                backgroundColor: isPressIn ? `${Colors.accent700}30` : "#00000000",
              },
            ]}
          >
            {text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TextButton;
