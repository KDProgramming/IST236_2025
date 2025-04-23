import React, { useState } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { myStyles as styles } from "../../styles/styles";
import Title from "@/components/Title";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Image, Text } from "react-native";

type RootTabParamList = {
    Home: undefined;
    Sleep: undefined;
    Workout: undefined;
    Diet: undefined;
    ToDo: undefined;
    Explore: undefined;
  };

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootTabParamList, 'Home'>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/images/wellness.jpg')} />
        </View>
        <View style={styles.infoContainer1}>
            <Text style={styles.infoText}>Welcome to Daily Wellness!</Text>
            <Text style={styles.infoText}>Your Daily Wellness tracker, where you can enter any information you'd like to keep track of and come back to view it or track your progress!</Text>
            <Text style={styles.infoText}>This app features 6 screens! The home screen, which you're on now. The Sleep screen, the Workout screen, the Diet screen, the To Do screen, and the Explore screen.</Text>
            <Text style={styles.infoText}>Feel free to look around!</Text>
        </View>
      </SafeAreaView>
      </GestureHandlerRootView>
  );
};

export default HomeScreen;
