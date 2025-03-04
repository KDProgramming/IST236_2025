import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { myStyles as styles } from "../../styles/styles";
import * as SplashScreen from "expo-splash-screen";
import Title from "@/components/Title";
import NavButton from "@/components/NavButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

interface OrderReviewProps {
    onHome: () => void;
    repairTimeId: number;
    services: { id: number; name: string; value: boolean; price: number }[];
    newsletter: boolean;
    rentalMembership: boolean;
    repairTimeRadioButtons: { id: number; label: string; value: string; price: number }[];
    price: number;
  }
  
    SplashScreen.preventAutoHideAsync();
  
    const OrderReview: React.FC<OrderReviewProps> = ({ 
        onHome, 
        repairTimeId,
        services,
        newsletter,
        rentalMembership,
        repairTimeRadioButtons,
        price,
    }) => {
    const insets = useSafeAreaInsets();

    return (
        <>
        <LinearGradient
            colors={["#2B0504","#BC5F04"]}
            style={styles.rootContainer}
        >
            <GestureHandlerRootView style={{ flex: 1,}}>
                <SafeAreaView style={[
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                }
                ]}>
                    <View style={styles.titleContainer}>
                        <Title>Order Summary</Title>
                    </View>

                    <ScrollView style={styles.scrollContainer}>
                    <View style={styles.servicesContainer}>
                        <View style={styles.subTitleContainer}>
                            <Text style={styles.subTitle}>Your order has been placed with your order details below</Text>
                        </View>

                        <View style={styles.servicesContainer}>
                            <Text style={styles.subTitle}>Repair Time:</Text>
                            <Text style={styles.subService}>{repairTimeId != null ? repairTimeId.toString() : "0"}</Text>
                            <Text style={styles.subTitle}>Services:</Text>
                            {services.map((item) => {
                                if (item.value) {
                                    return (
                                        <Text key={item.id} style={styles.subService}>
                                            {item.name}
                                        </Text>
                                    );
                                }
                            })};
                            <Text style={styles.subTitle}>Additional Items:</Text>
                            <Text style={styles.subService}>{newsletter ? "Newsletter" : ""}</Text>
                            <Text style={styles.subService}>{rentalMembership ? "Rental Membership" : ""}</Text>
                        </View>

                        <View style={styles.subTitleContainer}>
                            <Text style={styles.subTitle}>SubTotal: ${price.toFixed(2)}</Text>
                            <Text style={styles.subTitle}>
                                Sales Tax: ${(price * 0.06).toFixed(2)}
                            </Text>
                            <Text style={styles.subTitle}>
                                Total: ${(price + price * 0.06).toFixed(2)}
                            </Text>
                        </View>
                    </View>
                    </ScrollView>

                    <View style={styles.navbuttonContainer}>
                        <NavButton onNext={onHome}>Return Home</NavButton>
                    </View>
                </SafeAreaView>
            </GestureHandlerRootView>
        </LinearGradient>
        </>
    );
  };
  
  export default OrderReview;