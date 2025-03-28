import { StyleSheet, Dimensions } from "react-native";

export const myStyles = StyleSheet.create({
   rootContainer: {
    flex: 1,
    backgroundColor: "#D5DDBC",
    alignItems: "center",
    justifyContent: "flex-start",
  },   
  titleContainer: {
    flex: 1,
    backgroundColor: "#931F1D",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#937B63",
    marginVertical: 20,
    flexDirection: "column",
  },
  imageContainer: {
    flex: 3,
    width: 350,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderWidth: 5,
    borderColor: "#937B63",
    borderRadius: 10,
  },
  informationContainer: {
    flex: 2,
    width: "90%",
    backgroundColor: "#931F1D",
    borderWidth: 3,
    borderColor: "#937B63",
    borderRadius: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  listContainer: {
    flex: 4,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8A9B68",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#937B63",
  },
  text: {
    color: "white",
    fontSize: 24,
    letterSpacing: 2,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 5,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    lineHeight: 55,
  },
  itemContainer: {
    flex: 6,
  },
  navbuttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Dimensions.get("window").height * 0.05,
  },
  navButton: {
    marginHorizontal: 10,
  },
  itemsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  itemsTitleContainer: {
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    letterSpacing: 2,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 5,
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    lineHeight: 55,
    padding: 8,
  },
  itemsButtonsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginBottom: Dimensions.get("window").height * 0.05,
    zIndex: 1,
    pointerEvents: "auto",
  },
  button: {
    backgroundColor: "#D5DDBC",
    borderWidth: 3,
    borderColor: "#937B63",
    borderRadius: 10,
    minWidth: 150,
    minHeight: 50,
    justifyContent: "center",
  },
  itemsTextContainer: {
    justifyContent: "center",
  },
  textContainer: {
    flex: 5,
    width: "90%",
    borderWidth: 3,
    borderColor: "#937B63",
    padding: 10,
    borderRadius: 10,
  },
  modalTextContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flex: 4,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8A9B68",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#937B63",
  },
  modalText: {
    fontSize: 20,
    lineHeight: 40,
    color: "white",
    letterSpacing: 2,
    fontWeight: "600",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  addScrollContainer: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8A9B68",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#937B63",
    marginBottom: Dimensions.get("window").height * 0.05,
  },
  titleInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
    marginBottom: 50,
    borderWidth: 3,
    borderColor: "#937B63",
    borderRadius: 10,
    backgroundColor: "white",
  },
  textInputContainer: {
    flex: 1,
    width: "100%",
    borderWidth: 3,
    borderColor: "#937B63",
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 5,
    alignItems: "flex-start"
  },
  recipeTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  recipeText: {
    color: "black",
    fontWeight: "600",
    fontSize: 20,
  },
});