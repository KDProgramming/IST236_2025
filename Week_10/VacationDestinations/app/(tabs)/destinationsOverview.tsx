import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ImageBackground, Text, Platform, Modal, Button, useWindowDimensions } from "react-native";
import { myStyles as styles } from "../../styles/styles";
import * as SplashScreen from "expo-splash-screen";
import { FlatList, GestureHandlerRootView, Pressable } from "react-native-gesture-handler";
import Title from "@/components/Title";
import NavButton from "@/components/NavButton";
import { COUNTRIES, DESTINATIONS } from "../../data/dummy-data";
import DestinationItem from "@/components/destinationItem";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type DestinationsOverviewNavigationProp = NativeStackNavigationProp<any, any>;
type DestinationsOverviewRouteProp = RouteProp<any, 'DestinationsOverview'>;

interface DestinationsOverviewProps {
    navigation: DestinationsOverviewNavigationProp;
    route: DestinationsOverviewRouteProp; 
}

const DestinationsOverview: React.FC<DestinationsOverviewProps> = ({ navigation, route }) => {
    const insets = useSafeAreaInsets();

    const countryId = route.params?.countryId;
    if (!countryId) {
    console.warn("No countryId provided in route params!");
    }

    useLayoutEffect(() => {
        const country = COUNTRIES.find((country) => country.id === countryId);
        navigation.setOptions({
            title: country ? country.name : undefined, 
        });
    }, [countryId, navigation]);

    const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
        return destinationItem.countryId === countryId;
    });

    function renderDestinationItem(itemData: any) {
        const destinationItemProps = {
            id: itemData.item.id,
            countryId: itemData.item.countryId,
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            avgCost: itemData.item.avgCost,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index,
        };

        return <DestinationItem {...destinationItemProps} />;
    }

    return (
        <>
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
                <View style={styles.container}>
                    <FlatList
                        data={displayedDestinations}
                        keyExtractor={(item) => item.id}
                        renderItem={renderDestinationItem}
                    />
                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
        </>
    );
};

export default DestinationsOverview;
