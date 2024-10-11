import { Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import Loader from "@components/Loader";
import { Colors } from "@constants/constants";
import styles from "./styles";

type ButtonScaleNOpacityType = {
	scale: number;
	opacity: number;
};

const GestureDetector = ({ children, addOns, isDisabled, isLoading, styles: customStyles }: GestureDetectorProps) => {
	const [btnScaleNOpacity, setBtnScaleNOpacity] = useState<ButtonScaleNOpacityType>({
		opacity: 1,
		scale: 0,
	});

	const handlePressIn = () => {
		setBtnScaleNOpacity({ opacity: 0.75, scale: 2 });
	};
	const handlePressOut = () => {
		setBtnScaleNOpacity({
			opacity: 1,
			scale: 0,
		});
	};

	return (
		<TouchableWithoutFeedback
			onPressIn={!isDisabled || !isLoading ? handlePressIn : undefined}
			onPressOut={!isDisabled || !isLoading ? handlePressOut : undefined}
			style={[
				styles.button,
				customStyles,
				{
					opacity: btnScaleNOpacity.opacity,
					margin: btnScaleNOpacity.scale,
					backgroundColor: isDisabled ? Colors.grey : styles.button.backgroundColor,
				},
			]}
			disabled={isDisabled || isLoading}
			{...addOns}
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
		</TouchableWithoutFeedback>
	);
};

export default GestureDetector;
