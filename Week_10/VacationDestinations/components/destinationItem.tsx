import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { myStyles as styles } from "../styles/styles";
import ImageViewModal from "@/modals/imageViewModal";
import Destination from "@/models/destinations";

interface DestinationItemProps {
  id: string;
  countryId: string;
  name: string;
  avgCost: number;
  rating: number;
  imageUrl: string;
  listIndex: number;
  foundedYear: number;
}

const DestinationItem: React.FC<DestinationItemProps> = ({
  id,
  countryId,
  name,
  avgCost,
  rating,
  imageUrl,
  listIndex,
  foundedYear,
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
  const destination = new Destination(
    id,
    countryId,
    name,
    avgCost,
    foundedYear,
    rating,
    imageUrl
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
            styles.itemContainer,
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
            <View style={styles.rowContainer}>
              <Image style={styles.image} source={{ uri: imageUrl }} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.innerRowContainer}>
                  <Text style={styles.cost}>Average Cost: ${avgCost}</Text>
                  <Text style={styles.year}>{foundedYear}</Text>
                </View>
                <View>
                  <Text style={styles.rating}>Rating: {rating} / 5</Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>

        <ImageViewModal
          isVisible={modalIsVisible}
          imageUrl={imageUrl}
          description={destination.toString()}
          onClose={closeImageHandler}
        />
      </SafeAreaView>
    </>
  );
};

export default DestinationItem;
