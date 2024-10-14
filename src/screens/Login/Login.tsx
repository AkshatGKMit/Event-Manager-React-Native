import { useState } from "react";
import { Button, Text, View, Alert } from "react-native";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import TextField from "@components/TextField";
import GestureDetector from "@components/GestureDetector";
import textFieldStyles from "@src/components/TextField/styles";
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
      user => (user.email === usernameOrEmail || user.username === usernameOrEmail) && user.password === password,
    );

    if (user) {
      await storageManager.saveLoginUserId(user.id);
      replace("Main");
    } else {
      setLoginError("Invalid username/email or password.");
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Login to PlanIt</Text>
      <View style={styles.inputWrapper}>
        <Text style={textFieldStyles.error}>{loginError}</Text>
        <TextField
          placeholder="example@company.com"
          label="Email"
          prefixIcon={{ family: "MaterialCommunityIcons", name: "email" }}
          value={usernameOrEmail}
          onChangeText={text => handleOnChange("usernameOrEmail", text)}
          errorMsg={usernameOrEmailError}
        />
        <TextField
          placeholder="Enter Password"
          label="Password"
          prefixIcon={{ family: "MaterialIcons", name: "lock" }}
          isPassword
          value={password}
          onChangeText={text => handleOnChange("password", text)}
          errorMsg={passwordError}
        />
        <GestureDetector
          children="Login"
          onPress={handleLogin}
        />
      </View>
      <Button
        title="Go to SignUp screen"
        onPress={() => replace("SignUp")}
      />
    </View>
  );
};

export default Login;
