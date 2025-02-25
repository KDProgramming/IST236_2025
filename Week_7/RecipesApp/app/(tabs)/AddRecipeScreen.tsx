import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import { myStyles as styles } from "../../styles/styles";
import Title from "@/components/Title";
import NavButton from "@/components/NavButton";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";

interface AddRecipeScreenProps {
    onAdd: (title: string, text: string) => void;
    onNext: () => void;
    onCancel: () => void;
}

const AddRecipeScreen: React.FC<AddRecipeScreenProps> = ({ onAdd, onNext, onCancel }) => {
    const insets = useSafeAreaInsets();

    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeText, setRecipeText] = useState("");

    function addRecipeHandler() {
      onAdd(recipeTitle, recipeText);
      onCancel();
    }

    return (
      <>
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="auto" />
            <SafeAreaView style={[styles.rootContainer, {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }]}>
                <View style={styles.titleContainer}>
                    <Title>Add New Recipe</Title>
                </View>
                <View style={styles.addScrollContainer}>
                    <ScrollView>
                        <View style={styles.titleInputContainer}>
                            <TextInput 
                                placeholder="Enter Recipe Title Here"
                                placeholderTextColor={"gray"}
                                style={styles.recipeTitle}
                                value={recipeTitle}
                                textAlignVertical="top"
                                onChangeText={setRecipeTitle}
                            />
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput 
                                placeholder="Enter Recipe Text Here"
                                placeholderTextColor={"gray"}
                                style={styles.recipeText}
                                value={recipeText}
                                textAlignVertical="top"
                                multiline={true}
                                numberOfLines={100}
                                onChangeText={setRecipeText}
                            />
                        </View>
                        <View style={styles.navbuttonContainer}>
                            <NavButton onNext={addRecipeHandler}>Submit</NavButton>
                            <NavButton onNext={onCancel}>Cancel</NavButton>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
      </>
    );
};

export default AddRecipeScreen;