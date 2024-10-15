import { useState } from "react";
import { Text, View, Image } from "react-native";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import { LoginBackground } from "@assets/images";
import TextField from "@components/TextField";
import GestureDetector from "@components/GestureDetector";
import TextButton from "@components/TextButton";
import textFieldStyles from "@components/TextField/styles";
import styles from "./styles";

const Login = ({ navigation: { replace } }: LoginScreenParamList) => {
  const storageManager = AsyncStorageManager.getInstance();

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
      user =>
        (user.email.toLowerCase() === usernameOrEmail.toLowerCase() || user.username === usernameOrEmail) &&
        user.password === password,
    );

    if (user) {
      await storageManager.saveLoginUserId(user.id);
      replace("Home");
    } else {
      setLoginError("Invalid username/email or password.");
    }
  };

  return (
    <View style={styles.screen}>
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
        <TextButton
          text="Didn't have an account? Sign Up"
          onPress={() => replace("SignUp")}
          styles={styles.textButton}
        />
      </View>
    </View>
  );
};

export default Login;
