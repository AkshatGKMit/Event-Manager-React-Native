import { useState } from "react";
import { View, Text, Image } from "react-native";
import uuid from "react-native-uuid";
import { useForm } from "@hooks/useForm";
import AsyncStorageManager from "@storage/AsyncStorageManager";
import { SignInBackground as SignUpBackground } from "@src/assets/images";
import TextField from "@components/TextField";
import RadioButton from "@components/RadioButton";
import GestureDetector from "@components/GestureDetector";
import TextButton from "@components/TextButton";
import { initialSignUpData as initialSignUpData, signUpValidations } from "@constants/constants";
import styles from "./styles";

const SignUp = ({ navigation: { replace } }: SignUpScreenParamList) => {
  const handleOnSubmit = () => {
    const newId = uuid.v1().toString();
    const dataWithId: User = { ...data, id: newId };
    storageManager.addUser(dataWithId);
    (async function () {
      await storageManager.saveLoginUserId(newId);
      replace("Home");
    })();
  };

  const { data, errors, handleChangeText, handleSubmit, isLoadingOnSubmit } = useForm<User>({
    initialData: initialSignUpData,
    validations: signUpValidations,
    onSubmit: handleOnSubmit,
  });

  const storageManager = AsyncStorageManager.getInstance();

  const [isUsernameUnique, setIsUsernameUnique] = useState(false);
  const [isUsernameUniqueError, setIsUsernameUniqueError] = useState("");

  const [isEmailUnique, setIsEmailUnique] = useState(false);
  const [isEmailUniqueError, setIsEmailUniqueError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleChangeGender = (gender: string) => {
    handleChangeText("gender", gender);
  };

  const handleConfirmPassword = (pass: string) => {
    setConfirmPassword(pass);
    if (pass !== data.password) {
      setConfirmPasswordError("Password did not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const submitVerification = async () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm the password");
      return;
    }

    if (data.password !== confirmPassword) {
      setConfirmPasswordError("Password did not match");
      return;
    }

    const users = storageManager.getUsers();

    let emailExists = false;
    let usernameExists = false;

    users.every(({ email, username }: User) => {
      if (email === data.email) {
        emailExists = true;
        setIsEmailUnique(false);
        setIsEmailUniqueError("Email id is already registered");
        return;
      }

      if (username === data.username) {
        usernameExists = true;
        setIsUsernameUnique(false);
        setIsUsernameUniqueError("This username is already taken");
        return;
      }
    });

    if (!emailExists) {
      setIsEmailUnique(true);
      setIsEmailUniqueError("");
    }

    if (!usernameExists) {
      setIsUsernameUnique(true);
      setIsUsernameUniqueError("");
    }

    if (emailExists || usernameExists) return;

    handleSubmit();
    setIsEmailUnique(true);
    setIsEmailUniqueError("");
    setIsUsernameUnique(true);
    setIsUsernameUniqueError("");
    setConfirmPassword("");
    setConfirmPasswordError("");
  };

  return (
    <View style={styles.screen}>
      <Image
        source={SignUpBackground}
        style={styles.image}
      />
      <View style={styles.signUp}>
        <Text style={styles.heading}>Sign-Up</Text>
        <View style={styles.inputWrapper}>
          <TextField
            label="Name"
            placeholder="Enter name"
            prefixIcon={{ family: "Fontisto", name: "person" }}
            onChangeText={(text: string) => handleChangeText("name", text)}
            errorMsg={errors.name}
            value={data.name}
            addOns={{ autoFocus: true }}
          />
          <TextField
            label="Email Address"
            placeholder="Enter email address"
            textType="emailAddress"
            keyboardType="email-address"
            inputMode="email"
            prefixIcon={{ family: "Entypo", name: "email" }}
            onChangeText={(text: string) => handleChangeText("email", text)}
            errorMsg={!isEmailUnique ? isEmailUniqueError : errors.email}
            value={data.email}
          />
          <TextField
            label="Age"
            placeholder="Enter age"
            keyboardType="numeric"
            inputMode="numeric"
            prefixIcon={{ family: "MaterialIcons", name: "numbers" }}
            onChangeText={(text: string) => handleChangeText("age", text)}
            errorMsg={errors.age}
            value={data.age?.toString()}
          />
          <RadioButton
            heading="Gender"
            buttons={[
              { id: "Male", label: "Male", value: "Male" },
              { id: "Female", label: "Female", value: "Female" },
            ]}
            changeChecked={handleChangeGender}
            layout="row"
          />
          <TextField
            label="Username"
            placeholder="Enter Username"
            keyboardType="default"
            prefixIcon={{ family: "FontAwesome5", name: "user-circle" }}
            onChangeText={(text: string) => handleChangeText("username", text)}
            errorMsg={!isUsernameUnique ? isUsernameUniqueError : errors.username}
            value={data.username}
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
            prefixIcon={{ family: "MaterialIcons", name: "password" }}
            isPassword
            errorMsg={errors.password}
            onChangeText={(text: string) => handleChangeText("password", text)}
            value={data.password}
          />
          <TextField
            label="Confirm Password"
            placeholder="Confirm Password"
            prefixIcon={{ family: "MaterialIcons", name: "password" }}
            isPassword
            value={confirmPassword}
            onChangeText={handleConfirmPassword}
            errorMsg={confirmPasswordError}
          />
          <GestureDetector
            children="SignUp"
            onPress={submitVerification}
            isLoading={isLoadingOnSubmit}
            styles={styles.submit}
          />
        </View>
      </View>
      <TextButton
        text="Go to Login screen"
        onPress={() => replace("Login")}
        styles={styles.textButton}
      />
    </View>
  );
};

export default SignUp;
