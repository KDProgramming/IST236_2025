import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./HomeScreen";
import { myStyles as styles } from "../../styles/styles";
import RecipesScreen from "./RecipesScreen";
import AddRecipeScreen from "./AddRecipeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Ramen Recipe",
      text: `Ingredients -
      1 tablespoon sesame oil
      3 teaspoons grated ginger
      4 teaspoons grated garlic
      4 cups broth
      4 cups water
      1 ounce dried shiitake mushrooms
      2 packages instant ramen
      1/2 cup chopped scallions or chives
      2 cup chopped kale
      1 cups shredded carrots
      Sriracha to taste
      
      Instructions - 
      1. Heat the sesame oil in a large skillet over medium low heat. 
        Add the garlic and ginger; stir fry for 2 minutes or until soft and fragrant.
      2. Add the broth and the water; Bring to a simmer.
        Add the mushrooms and simmer for 10 minutes or until the mushrooms have softened and the broth is flavorful.
      3. Add the instant noodles to the hot liquid and simmer for an additional 5 minutes or until the noodles have softened. 
        Add the scallions and stir to combine.
      4. Remove from heat, stir in the kale and carrots, and top with a soft-boiled egg (optional). Season with chili oil, hot sauce, sesame oil, and/or soy sauce and salt to taste.`
    },
    {
      id: 2,
      title: "Chicken Salad Recipe",
      text: `Ingredients -
      12 ounces cooked chicken breast, finely chopped
      1/3 cup light mayonnaise
      1/2 cup celery, chopped
      1/3 cup red onion, diced (or scallions or chives)
      2 tablespoons chicken broth, optional
      1 teaspoon Dijon
      1/2 teaspoon seasoned salt
      black pepper, to taste
      
      Instructions - 
      1. Combine all ingredients in a medium bowl and mix well. 
        Season with salt and pepper to taste.
      2. Serve over salad, in a wrap, or in a sandwich`
    },
  ]);

  const goToHome = () => setCurrentScreen("home");

  const goToRecipes = () => setCurrentScreen("recipes");

  const goToAddRecipes = () => setCurrentScreen("add");

  function addRecipeHandler(enteredRecipeTitle: string, enteredRecipeText: string) {
    setCurrentRecipes((currentRecipes) => [
      ...currentRecipes,
      { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText }
    ]);
  
    setCurrentID((prevID) => prevID + 1);
  
    goToRecipes();
  }

  function deleteRecipeHandler(id: number) {
    setCurrentRecipes((currentRecipes) =>
      currentRecipes.filter((item) => item.id !== id)
    );
  }

  let screen = <HomeScreen 
                onNext={goToRecipes}
              />

  if (currentScreen === "add"){
    screen = <AddRecipeScreen 
                onNext={goToHome}
                onAdd={addRecipeHandler}
                onCancel={goToRecipes}
              />
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen 
        onHome={goToHome} 
        onAdd={goToAddRecipes} 
        recipes={currentRecipes}
        onDelete={deleteRecipeHandler}
      />
    );
}

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.rootContainer}>{screen}</ SafeAreaProvider>
    </>
  );
};

export default Index;