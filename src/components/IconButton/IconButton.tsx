import React from "react";
import { Pressable } from "react-native";
import Icon from "@components/Icon";

const IconButton = ({ icon: { family, name, color, size }, onPress, styles, onPressIn, onPressOut }: IconBtnProps) => {
  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={styles}
    >
      <Icon
        family={family}
        name={name}
        color={color}
        size={size}
      />
    </Pressable>
  );
};

export default IconButton;
