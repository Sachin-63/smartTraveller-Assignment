import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RectButton, CircleButton } from "../components/Button";

import { useNavigation } from "@react-navigation/native";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";

const RegisterName = ({ route }) => {
  const { user } = route.params;

  const [userWN, setUserWN] = useState(user);

  const navigation = useNavigation();

  const showAlert = (alertMsg) =>
    Alert.alert(
      "Alert",
      alertMsg,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );

  const fetchApi = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mob: userWN.phoneNo, name: userWN.name }),
    };

    const response = await fetch(
      "https://ap-south-1.aws.data.mongodb-api.com/app/smarttraveller-zapex/endpoint/signup",
      requestOptions
    );

    let parsedData = await response.json();
    console.log(parsedData);

    if (parsedData == null) {
      showAlert("User already exist");
    } else {
      navigation.navigate("Home");
    }
  };

  const handleSubmit = () => {
    if (userWN.name.length == 0) {
      showAlert("Name can't be empty");
    } else {
      fetchApi();
    }
  };

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <CircleButton handlePress={() => navigation.goBack()} />
      <View>
        <Text style={styles.heading}>Register</Text>
      </View>
      <TextInput
        keyboardType="default"
        style={styles.input}
        selectionColor={"black"}
        placeholder="Name"
        onChangeText={(newName) => {
          setUserWN({ ...userWN, name: newName });
        }}
      />
      <RectButton handlePress={handleSubmit} text="SIGN UP" />
      <Text style={{ margin: 16 }}>
        By signing up, you agree to Photo’s
        <Text style={{ textDecorationLine: "underline" }}>
          {" "}
          Terms of Service
        </Text>{" "}
        and{" "}
        <Text style={{ textDecorationLine: "underline" }}>
          {" "}
          Privacy Policy
        </Text>{" "}
        .
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontFamily: "Comfortaa_600SemiBold",
    marginTop: 50,
    marginLeft: 16,
    marginBottom: 16,
  },
  input: {
    padding: 10,
    margin: 16,
    height: 60,
    fontSize: 15,
    borderColor: "black",
    borderWidth: 2,
    fontFamily: "Comfortaa_600SemiBold",
  },
});

export default RegisterName;
