import React from "react";
import { SafeAreaView, ScrollView, Text, View, Button, Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { myStyles as styles } from "../styles/styles";
import NavButton from "@/components/NavButton";

interface RecipeViewProps {
    recipe: { id: number; title: string; text: string } | null;
    onClose: () => void;
}

function RecipeView({ recipe, onClose }: RecipeViewProps) {
    const insets = useSafeAreaInsets();

    return (
      <Modal visible={!!recipe} animationType="slide" transparent={false}>  
        {recipe && ( 
          <SafeAreaView style={[styles.rootContainer, { 
                paddingTop: insets.top, 
                paddingBottom: insets.bottom, 
                paddingLeft: insets.left, 
                paddingRight: insets.right }]}>
              
              <View style={styles.titleContainer}>
                  <Text style={styles.title}>{recipe.title}</Text>
              </View>    
              <View style={styles.scrollContainer}>
                <ScrollView>
                    <View style={styles.modalTextContainer}>
                        <Text style={styles.modalText}>{recipe.text}</Text>
                    </View>
                </ScrollView>
              </View>
              <View style={styles.navbuttonContainer}>
                  <NavButton onNext={onClose}>Return To Recipes</NavButton>
              </View>
          </SafeAreaView>
        )}
      </Modal>
    );
}
export default RecipeView;