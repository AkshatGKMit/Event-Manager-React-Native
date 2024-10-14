import { Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import Loader from "@components/Loader";
import { Colors } from "@constants/constants";
import styles from "./styles";

type ButtonScaleNOpacityType = {
  marginScale: number;
  opacity: number;
};

const GestureDetector = ({
  children,
  addOns,
  isDisabled = false,
  isLoading = false,
  styles: customStyles,
  onPress,
}: GestureDetectorProps) => {
  const [btnScaleNOpacity, setBtnScaleNOpacity] = useState<ButtonScaleNOpacityType>({
    opacity: 1,
    marginScale: 0,
  });

  const handlePressIn = () => {
    setBtnScaleNOpacity({ opacity: 0.75, marginScale: 2 });
  };

  const handlePressOut = () => {
    setBtnScaleNOpacity({
      opacity: 1,
      marginScale: 0,
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={isDisabled || isLoading ? undefined : onPress}
      onPressIn={isDisabled || isLoading ? undefined : handlePressIn}
      onPressOut={isDisabled || isLoading ? undefined : handlePressOut}
      disabled={isDisabled || isLoading}
    >
      <View
        style={[
          styles.button,
          customStyles,
          {
            opacity: btnScaleNOpacity.opacity,
            padding: btnScaleNOpacity.marginScale,
            backgroundColor: isDisabled ? Colors.grey : styles.button.backgroundColor,
            marginHorizontal: btnScaleNOpacity.marginScale,
          },
        ]}
      >
        {isLoading ? (
          <Loader
            animName="BallSpinFadeLoader"
            size={20}
          />
        ) : typeof children === "string" ? (
          <Text style={styles.text}>{children}</Text>
        ) : (
          children
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GestureDetector;
