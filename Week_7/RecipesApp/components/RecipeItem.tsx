import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { myStyles as styles } from "../styles/styles";

interface RecipeItemProps {
  id: number;
  title: string;

  onView: () => void;
  onDelete: () => void;
}

function RecipeItems({ title, onView, onDelete }: RecipeItemProps) {
  return (
    <View style={styles.itemsContainer}>
      <View style={styles.itemsTitleContainer}>
      <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.itemsButtonsContainer}>
        <View style={styles.button}>
            <Button title="View" onPress={onView}/>
        </View>
        <View style={styles.button}>
            <Button title="Delete" onPress={onDelete} />
        </View>
      </View>
    </View>
  );
}

export default RecipeItems;