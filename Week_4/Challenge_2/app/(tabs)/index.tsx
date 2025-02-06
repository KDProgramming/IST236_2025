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
          <Image style={styles.image} source={require("../../assets/images/halloween2024.jpg")}></Image>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Kylie Drawdy</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("mailto:kdrawdy@hgtc.edu")}>kdrawdy@hgtc.edu</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:8432225678")}>(843)-222-5678</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/KDProgramming")}>My GitHub Page</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FFFFED",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
    paddingTop: 20,
    width: "100%",
  },
  image: {
    height: 500,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 5,
    borderColor: "#fff303"
  },
  informationContainer: {
    flex: 2,
    width: 300,
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#black",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
  },
});
