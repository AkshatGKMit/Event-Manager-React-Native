import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "@constants/routes";
import { Login, SignUp } from "@screens/index";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.SIGNUP}
        component={SignUp}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
