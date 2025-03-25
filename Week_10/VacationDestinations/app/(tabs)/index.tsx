import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./homeScreen";
import DestinationsOverview from "./destinationsOverview";
import { myStyles as styles } from "../../styles/styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Title from "@/components/Title";

const Stack = createNativeStackNavigator();

const Index = () => {
  
  const [fontsLoaded, fontError] = useFonts({
    HolidayIsland: require("../../assets/fonts/Holiday Island.ttf"),
  });

  useEffect(() => {
    async function prepareApp() {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }
    prepareApp();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerStyle: {backgroundColor: "#CDEDFD"},
            headerTintColor: "white",
            headerTitleStyle: {fontFamily: "HolidayIsland", fontSize: 40},
            contentStyle: {backgroundColor: "#DEC5E3"},
          }}
        >
          <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Destination Locations"
            }}
          />
          <Stack.Screen 
            name="DestinationsOverview"
            component={DestinationsOverview}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </>
  );
};

export default Index;
