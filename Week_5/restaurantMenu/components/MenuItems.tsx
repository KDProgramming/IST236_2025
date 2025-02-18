import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface MenuItemProps {
  name: string;
  image: any;
  price: string;
}

function MenuItems({ name, image, price }: MenuItemProps) {
  return (
    <View style={styles.itemsContainer}>
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: "#006400",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderRadius: 12,
    borderColor: "#8B0000",
  },
  image: {
    height: 250,
    width: 300,
    resizeMode: "cover",
    borderWidth: 4,
    borderColor: "#8B0000",
    borderRadius: 10,
  },
  text: {
    color: "#FAF3DD",
    fontSize: 24,
    letterSpacing: 2,
    fontWeight: "600",
    fontFamily: "Barlock",
    textAlign: "center",
    marginVertical: 5,
    textShadowColor: "#8B0000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    lineHeight: 55,
  },
});

export default MenuItems;