import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Pressable, Text, View, Image, Linking } from "react-native";
import { myStyles as styles } from "../../styles/styles";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MenuScreen from "./MenuScreen";
import Title from "@/components/Title";

interface HomeScreenProps {
    onNext: () => void;
  }
  
  SplashScreen.preventAutoHideAsync();
  
  const HomeScreen: React.FC<HomeScreenProps> = ({ onNext }) => {
    let [fontsLoaded] = useFonts({
      Barlock: require("../../assets/fonts/Barlock.ttf"),
    });
  
    useEffect(() => {
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.rootContainer}>
          <View style={styles.titleContainer}>
            <Title>San Jose</Title>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../assets/images/SanJoseSign.jpg")} />
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.text} onPress={() => Linking.openURL("tel:9106402901")}>
              (910)-640-2901
            </Text>
            <Text style={styles.text} onPress={() => Linking.openURL("https://www.sanjosenc.com")}>
            Visit Our Website
            </Text>
            <Text
              style={styles.text}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/place/San+Jose+Mexican+Restaurant/@34.3065376,-78.7144089,17z/data=!3m1!4b1!4m6!3m5!1s0x89aa8b0fe2e32f85:0xb7acfb0b344620b0!8m2!3d34.3065376!4d-78.7144089!16s%2Fg%2F1tsyl172?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
                )
              }
            >
              Open in Google Maps
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable 
                onPress={onNext}
                android_ripple={{ color: 'white' }}
            >
                <Text style={styles.buttonText}>Go to Menu</Text>
            </Pressable>
           </View>
        </SafeAreaProvider>
      </>
    );
  };
  
  export default HomeScreen;