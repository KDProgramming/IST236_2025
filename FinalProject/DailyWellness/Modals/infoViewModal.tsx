import React from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";
import { Linking } from "react-native";
import NavButton from "@/components/NavButton";

interface InfoViewModalProps {
  isVisible: boolean;
  tile: any;
  onClose: () => void;
}


const InfoViewModal: React.FC<InfoViewModalProps> = ({ isVisible, tile, onClose }) => {
  const handleLinkClick = (url: string) => {
    Linking.openURL(url);
  };
  console.log("Tile passed to modal:", tile);
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.text}>Links for {tile?.name}</Text>

          {tile?.link1 && (
            <View style={styles.button}>
            <Button title={`Open Link 1`} onPress={() => handleLinkClick(tile.link1)} />
            </View>
          )}
          {tile?.link2 && (
            <View style={styles.button}>
            <Button title={`Open Link 2`} onPress={() => handleLinkClick(tile.link2)} />
            </View>
          )}
          {tile?.link3 && (
            <View style={styles.button}>
            <Button title={`Open Link 3`} onPress={() => handleLinkClick(tile.link3)} />
            </View>
          )}

          <NavButton onNext={onClose}>Return</NavButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    color: "white",
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 5,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    lineHeight: 55,
    fontFamily: "HolidayIsland",
  },
  modalContainer: {
    backgroundColor: "#ddf",
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 20,
    width: "85%",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  button: {
    marginVertical: 8,
    width: "100%",
  },
});


export default InfoViewModal;
