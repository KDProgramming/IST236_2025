import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { myStyles as styles } from "../styles/styles";
import InfoViewModal from "@/Modals/infoViewModal";
import Tile from "@/Models/tileInfo";
import { LinearGradient } from "expo-linear-gradient";

interface GridItemProps {
  id: string;
  name: string;
  color: string;
  link1: string;
  link2: string;
  link3: string;
  listIndex: number;
}

const GridItem: React.FC<GridItemProps> = ({
  id,
  name,
  color,
  link1,
  link2,
  link3,
  listIndex,
}) => {
  const insets = useSafeAreaInsets();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function viewImageHandler() {
    setModalIsVisible(true);
  }

  function closeImageHandler() {
    setModalIsVisible(false);
  }

  // Create a new Destination object
  const explore = new Tile(
    id,
    name,
    color,
    link1,
    link2,
    link3,
  );

  return (
    <>
      <SafeAreaView
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View
          style={[
            styles.gridItem,
            { backgroundColor: listIndex % 2 == 0 ? "#ccc" : "#fff" },
          ]}
        >
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ]}
            android_ripple={{ color: "#81F7E5" }}
            onPress={viewImageHandler}
          >
            <LinearGradient
                colors={[color, color, color, color, color, "#DEC5E3"]}
                style={styles.innerContainer}
            >
                <Text style={styles.name}>{name}</Text>
            </LinearGradient>
          </Pressable>
        </View>

        <InfoViewModal
          isVisible={modalIsVisible}
          tile={explore}
          onClose={closeImageHandler}
        />
      </SafeAreaView>
    </>
  );
};

export default GridItem;
