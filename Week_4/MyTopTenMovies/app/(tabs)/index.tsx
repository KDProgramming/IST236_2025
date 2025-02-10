import React, { useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { FlatList } from "react-native";

export default function HomeScreen() {

  const movieItems = [
    {
      name: "As Above So Below",
      image: require("../../assets/images/AsAboveSoBelowPoster.jpg"),
      rating: "6.3",
    },
    {
      name: "Beetlejuice",
      image: require("../../assets/images/BeetlejuicePoster.jpg"),
      rating: "7.5",
    },
    {
      name: "But I'm a Cheerleader",
      image: require("../../assets/images/BIACPoster.jpg"),
      rating: "6.8",
    },
    {
      name: "Child's Play",
      image: require("../../assets/images/ChuckyPoster.jpg"),
      rating: "6.7",
    },
    {
      name: "Coraline",
      image: require("../../assets/images/CoralinePoster.jpg"),
      rating: "9.5",
    },
    {
      name: "Cursed",
      image: require("../../assets/images/CursedPoster.jpg"),
      rating: "5.1",
    },
    {
      name: "G.I. Jane",
      image: require("../../assets/images/GIJanePoster.jpg"),
      rating: "6",
    },
    {
      name: "Matilda",
      image: require("../../assets/images/MatildaPoster.png"),
      rating: "7",
    },
    {
      name: "Mermaids",
      image: require("../../assets/images/MermaidsPoster.jpg"),
      rating: "6.7",
    },
    {
      name: "The Substance",
      image: require("../../assets/images/TheSubstancePoster.jpg"),
      rating: "7.3",
    },
  ];

  type MovieItemProps = {
    name: string;
    image: any;
    rating: string;
  };

  const MovieItem: React.FC<MovieItemProps> = ({ name, image, rating }) => {
    return (
      <View style={styles.itemsContainer}>
        <Text style={styles.text}>{name}</Text>
        <Image source={image} style={{ width: 250, height: 300 }} />
        <Text style={styles.text}>Rating: {rating}</Text>
      </View>
    );
  };

  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>My Top 10 Movies</Text>
      </View>
      <View style={styles.listContainer}>
      <FlatList
        data={movieItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <MovieItem name={item.name} image={item.image} rating={item.rating} />}      
      />
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 20,
    padding: 10,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
  },
  listContainer: {
    flex: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemsContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderRadius: 12,
    borderColor: "black",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
  },
});
