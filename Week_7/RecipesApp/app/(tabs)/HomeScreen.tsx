import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Image } from "react-native";
import { myStyles as styles } from "../../styles/styles";
import * as SplashScreen from "expo-splash-screen";
import RecipesScreen from "./RecipesScreen";
import Title from "@/components/Title";
import NavButton from "@/components/NavButton";

interface HomeScreenProps {
    onNext: () => void;
  }
  
    SplashScreen.preventAutoHideAsync();
  
    const HomeScreen: React.FC<HomeScreenProps> = ({ onNext }) => {
    const insets = useSafeAreaInsets();

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
            }
         ]}>
            <View style={styles.titleContainer}>
                <Title>Recipe Collector</Title>
            </View>
            <View style={styles.imageContainer}>
                <Image 
                source={require("../../assets/images/RecipeStock.jpg")}
                style={styles.image}
                />
            </View>
            <View>
                <NavButton onNext={onNext}>Recipes</NavButton>
            </View>
         </SafeAreaView>
        </>
    );
  };
  
  export default HomeScreen;