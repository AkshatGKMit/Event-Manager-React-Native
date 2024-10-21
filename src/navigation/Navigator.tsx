import { useContext } from "react";
import SettingsContext from "@contexts/SettingsContext";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";

const Navigator = () => {
  const { loading, loginUserId } = useContext(SettingsContext);

  if (loading) {
    return null;
  }

  return loginUserId ? <BottomTabNavigator /> : <AuthNavigator />;
};

export default Navigator;
