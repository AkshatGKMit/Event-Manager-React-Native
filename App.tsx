import { useEffect } from "react";
import { Appearance, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SettingsContextProvider } from "@contexts/SettingsContext";
import Navigator from "@navigation/Navigator";
import { Colors } from "@constants/constants";

const App = () => {
  useEffect(() => {
    Appearance.setColorScheme("light");
  }, []);

  return (
    <SettingsContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          animated
          backgroundColor={Colors.accent700}
          barStyle="light-content"
        />
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaView>
    </SettingsContextProvider>
  );
};

export default App;
