import { View, Text } from "react-native";
import styles from "./styles";
import IconButton from "@src/components/IconButton";
import { Colors } from "@src/constants/constants";

const EventList = ({ navigation: { navigate } }: EventListScreenParamList) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>EventList</Text>
      <IconButton
        icon={{ family: "Ionicons", name: "add", color: Colors.white, size: 42 }}
        onPress={() => navigate("AddEditEvent", {})}
        styles={styles.floatingActionButton}
      />
    </View>
  );
};

export default EventList;
