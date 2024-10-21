import { ReactNode, useContext } from "react";
import { View, Text, Switch, Alert } from "react-native";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import SettingsContext from "@contexts/SettingsContext";
import Icon from "@components/Icon";
import PopupButton from "@components/PopupButton";
import globalStyles from "@styles/global";
import GestureDetector from "@components/GestureDetector";
import { Colors, filters } from "@constants/constants";
import styles from "./styles";

const SettingRow = ({ icon, label, end }: { icon: IconProps; label: string; end: ReactNode }) => {
  return (
    <View style={styles.setting}>
      <View style={styles.initials}>
        <Icon
          family={icon.family}
          name={icon.name}
          size={icon.size ?? 20}
        />
        <Text style={styles.buttonText}>{label}</Text>
      </View>
      {end}
    </View>
  );
};

const Settings = () => {
  const {
    changeDateFormat,
    changeDefaultFilter,
    changeTimeFormat,
    defaultFilter,
    is12HourTimeFormat,
    monthFirstDateTimeFormat,
    logOut,
  } = useContext(SettingsContext);

  const storageManager = AsyncStorageManager.getInstance();

  const dateFormats = ["DD/MM/YY", "MM/DD/YY"];

  function onFilterChange(idx: number) {
    switch (idx) {
      case 0:
        changeDefaultFilter("All");
        break;
      case 1:
        changeDefaultFilter("Next Month");
        break;
      case 2:
        changeDefaultFilter("Outdated");
        break;
      case 3:
        changeDefaultFilter("This Month");
        break;
      case 4:
        changeDefaultFilter("This Week");
        break;
      case 5:
        changeDefaultFilter("Upcoming");
        break;
      case 6:
        changeDefaultFilter("Today");
        break;
    }
  }

  function onDateFormatSelect(idx: number): void {
    if (idx) {
      changeDateFormat(true);
    } else {
      changeDateFormat(false);
    }
  }

  return (
    <View style={globalStyles.screen}>
      <View style={styles.content}>
        <SettingRow
          icon={{ family: "AntDesign", name: "filter" }}
          label="Events to display"
          end={
            <PopupButton
              items={filters}
              label={defaultFilter}
              onSelect={onFilterChange}
              itemWidth={125}
              left={-75}
            />
          }
        />
        <View style={[styles.separator]} />
        <SettingRow
          icon={{ family: "Fontisto", name: "date" }}
          label="Date Format"
          end={
            <PopupButton
              items={dateFormats}
              label={dateFormats[monthFirstDateTimeFormat ? 1 : 0]}
              onSelect={onDateFormatSelect}
              itemWidth={110}
              left={-25}
            />
          }
        />
        <View style={[styles.separator]} />
        <SettingRow
          icon={{ family: "Ionicons", name: "time-outline" }}
          label="12 Hour Clock Format"
          end={
            <Switch
              style={styles.switch}
              value={is12HourTimeFormat}
              onValueChange={changeTimeFormat}
            />
          }
        />

        <View style={[styles.separator]} />

        <View style={{ marginVertical: 20 }}>
          <GestureDetector
            children="Reset Data"
            onPress={() => {
              Alert.alert("Reset Data", "Are you sure you want to reset all data? This action cannot be undone.", [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => {
                    storageManager.resetData();
                    logOut();
                  },
                },
              ]);
            }}
            styles={{ backgroundColor: Colors.logout }}
          />
        </View>
      </View>
    </View>
  );
};

export default Settings;
