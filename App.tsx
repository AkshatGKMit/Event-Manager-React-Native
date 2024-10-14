import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "@src/navigation";

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
