import { View, Text } from "react-native";
import IconButton from "@components/IconButton";
import { Colors } from "@constants/constants";
import styles from "./styles";
import globalStyles from "@styles/global";

const Attendee = ({ attendee, onEdit, onDelete }: { attendee: Attendee; onEdit: () => void; onDelete: () => void }) => {
  return (
    <View style={[styles.main]}>
      <View style={styles.details}>
        <Text style={styles.name}>{attendee.name}</Text>
        <Text style={styles.email}>{attendee.email}</Text>
      </View>
      <View style={[styles.actions, globalStyles.flexRow]}>
        <IconButton
          icon={{ family: "Feather", name: "edit", size: 21, color: Colors.black }}
          onPress={onEdit}
        />
        <IconButton
          icon={{ family: "MaterialIcons", name: "delete", size: 21, color: Colors.logout }}
          onPress={onDelete}
        />
      </View>
    </View>
  );
};

export default Attendee;
