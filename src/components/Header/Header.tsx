import { View, Text } from "react-native";
import IconButton from "@components/IconButton";
import styles from "./style";

const Header = ({ text, back, isLeft = false }: { text: string; back?: () => void; isLeft?: boolean }) => {
  return (
    <View style={[styles.header, { justifyContent: isLeft ? "flex-start" : "center" }]}>
      {back && (
        <IconButton
          icon={{ family: "Feather", name: "arrow-left", size: 21 }}
          onPress={back}
        />
      )}
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

export default Header;
