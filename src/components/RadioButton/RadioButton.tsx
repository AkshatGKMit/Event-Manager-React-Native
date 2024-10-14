import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import RadioGroup, { RadioButtonProps as RadioProp } from "react-native-radio-buttons-group";
import styles from "./styles";
import { Colors } from "@src/constants/constants";

const RadioButton = ({ buttons, changeChecked, layout, heading }: RadioButtonProps) => {
	const [selectedId, setSelectedId] = useState<string>(buttons[0].label);
	const [radioProps, setRadioProps] = useState<RadioProp[]>([]);

	useEffect(() => {
		setRadioProps(_ =>
			buttons.map<RadioProp>(({ id, label, value }: RadioItemProp) => {
				const isSelected = selectedId === id;

				const radio: RadioProp = {
					id,
					label,
					value,
					borderColor: isSelected ? Colors.accent700 : Colors.grey,
					color: isSelected ? Colors.accent700 : Colors.grey,
					labelStyle: [
						styles.itemLabel,
						{ color: isSelected ? Colors.accent700 : Colors.grey, fontWeight: isSelected ? "900" : "normal" },
					],
					borderSize: 2,
					size: 20,
					selected: isSelected,
					onPress(id: string) {
						changeChecked(id);
						setSelectedId(id);
					},
				};
				return radio;
			}),
		);
	}, []);

	return (
		<View style={styles.view}>
			<Text style={styles.heading}>{heading}</Text>
			<RadioGroup
				accessibilityLabel="Gender"
				containerStyle={styles.container}
				labelStyle={[styles.itemLabel]}
				radioButtons={radioProps}
				onPress={setSelectedId}
				selectedId={selectedId}
				layout={layout ?? "column"}
			/>
		</View>
	);
};

export default RadioButton;
