import { View, Text } from "react-native";
import styles from "./styles";
import IconButton from "@src/components/IconButton";

const EventList = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>EventList</Text>
      <IconButton
        icon={{ family: "Ionicons", name: "add" }}
        onPress={() => {}}
      />
    </View>
  );
};

export default EventList;
