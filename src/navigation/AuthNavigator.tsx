import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "@constants/routes";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import BottomTabNavigator from "./BottomTabNavigator";
import { Login, SignUp } from "@screens/index";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const storageManager = AsyncStorageManager.getInstance();
  const [loginUserId, setLoginUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoginUserId = async () => {
      const id = await storageManager.getLoginUserId();
      setLoginUserId(id || null);
      setLoading(false);
    };

    fetchLoginUserId();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <AuthStack.Navigator initialRouteName={loginUserId ? ROUTES.MAIN : ROUTES.LOGIN}>
      <AuthStack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.SIGNUP}
        component={SignUp}
        options={{ header: () => <></> }}
      />
      <AuthStack.Screen
        name={ROUTES.MAIN}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
