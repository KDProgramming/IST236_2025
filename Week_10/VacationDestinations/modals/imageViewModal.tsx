import React from 'react';
import { Modal, View, Text, Image, StyleSheet } from "react-native";
import NavButton from "@/components/NavButton";


interface ImageViewModalProps {
  isVisible: boolean;
  imageUrl: string;
  description: string;
  onClose: () => void;
}

const ImageViewModal: React.FC<ImageViewModalProps> = ({ isVisible, imageUrl, description, onClose }) => {
  return (
    <View style={styles.container}>
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.navbuttonContainer}>
            <NavButton onNext={onClose}>Return to Campgrounds</NavButton>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B4513",
    padding: 20,
  },
  imageContainer: {
    paddingTop: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 300,
    resizeMode: "contain",
  },
  description: {
    marginLeft: 20,
    color: "#fff",
    textAlign: "center", 
    flexShrink: 1, 
    fontSize: 30,
    fontWeight: "bold",
  },
  navbuttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  descContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
