import { View, Text, TouchableOpacity, Modal } from "react-native";
import uuid from "react-native-uuid";
import Icon from "@components/Icon";
import styles from "./styles";

const FilterModal = ({ closeModal, selectedFilter, modalVisible, setFilter, filters }: FilterModalProps) => {
  const selectFilter = (filter: Filter) => {
    setFilter(filter);
    closeModal();
  };

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
    >
      <TouchableOpacity
        onPress={() => closeModal()}
        style={styles.overlay}
      >
        <View style={styles.modalView}>
          <Text style={styles.heading}>Select a filter for events</Text>
          <View style={styles.filters}>
            {filters.map((filter: Filter) => (
              <TouchableOpacity
                key={uuid.v1().toString()}
                style={[styles.filterButton, selectedFilter === filter ? styles.selected : undefined]}
                onPress={() => selectFilter(filter)}
              >
                {selectedFilter === filter && (
                  <Icon
                    family="FontAwesome"
                    name="caret-right"
                  />
                )}
                <Text>{filter}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={closeModal}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default FilterModal;
