import React, { useState, useMemo, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./homeScreen";
import { myStyles as styles } from "../../styles/styles";
import OrderReview from "./orderReview";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors as Colors} from "../../constants/Colors"
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Index = () => {

  const [fontsLoaded, fontError] = useFonts({
    typeMachine: require("../../assets/fonts/Type Machine.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentPrice, setCurrentPrice] = useState(0);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: "#2B0504",
        color: "#2B0504",
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: "#2B0504",
        color: "#2B0504",
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: "#2B0504",
        color: "#2B0504",
      },
    ],
    []
  );

  const [repairTimeId, setRepairTimeId] = useState(0);
  const initialServices = useMemo(() => [
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ], []);
  
  const [services, setServices] = useState(initialServices);

  console.log("services state:", services);
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  function setServicesHandler(updatedServices: { id: number; name: string; value: boolean; price: number }[]) {
    console.log("Updated Services:", updatedServices);
    setServices(updatedServices);
  }  

  function setNewsletterHandler() {
    setNewsletter((previous) => !previous)
  }

  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous)
  }

  const handleSetRepairTimeId = (id: string) => {
    console.log(id);
    setRepairTimeId(Number(id));
  };

  function orderReviewHandler() {
    let price = 0;

    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }

    if (rentalMembership) {
      price = price + 100;
    }

    price = price + repairTimeRadioButtons[repairTimeId].price;

    setCurrentPrice(price);
    setCurrentScreen("review")
  };

  function homeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen("home");
  }

  let screen = 
  <HomeScreen 
    onNext={orderReviewHandler}
    repairTimeId={repairTimeId}
    services={services || []}
    newsletter={newsletter}
    rentalMembership={rentalMembership}
    repairTimeRadioButtons={repairTimeRadioButtons}
    onSetRepairTimeId={handleSetRepairTimeId}
    onSetServices={setServicesHandler}
    onSetNewsletter={setNewsletterHandler}
    onSetRentalMembership={setRentalMembershipHandler}
  />

  if (currentScreen === "review") {
    screen = (
    <OrderReview 
      onHome={homeScreenHandler}
      repairTimeId={repairTimeId}
      repairTimeRadioButtons={repairTimeRadioButtons}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      price={currentPrice}
    />)
  }

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaProvider style={styles.rootContainer}> {screen} </SafeAreaProvider>
    </>
    );
  }; 
};

export default Index;