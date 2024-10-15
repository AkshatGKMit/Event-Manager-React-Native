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
  inputMode,
  keyboardType,
  textType,
}: TextFieldProps) => {
  const textInputRef = useRef<TextInput>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const renderLabel = () => {
    if (value) {
      return <Text style={[styles.label, isFocus && styles.focused, errorMsg && styles.errorLabel]}>{label}</Text>;
    }
    return null;
  };

  const handleFocus = () => {
    textInputRef.current?.focus();
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const getColor = (isPlaceHolder = false) => {
    if (errorMsg) return isPlaceHolder ? Colors.placeholderError : Colors.redError;
    return isFocus
      ? isPlaceHolder
        ? `${Colors.accent700}60`
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
        {renderLabel()}
        <View style={[styles.textfield, isFocus && styles.focused, errorMsg && styles.errorTextfield]}>
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
            textContentType={textType ?? "name"}
            keyboardType={keyboardType ?? "default"}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            inputMode={inputMode ?? "text"}
            autoComplete="off"
            placeholderTextColor={getColor(true)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            secureTextEntry={isPassword && !passwordVisibility}
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
