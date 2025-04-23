import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TILE } from "../../data/dummy-data";
import GridItem from "@/components/gridItem";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { myStyles as styles } from "../../styles/styles";

type RootTabParamList = {
  Home: undefined;
  Sleep: undefined;
  Workout: undefined;
  Diet: undefined;
  ToDo: undefined;
  Explore: undefined;
  InfoViewModal: { tile: any };
};

interface ExploreScreenProps {
  navigation: NativeStackNavigationProp<RootTabParamList, 'Explore'>;
}

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const renderTileItem = (itemData: any) => {
    const tile = itemData.item;
  
    const pressHandler = () => {
      navigation.navigate("InfoViewModal", { tile }); 
    };
  
    return (
      <GridItem
        name={tile.name}
        color={tile.color}
        id={tile.id}
        link1={tile.link1}
        link2={tile.link2}
        link3={tile.link3}
        listIndex={tile.listIndex}
      />
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <View style={styles.list3container}>
        <FlatList
          data={TILE}
          keyExtractor={(item) => item.id}
          renderItem={renderTileItem}
        />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default ExploreScreen;
