import { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Button, TouchableOpacity, Alert, Image } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import SettingsContext from "@contexts/SettingsContext";
import Icon from "@components/Icon";
import IconButton from "@components/IconButton";
import { Colors } from "@constants/constants";
import styles from "./styles";

const Profile = ({ navigation: { navigate } }: ProfileScreenParamList) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const storageManager = AsyncStorageManager.getInstance();
  const { logOut } = useContext(SettingsContext);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = await storageManager.getLoginUserId();

      if (userId) {
        const allUsers = storageManager.getUsers();
        const loggedInUser = allUsers.find(user => user.id === userId);
        setUser(loggedInUser || null);
      }

      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            await storageManager.saveLoginUserId("");
            logOut();
          },
        },
      ],
      { cancelable: false },
    );
  };

  if (loading || !user) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color={Colors.accent700}
        />
      </View>
    );
  }

  const { name, email, username, gender, age } = user;

  const removeImage = () => {
    setUser({ ...user, image: undefined });
    storageManager.updateUser({ ...user, image: undefined });
  };

  const editImage = async () => {
    const pickImage = await launchImageLibrary({ mediaType: "photo", includeBase64: true, quality: 0.5 });

    if (pickImage.assets) {
      setUser({ ...user, image: pickImage.assets[0].base64 });
      storageManager.updateUser({ ...user, image: pickImage.assets[0].base64 });
    } else if (pickImage.errorMessage) {
      Alert.alert(
        `Error ${pickImage.errorCode}`,
        pickImage.errorMessage,
        [
          {
            text: "Ok",
            style: "default",
          },
        ],
        { cancelable: false },
      );
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarView}>
            <View style={styles.avatar}>
              {user.image ? (
                <>
                  <Image
                    source={{ uri: `data:image/jpeg;base64,${user.image}` }}
                    height={130}
                    width={130}
                    style={styles.image}
                  />
                  <View style={styles.removeImage}>
                    <IconButton
                      icon={{ family: "Entypo", name: "trash", color: Colors.white, size: 15 }}
                      onPress={removeImage}
                    />
                  </View>
                </>
              ) : (
                <Text style={styles.avatarText}>{name[0]}</Text>
              )}
              <View style={styles.editImage}>
                <IconButton
                  icon={{ family: "FontAwesome", name: "camera", color: Colors.white, size: 15 }}
                  onPress={editImage}
                />
              </View>
            </View>
          </View>
          <View style={styles.detailsWrapper}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.detail}>
              <Text style={styles.title}>Email:</Text>
              <Text style={styles.value}>{email}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.title}>Username:</Text>
              <Text style={styles.value}>{username}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.title}>Gender:</Text>
              <Text style={styles.value}>{gender}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.title}>Age:</Text>
              <Text style={styles.value}>{age} Years</Text>
            </View>
          </View>
        </View>
        <View style={styles.appButton}>
          <View style={[styles.separator, { backgroundColor: `${Colors.grey}30` }]} />
          <TouchableOpacity
            style={styles.operateButton}
            onPress={() => navigate("Settings")}
          >
            <Icon
              family={"Ionicons"}
              name={"settings-sharp"}
              size={20}
            />
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
          <View style={[styles.separator, { backgroundColor: `${Colors.grey}30` }]} />
          <TouchableOpacity
            style={[styles.operateButton]}
            onPress={handleLogout}
          >
            <Icon
              family={"MaterialCommunityIcons"}
              name={"logout"}
              size={20}
              color={Colors.logout}
            />
            <Text style={[styles.buttonText, styles.logout]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
