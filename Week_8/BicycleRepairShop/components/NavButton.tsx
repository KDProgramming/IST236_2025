import { Text, View, Pressable, StyleSheet, Dimensions } from "react-native";
import React from "react";

interface NavButtonProps {
  onNext: () => void;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = (props) => {
  return (
    <Pressable 
      onPress={props.onNext} 
      style={({ pressed }) => pressed && styles.pressedItem}
    >
        <View style={styles.buttonContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </View>
    </Pressable>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#874000",
    borderWidth: 3,
    borderColor: "#2B0504",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 175,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginBottom: Dimensions.get("window").height * 0.05,
    zIndex: 1,
    pointerEvents: "auto",
  },
    buttonText: {
      color: "white",
      fontSize: 25,
      letterSpacing: 2,
      fontWeight: "600",
      textAlign: "center",
      marginVertical: 5,
      textShadowColor: "black",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
      fontFamily: "Type Machine",
    },
    pressedItem: {
      opacity: 0.8,
    }, 
    textContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "white",
      fontSize: 24,
      letterSpacing: 2,
      fontWeight: "600",
      textAlign: "center",
      marginVertical: 5,
      textShadowColor: "black",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
      lineHeight: 55,
    },
});