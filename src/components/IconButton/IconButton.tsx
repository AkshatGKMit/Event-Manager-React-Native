import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import Icon from "../Icon";

const IconButton = ({ icon: { family, name, color, size }, onPress, onPressIn, onPressOut }: IconBtnProps) => {
	return (
		<Pressable
			onPress={onPress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
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
