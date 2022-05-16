import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

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

const RegisterPhone = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    phoneNo: "",
    name: "",
    password: "",
  });

  const showAlert = (alertMsg) =>
    Alert.alert(
      "Invalid Credentials",
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

  const handleSubmit = () => {
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(user.phoneNo) === false) {
      showAlert("You have entered an invalid Phone Number");
    } else if (user.password.length == 0) {
      showAlert("Password can't be empty.");
    } else {
      navigation.navigate("RegisterName", { user });
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
      <CircleButton />
      <View>
        <Text style={styles.heading}>Register</Text>
      </View>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        selectionColor={"black"}
        placeholder="Phone Number"
        nativeID="phoneNo"
        onChangeText={(newNumber) => {
          setUser({ ...user, phoneNo: newNumber });
        }}
      />

      <TouchableOpacity>
        <Text style={styles.link}>Send OTP</Text>
      </TouchableOpacity>

      <TextInput
        keyboardType="default"
        secureTextEntry={true}
        style={styles.input}
        selectionColor={"black"}
        placeholder="Password"
        nativeID="password"
        onChangeText={(newPwd) => {
          setUser({ ...user, password: newPwd });
        }}
      />

      <RectButton handlePress={handleSubmit} text="NEXT" />
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
  link: {
    color: "black",
    textDecorationLine: "underline",
    marginLeft: 17,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
  },
});

export default RegisterPhone;
