import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets, } from "react-native-safe-area-context";
import { View, ImageBackground, Text, } from "react-native";
import { myStyles as styles } from "../../styles/styles";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView, Switch } from "react-native-gesture-handler";
import OrderReview from "./orderReview";
import Title from "@/components/Title";
import NavButton from "@/components/NavButton";
import { ScrollView } from "react-native-gesture-handler";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface HomeScreenProps {
    repairTimeId: number;
    services: { id: number; name: string; value: boolean; price: number }[];
    newsletter: boolean;
    rentalMembership: boolean;
    repairTimeRadioButtons: any[];
    onSetRepairTimeId: (id: string) => void;
    onSetServices: (services: { id: number; name: string; value: boolean; price: number }[]) => void;
    onSetNewsletter: (value: boolean) => void;
    onSetRentalMembership: (value: boolean) => void;
    onNext: () => void;
  }
    SplashScreen.preventAutoHideAsync();
  
    const HomeScreen: React.FC<HomeScreenProps> = ({ 
        repairTimeId,
        services = [],
        newsletter,
        rentalMembership,
        repairTimeRadioButtons,
        onSetRepairTimeId,
        onSetServices,
        onSetNewsletter,
        onSetRentalMembership,
        onNext,
    }) => {
    const insets = useSafeAreaInsets();

    return (
        <>
        <ImageBackground
            source={require("../../assets/images/background.jpg")}
            resizeMode="cover"
            style={styles.rootContainer}
            imageStyle={styles.backgroundImage}
        >
        <GestureHandlerRootView style={{ flex: 1}}>
        <SafeAreaView style={[
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}>
            <View style={styles.titleContainer}>
                <Title>Auto Repair</Title>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.radioContainer}>
                    <Text style={styles.radioHeader}>Repair Times:</Text>
                    <RadioGroup 
                        radioButtons={repairTimeRadioButtons}
                        onPress={onSetRepairTimeId}
                        selectedId={repairTimeId ? repairTimeId.toString() : "0"}
                        layout="row"
                        containerStyle={styles.radioGroup}
                        labelStyle={styles.radioGroupLabels}
                    />
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Services:</Text>
                        <View style={styles.checkBoxSubContainer}>
                        {Array.isArray(services) ? services.map((item) => (
                        <BouncyCheckbox
                            key={item.id}
                            text={item.name}
                            onPress={(isChecked: boolean) => {
                            const updatedServices = services.map((service) =>
                                service.id === item.id ? { ...service, value: isChecked } : service
                            );
                            onSetServices(updatedServices);
                            }}
                            textStyle={{
                            textDecorationLine: "none",
                            color: "white",
                            fontFamily: "Type Machine",
                            }}
                            innerIconStyle={{
                            borderRadius: 0,
                            borderColor: "black",
                            }}
                            iconStyle={{
                            borderRadius: 0,
                            borderWidth: 2,
                            }}
                            fillColor="#F4442E"
                            style={{
                            padding: 2,
                            }}
                        />
                        )) : <Text>No services available</Text>}
                        </View>
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.slidersContainer}>
                        <View style={styles.slidersSubContainer}>
                            <Text style={styles.slidersLabel}>Newsletter?</Text>
                            <Switch 
                                onValueChange={onSetNewsletter}
                                value={newsletter}
                                thumbColor={
                                    newsletter ? "#874000": "#F4442E"
                                }
                                trackColor={{false: "#874000", true: "#F4442E"}}
                            />
                        </View>    
                        <View style={styles.slidersSubContainer}>
                            <Text style={styles.slidersLabel}>Rental Membership? </Text>
                            <Switch 
                                onValueChange={onSetRentalMembership}
                                value={rentalMembership}
                                thumbColor={
                                    rentalMembership ? "#874000": "#F4442E"
                                }
                                trackColor={{false: "#874000", true: "#F4442E"}}
                            />
                        </View>   
                    </View>
                </View>

                <View style={styles.navbuttonContainer}>
                    <NavButton onNext={onNext}>Submit Order</NavButton>
                </View>                    
            </ScrollView>
        </SafeAreaView>
        </GestureHandlerRootView>
        </ImageBackground>
        </>
    );
  };
  
  export default HomeScreen;