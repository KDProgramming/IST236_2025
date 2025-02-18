import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Pressable, Text, View } from "react-native";
import { myStyles as styles } from "../../styles/styles";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Title from "@/components/Title";
import MenuItems from "@/components/MenuItems";

SplashScreen.preventAutoHideAsync();

interface MenuScreenProps {
  onHome: () => void;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ onHome }) => {
  const insets = useSafeAreaInsets();

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

  const menuItems = [
    {
      name: "Birria Tacos",
      image: require("../../assets/images/BirriaTacos.jpg"),
      price: "$15.75",
    },
    {
      name: "Chipotle Enchiladas",
      image: require("../../assets/images/ChipotleEnchiladas.jpg"),
      price: "$12.00",
    },
    {
      name: "Fish Tacos",
      image: require("../../assets/images/FishTacos.jpg"),
      price: "$13.49",
    },
    {
      name: "Molcajete Marzo",
      image: require("../../assets/images/MolcajeteMarzo.jpg"),
      price: "$29.49",
    },
    {
      name: "Pollo Loco",
      image: require("../../assets/images/PolloLoco.jpg"),
      price: "$14.49",
    },
  ];

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={[
        styles.rootContainer, 
        { 
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }]}>
        <View style={styles.titleContainer}>
          <Title>Our Menu</Title>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <MenuItems name={item.name} image={item.image} price={item.price} />
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={onHome} android_ripple={{ color: "white" }}>
            <Text style={styles.buttonText}>Home</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MenuScreen;