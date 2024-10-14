import { useRef, useState } from "react";
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import Icon from "@components/Icon";
import IconButton from "@components/IconButton";
import { Colors } from "@constants/constants";
import styles from "./styles";

const TextField = ({
  value,
  onChangeText,
  placeholder,
  styles: customStyle,
  prefixIcon,
  suffixIcon,
  errorMsg,
  label,
  addOns,
  suffixIconButton,
  isPassword,
}: TextFieldProps) => {
  const textInputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleFocus = () => {
    textInputRef.current?.focus();
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getColor = (isPlaceHolder = false) => {
    if (errorMsg) return isPlaceHolder ? Colors.placeholderError : Colors.redError;
    return isFocused
      ? isPlaceHolder
        ? Colors.accent600
        : Colors.accent700
      : isPlaceHolder
      ? Colors.placeholderColor
      : Colors.grey;
  };

  const showPassword = () => setPasswordVisibility(true);

  const hidePassword = () => setPasswordVisibility(false);

  return (
    <TouchableWithoutFeedback onPress={handleFocus}>
      <View style={styles.textfieldWrapper}>
        {label && <Text style={[styles.label, isFocused && styles.focused, errorMsg && styles.errorLabel]}>{label}</Text>}
        <View style={[styles.textfield, isFocused && styles.focused, errorMsg && styles.errorTextfield]}>
          {prefixIcon && (
            <Icon
              family={prefixIcon.family}
              name={prefixIcon.name}
              size={prefixIcon.size ?? 16}
              color={prefixIcon.color ?? getColor()}
            />
          )}
          <TextInput
            ref={textInputRef}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={getColor(true)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            secureTextEntry={!passwordVisibility}
            style={[styles.textInput, customStyle]}
            {...addOns}
          />
          {suffixIconButton ? (
            <IconButton
              icon={{
                family: isPassword ? "Entypo" : suffixIconButton.icon.family,
                name: isPassword ? (passwordVisibility ? "eye-with-line" : "eye") : suffixIconButton.icon.name,
                size: suffixIconButton.icon.size ?? 18,
                color: suffixIconButton.icon.color ?? getColor(),
              }}
              onPressIn={isPassword ? showPassword : suffixIconButton.onPressIn}
              onPressOut={isPassword ? hidePassword : suffixIconButton.onPressOut}
              onPress={suffixIconButton.onPress}
            />
          ) : (
            suffixIcon && (
              <Icon
                family={suffixIcon.family}
                name={suffixIcon.name}
                size={suffixIcon.size ?? 16}
                color={getColor()}
              />
            )
          )}
        </View>
        {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TextField;
