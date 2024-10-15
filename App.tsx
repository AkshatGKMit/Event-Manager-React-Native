import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "@navigation/Navigator";
import globalStyles from "@styles/global";

const App = () => {
  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
