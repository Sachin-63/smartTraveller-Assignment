import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Img1 from "../assets/Img1.png";
import { vh } from "react-native-expo-viewport-units";

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
import { CircleButton } from "../components/Button";

const Home = () => {
  const navigation = useNavigation();

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
      <CircleButton
        handlePress={() => {
          navigation.goBack();
        }}
      />
      <View>
        <Text style={styles.heading}>Experiences</Text>
        <View style={{ flex: 1, padding: 16, borderRadius: 10 }}>
          <ImageBackground
            source={Img1}
            resizeMode="cover"
            style={styles.img}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.imgText}>Heeader</Text>
            <Text style={styles.imgText}>Price</Text>
            <Text style={styles.imgText}>Tag</Text>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "Comfortaa_600SemiBold",
    marginTop: 50,
    marginLeft: 16,
    marginBottom: 16,
  },
  img: {
    justifyContent: "center",
    height: vh(30),
  },
  imgText: {
    color: "#000000",
    fontSize: 25,
    fontFamily: "Comfortaa_600SemiBold",
    marginLeft: 12,
    lineHeight: 30,
  },
});

export default Home;
