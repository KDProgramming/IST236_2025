import React, { useState } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COUNTRIES } from "../../data/dummy-data";
import CountryGridTile from "@/components/countryGridTile";
import { myStyles as styles } from "../../styles/styles";
import Title from "@/components/Title";

type RootStackParamList = {
  Home: undefined;
  DestinationsOverview: { countryId: string };
};

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  function renderCountryItem(itemData: any) {
    console.log("Rendering item:", itemData.item.name);
    function pressHandler() {
      navigation.navigate("DestinationsOverview", {
        countryId: itemData.item.id,
      });
    }

    return (
      <CountryGridTile 
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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

        <View style={styles.titleContainer}>
            <Title>Please Choose A Country To View</Title>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={COUNTRIES}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCountryItem}
            numColumns={2}
          />
        </View>
      </SafeAreaView>
      </GestureHandlerRootView>
  );
};

export default HomeScreen;
