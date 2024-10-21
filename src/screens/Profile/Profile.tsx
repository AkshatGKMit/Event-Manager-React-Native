import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Button } from "react-native";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import styles from "./styles";

const Profile = ({ route }: ProfileScreenParamList) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const storageManager = AsyncStorageManager.getInstance();

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
    await storageManager.saveLoginUserId("");
    route.params.replace("Login");
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
        />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No user found. Please log in again.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, {user.name}!</Text>
      <Text>Email: {user.email}</Text>
      <Text>Username: {user.username}</Text>
      <Text>Gender: {user.gender}</Text>
      <Text>Age: {user.age}</Text>
      <Button
        title="Logout"
        onPress={handleLogout}
      />
    </View>
  );
};

export default Profile;
