import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";
import Icon from "@components/Icon";
import { Colors } from "@constants/constants";
import globalStyles from "@styles/global";
import textFieldStyles from "@components/TextField/styles";
import styles from "./styles";

const SelectDropdown = ({ placeholder, value, data, onChange, label, style, top }: SelectDropdownProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value) {
      return <Text style={textFieldStyles.label}>{label}</Text>;
    }
    return null;
  };

  const handleSelect = (item: DropdownItem) => {
    onChange(item);
    setIsFocus(false);
  };

  return (
    <View style={style}>
      {renderLabel()}
      <TouchableOpacity
        onPress={() => setIsFocus(!isFocus)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        <View style={[styles.dropdown, globalStyles.inputBorder, isFocus ? styles.focusDd : undefined]}>
          <Text style={[styles.ddValue, !value ? styles.placeholder : undefined]}>{value ? value.label : placeholder}</Text>
          <Icon
            family="Entypo"
            color={isFocus ? Colors.accent700 : Colors.black}
            name="chevron-small-down"
            size={20}
          />
        </View>
      </TouchableOpacity>
      {isFocus ? (
        <ScrollView
          style={[styles.dropdownList, { top: top ?? 70 }]}
          showsVerticalScrollIndicator={false}
        >
          {data.map(item => (
            <TouchableOpacity
              key={uuid.v1().toString()}
              style={styles.data}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.dataText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : undefined}
    </View>
  );
};

export default SelectDropdown;
