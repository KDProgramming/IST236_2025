import { StyleSheet, Dimensions } from "react-native";

export const myStyles = StyleSheet.create({
   rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(255, 72, 0, 0.2)',
  },   
  backgroundImage: {
    opacity: 1,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#DFA06E",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "#412722",
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: "column",
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
    fontFamily: "Mountain",
  },
  navbuttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Dimensions.get("window").height * 0.05,
  },
  navButton: {
    marginHorizontal: 10,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "100%",
  },
  rowContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "100%",
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  dateContainer: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#422722",
    borderColor: "#F5F3BB",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 5,
    maxHeight: "100%",
    maxWidth: "100%",
  },
  dateLabel1: {
    fontSize: 100,
    color: "white",
    fontFamily: "Mountain",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  dateLabel2: {
    fontSize: 100,
    fontFamily: "Mountain",
    color: "white",
  },
  dateText1: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 55,
    textAlign: "center",
    letterSpacing: .5,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  dateText2: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 55,
    textAlign: "center",
    letterSpacing: .5,
    color: "white",
  },
  dataTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    maxWidth: "100%",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#86BA90",
    borderColor: "#412722",
    borderWidth: 4,
    borderRadius: 10,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    elevation: 5,
  },
  results: {
    textAlign: "center",
    color: "white",
    fontFamily: "Mountain",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  resultsContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#422722",
    borderColor: "#F5F3BB",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 5,
    maxWidth: "100%",
    marginBottom: Dimensions.get("window").height * 0.05,
  }
});