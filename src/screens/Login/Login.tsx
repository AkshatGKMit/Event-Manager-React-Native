import { useContext, useState } from "react";
import { Text, View, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import SettingsContext from "@contexts/SettingsContext";
import TextField from "@components/TextField";
import GestureDetector from "@components/GestureDetector";
import textFieldStyles from "@components/TextField/styles";
import TextButton from "@components/TextButton";
import { LoginBackground } from "@assets/images";
import globalStyles from "@styles/global";
import styles from "./styles";

const Login = ({ navigation: { navigate } }: LoginScreenParamList) => {
  const storageManager = AsyncStorageManager.getInstance();

  const { login } = useContext(SettingsContext);

  const [loginError, setLoginError] = useState("");

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [usernameOrEmailError, setUsernameOrEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const allUsers = storageManager.getUsers();

  const handleOnChange = (key: "usernameOrEmail" | "password", text: string) => {
    setLoginError("");
    if (key === "usernameOrEmail") {
      setUsernameOrEmail(text);
      setUsernameOrEmailError("");
    } else if (key === "password") {
      setPassword(text);
      setPasswordError("");
    }
  };

  const validateInputs = () => {
    let isValid = true;

    if (!usernameOrEmail) {
      setUsernameOrEmailError("Username or email is required.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;

    const user = allUsers.find(
      user => (user.email === usernameOrEmail || user.username === usernameOrEmail) && user.password === password,
    );

    if (user) {
      await storageManager.saveLoginUserId(user.id);
      login(user.id);
    } else {
      setLoginError("Invalid username/email or password.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[globalStyles.screen, styles.screen]}
    >
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={LoginBackground}
          style={styles.image}
        />
        <View style={styles.loginScreen}>
          <View style={styles.loginWrapper}>
            <Text style={styles.heading}>Login</Text>
            <View style={styles.inputWrapper}>
              <Text style={textFieldStyles.error}>{loginError}</Text>
              <TextField
                placeholder="Enter Username or Email"
                label="Username/Email"
                prefixIcon={{ family: "Entypo", name: "email" }}
                value={usernameOrEmail}
                onChangeText={(text: string) => handleOnChange("usernameOrEmail", text)}
                errorMsg={usernameOrEmailError}
              />
              <TextField
                placeholder="Enter Password"
                label="Password"
                prefixIcon={{ family: "MaterialIcons", name: "lock" }}
                isPassword
                value={password}
                onChangeText={(text: string) => handleOnChange("password", text)}
                errorMsg={passwordError}
              />
              <GestureDetector
                children="Login"
                onPress={handleLogin}
                styles={styles.submit}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <TextButton
        text="Didn't have an account?"
        link="Sign Up"
        onPress={() => navigate("SignUp")}
        styles={styles.textButton}
      />
    </KeyboardAvoidingView>
  );
};

export default Login;
