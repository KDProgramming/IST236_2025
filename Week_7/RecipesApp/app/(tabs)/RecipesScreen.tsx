import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, FlatList, Modal, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { myStyles as styles } from "../../styles/styles";
import Title from "@/components/Title";
import RecipeItem from "@/components/RecipeItem";
import NavButton from "@/components/NavButton";
import RecipeView from "@/modals/RecipeView";

interface RecipesScreenProps {
    onHome: () => void;
    onAdd: () => void;
    recipes: { id: number; title: string; text: string }[];
    onDelete: (id: number) => void;
}

const RecipesScreen: React.FC<RecipesScreenProps> = ({ onHome, onAdd, recipes, onDelete }) => {
    
    const [selectedRecipe, setSelectedRecipe] = useState<{ id: number; title: string; text: string } | null>(null);

    function recipeViewHandler(recipe: { id: number; title: string; text: string }) {
        setSelectedRecipe(recipe);
    }

    function closeRecipeViewHandler() {
        setSelectedRecipe(null);
    }

    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="auto" />
            <SafeAreaView style={styles.rootContainer}>
                <View style={styles.titleContainer}>
                    <Title>Current Recipes</Title>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.itemsContainer}>
                        <FlatList 
                        data={recipes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <RecipeItem 
                                id={item.id} 
                                title={item.title}
                                onDelete={() => onDelete(item.id)}
                                onView={() => recipeViewHandler(item)}
                            />
                          )}
                        />
                    </View>
                </View>
                <Modal 
                    visible={!!selectedRecipe} 
                    animationType="slide" 
                    transparent={false}>
                    {selectedRecipe && (
                        <RecipeView 
                            recipe={selectedRecipe} 
                            onClose={closeRecipeViewHandler}
                        />
                    )}
                </Modal>

                <View style={styles.navbuttonContainer}>
                    <NavButton onNext={onAdd}>Add Recipe</NavButton>
                    <NavButton onNext={onHome}>Home</NavButton>
                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export default RecipesScreen;