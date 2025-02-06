import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../../assets/images/logansRoadhouse.jpeg")}></Image>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Logans Roadhouse</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://logansroadhouse.com/")}>www.logansroadhouse.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:8438394666")}>(843)-839-4666</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://maps.app.goo.gl/nPcvTSNudPN3XFJP8")}>Open in Google Maps</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#ee1b2c",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 3,
    paddingTop: 20,
    width: "100%",
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#fff303"
  },
  informationContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#e5e9e4",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
  },
});
