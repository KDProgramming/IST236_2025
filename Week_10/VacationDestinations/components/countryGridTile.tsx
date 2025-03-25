import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ImageBackground, Text, Platform, Modal, Button, useWindowDimensions } from "react-native";
import { myStyles as styles } from "../styles/styles";
import * as SplashScreen from "expo-splash-screen";
import { FlatList, GestureHandlerRootView, Pressable } from "react-native-gesture-handler";
import Title from "@/components/Title";
import NavButton from "@/components/NavButton";
import { COUNTRIES } from "../data/dummy-data"
import { LinearGradient } from "expo-linear-gradient";

interface CountryGridTileProps {
    name: "";
    color: "";
    onPress: () => void;
}

SplashScreen.preventAutoHideAsync();

const CountryGridTile: React.FC<CountryGridTileProps> = ({ name, color, onPress }) => {
    const insets = useSafeAreaInsets();

    return (
        <>
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
                <View style={styles.gridItem}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            pressed ? styles.buttonPressed : null
                        ]}
                        android_ripple={{ color: "#81F7E5" }}
                        onPress={onPress}
                    >
                        <LinearGradient
                            colors={[color, color, color, color, color, "#DEC5E3"]}
                            style={styles.innerContainer}
                        >
                            <Text style={styles.name}>{name}</Text>
                        </LinearGradient>
                    </Pressable>
                </View>

            </SafeAreaView>
        </>
    );
};

export default CountryGridTile;
