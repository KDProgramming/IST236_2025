import React, { useState } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, FlatList, TextInput, Text } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { myStyles as styles } from "../../styles/styles";
import { Sleep } from "../../data/dummy-data";
import NavButton from "@/components/NavButton";

type RootTabParamList = {
  Home: undefined;
  Sleep: undefined;
  Workout: undefined;
  Diet: undefined;
  ToDo: undefined;
  Explore: undefined;
};

interface SleepScreenProps {
  navigation: NativeStackNavigationProp<RootTabParamList, 'Sleep'>;
  onEnter: () => void;
}

const SleepScreen: React.FC<SleepScreenProps> = ({ navigation, onEnter }) => {
  const insets = useSafeAreaInsets();

  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const handleChange = (id: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

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
      <View style={styles.listContainer}>
        <FlatList
          data={Sleep}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <>
              <View style={styles.infoContainer1}>
                <Text style={styles.infoText}>
                  Please input your sleep information below, then press "enter" to display it!
                </Text>
                <NavButton onNext={onEnter}>Enter</NavButton>
              </View>
            </>
          }
          renderItem={({ item }) => (
            <View style={styles.rowContainer}>
              <Text style={styles.text}>{item.label}</Text>
              <TextInput
                style={styles.input}
                value={inputValues[item.id] || ""}
                onChangeText={(text) => handleChange(item.id, text)}
                placeholder={`Enter ${item.label}`}
              />
            </View>
          )}
          ListFooterComponent={
            <>
              {Object.keys(inputValues).length > 0 && (
                <View style={styles.infoContainer}>
                  <Text style={styles.text}>Your Entered Info:</Text>
                  {Sleep.map((item) => {
                  const value = inputValues[item.id];
                  return value ? (
                    <Text key={item.id} style={styles.text}>
                      {item.label}: {value}
                    </Text>
                  ) : null;
                })}
                </View>
              )}
            </>
          }
        />
        </View>

      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SleepScreen;
