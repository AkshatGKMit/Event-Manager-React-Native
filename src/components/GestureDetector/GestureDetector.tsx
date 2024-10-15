import { Text, TouchableOpacity, View } from "react-native";
import Loader from "@components/Loader";
import { isString } from "@constants/constants";
import styles from "./styles";

const GestureDetector = ({
  children,
  addOns,
  isDisabled = false,
  isLoading = false,
  styles: customStyles,
  onPress,
}: GestureDetectorProps) => {
  return (
    <TouchableOpacity
      onPress={isLoading ? undefined : onPress}
      disabled={isDisabled || isLoading}
      activeOpacity={0.75}
      {...addOns}
    >
      <View style={[styles.button, customStyles]}>
        {isLoading ? <Loader size={20} /> : isString(children) ? <Text style={styles.text}>{children}</Text> : children}
      </View>
    </TouchableOpacity>
  );
};

export default GestureDetector;
