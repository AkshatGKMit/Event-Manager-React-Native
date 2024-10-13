import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/Login/Login";
import AuthNavigator from "@src/navigation/AuthNavigator";
import SignUp from "@src/screens/SignUp/SignUp";
import React from "react";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
