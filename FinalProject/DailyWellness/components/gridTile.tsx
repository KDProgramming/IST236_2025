import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ImageBackground, Text, Platform, Modal, Button, useWindowDimensions } from "react-native";
import { myStyles as styles } from "../styles/styles";
import * as SplashScreen from "expo-splash-screen";
import { FlatList, GestureHandlerRootView, Pressable } from "react-native-gesture-handler";
import Title from "@/components/Title";
import NavButton from "@/components/NavButton";
import { TILE } from "../data/dummy-data"
import { LinearGradient } from "expo-linear-gradient";
import InfoViewModal from "@/Modals/infoViewModal";
import Tile from "@/Models/tileInfo";

interface GridTileProps {
    name: "";
    color: "";
    onPress: () => void;
    id: string;
    link1: string;
    link2: string;
    link3: string;
    listIndex: number;
}

SplashScreen.preventAutoHideAsync();

const GridTile: React.FC<GridTileProps> = ({ 
    name, 
    color, 
    onPress,
    id,
    link1,
    link2,
    link3,
    listIndex,
}) => {
    const insets = useSafeAreaInsets();

    const [modalIsVisible, setModalIsVisible] = useState(false);

    function viewInfoHandler() {
    setModalIsVisible(true);
    }

    function closeInfoHandler() {
    setModalIsVisible(false);
    }

    const TILE = new Tile(
        id,
        name,
        color,
        link1,
        link2,
        link3,
      );

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
                        onPress={viewInfoHandler}
                    >
                        <LinearGradient
                            colors={[color, color, color, color, color, "#DEC5E3"]}
                            style={styles.innerContainer}
                        >
                            <Text style={styles.name}>{name}</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
                <InfoViewModal
                    isVisible={modalIsVisible}
                    tile={GridTile.toString()}
                    onClose={closeInfoHandler}
                />
            </SafeAreaView>
        </>
    );
};

export default GridTile;
