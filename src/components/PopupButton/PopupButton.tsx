import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";
import Icon from "@components/Icon";
import { Colors } from "@constants/constants";
import styles from "./styles";

const PopupButton = ({ label, items, onSelect, itemWidth, left }: PopupButtonProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const onChange = (idx: number) => {
    setIsFocus(false);
    onSelect(idx);
  };

  return (
    <View style={styles.popup}>
      <TouchableOpacity
        onPress={() => setIsFocus(!isFocus)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        <View style={[styles.dropdown]}>
          {typeof label === "string" ? (
            <>
              <Text style={[styles.ddValue]}>{label}</Text>
              <Icon
                family="Entypo"
                color={isFocus ? Colors.accent700 : Colors.black}
                name="chevron-small-down"
                size={12}
              />
            </>
          ) : (
            label
          )}
        </View>
      </TouchableOpacity>
      {isFocus ? (
        <View style={styles.outsideView}>
          <View style={styles.overlay} />
          <View style={[styles.dropdownList, { width: itemWidth, left: left }]}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={uuid.v1().toString()}
                style={[styles.data]}
                onPress={() => onChange(index)}
              >
                <Text style={styles.item}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : undefined}
    </View>
  );
};

export default PopupButton;
