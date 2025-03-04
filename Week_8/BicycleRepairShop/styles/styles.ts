import { StyleSheet, Dimensions } from "react-native";

export const myStyles = StyleSheet.create({
   rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },   
  backgroundImage: {
    opacity: 0.4,
  },
  titleContainer: {
    flex: .3,
    backgroundColor: "#874000",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#2B0504",
    marginVertical: 20,
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
    fontFamily: "Type Machine",
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
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    color: "white",
    fontFamily: "Type Machine",
  },
  radioGroup: {
    paddingBottom: 20,
    backgroundColor: "#BC5F04",
    justifyContent: "center",
    marginVertical: 10,
  },
  radioGroupLabels: {
    fontSize: 15,
    color: "white",
    fontFamily: "Type Machine",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  checkBoxHeader: {
    fontSize: 20,
    color: "white",
    fontFamily: "Type Machine",
  },
  checkBoxSubContainer: {
    padding: 2,
    backgroundColor: "#BC5F04",
  },
  slidersContainer: {
    justifyContent: "space-between",
  },
  slidersSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  slidersLabel: {
    color: "white",
    fontSize: 20,
    fontFamily: "Type Machine",
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 3,
    fontWeight: "bold",
    fontFamily: "Type Machine",
  },
  servicesContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  service: {
    fontSize: 20,
    color: "white",
    fontFamily: "Type Machine",
  },
  subService: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
    marginVertical: 2,
    fontFamily: "Type Machine",
  },
});