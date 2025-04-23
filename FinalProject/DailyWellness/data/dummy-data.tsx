import SLEEP from "../Models/sleepInfo";
import WORKOUT from "../Models/workoutInfo";
import DIET from "../Models/dietInfo";
import Tile from "../Models/tileInfo";

export const Sleep: SLEEP[] = [
  new SLEEP("s1", "Sleep Hours:"),
  new SLEEP("s2", "Sleep Quality:"),
  new SLEEP("s3", "Waking Feeling:"),
  new SLEEP("s4", "Sleep Aids:"),
  new SLEEP("s5", "Notes:"),
  new SLEEP("s6", "Date:")
];

export const Workout: WORKOUT[] = [
  new WORKOUT("w1", "Workout Type:"),
  new WORKOUT("w2", "Duration:"),
  new WORKOUT("w3", "Notes:"),
  new WORKOUT("w4", "Date:")
];

export const Diet: DIET[] = [
  new DIET("d1", "Meal:"),
  new DIET("d2", "Food:"),
  new DIET("d3", "Calories:"),
  new DIET("d4", "Notes:"),
  new DIET("d5", "Date:")
];

export const TILE = [
  new Tile("t1", "Workouts", "#f44336", "https://darebee.com/workouts/nothing-fancy-workout.html", "https://darebee.com/workouts/velocity-rush-workout.html", "https://darebee.com/workouts/core-reset-workout.html"), // Red
  new Tile("t2", "Recipes", "#2196f3", "https://www.allrecipes.com/easy-cottage-cheese-wrap-recipe-11697300", "https://www.allrecipes.com/coconut-milk-ice-cream-recipe-11686955", "https://www.allrecipes.com/mediterranean-crispy-rice-chicken-bowl-recipe-8778475"), // Blue
  new Tile("t3", "Sleep", "#4caf50", "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/sleep/art-20048379", "https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips", "https://www.nhlbi.nih.gov/files/docs/public/sleep/healthy_sleep.pdf"), // Green
  new Tile("t4", "Meditation", "#9c27b0", "https://www.mindful.org/how-to-meditate/", "https://zenhabits.net/meditation-guide/", "https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-meditate-for-beginners/"), // Purple
  new Tile("t5", "Retreats", "#03a9f4", "https://www.harpersbazaar.com/culture/travel-dining/g63786198/the-17-best-wellness-retreats-of-2025/", "https://bookretreats.com/s/wellness-retreats", "https://www.lonelyplanet.com/articles/wellness-retreats-usa"), // Light Blue
  new Tile("t6", "Recommendations", "#673ab7", "https://www.health.harvard.edu/staying-healthy/10-habits-for-good-health", "https://www.webmd.com/fitness-exercise/ss/twelve-habits-super-healthy-people", "https://www.wellnesshabits.life/"), // Deep Purple
];