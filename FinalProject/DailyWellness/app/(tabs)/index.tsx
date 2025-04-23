import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Import Stack Navigator
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { myStyles as styles } from "../../styles/styles";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./homeScreen";
import SleepScreen from "./sleepScreen";
import WorkoutScreen from "./workoutsScreen";
import DietScreen from "./dietScreen";
import TodoScreen from "./toDoScreen";
import ExploreScreen from "./ExploreScreen";

import InfoViewModal from "../../Modals/infoViewModal";

const Tab = createBottomTabNavigator();
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

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              options={{ headerShown: false }}
            >
              {() => (
                <Tab.Navigator
                  initialRouteName="Home"
                  screenOptions={({ route }) => ({
                    headerStyle: { backgroundColor: "#CDEDFD" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                      fontFamily: "HolidayIsland",
                      fontSize: 32,
                    },
                    tabBarStyle: {
                      backgroundColor: "#CDEDFD",
                    },
                    tabBarLabelStyle: {
                      fontFamily: "HolidayIsland",
                      fontSize: 14,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName: string = "";

                      switch (route.name) {
                        case "Home":
                          iconName = focused ? "home" : "home-outline";
                          break;
                        case "Sleep":
                          iconName = focused ? "moon" : "moon-outline";
                          break;
                        case "Workout":
                          iconName = focused ? "barbell" : "barbell-outline";
                          break;
                        case "Diet":
                          iconName = focused ? "nutrition" : "nutrition-outline";
                          break;
                        case "ToDo":
                          iconName = focused ? "checkmark-circle" : "checkmark-circle-outline";
                          break;
                        case "Explore":
                          iconName = focused ? "compass" : "compass-outline";
                          break;
                      }

                      return <Ionicons name={iconName as any} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "gray",
                  })}
                >
                  <Tab.Screen name="Home" component={HomeScreen} />
                  <Tab.Screen name="Sleep" component={SleepScreen} />
                  <Tab.Screen name="Workout" component={WorkoutScreen} />
                  <Tab.Screen name="Diet" component={DietScreen} />
                  <Tab.Screen name="ToDo" component={TodoScreen} />
                  <Tab.Screen name="Explore" component={ExploreScreen} />
                </Tab.Navigator>
              )}
            </Stack.Screen>
          </Stack.Navigator>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Index;
