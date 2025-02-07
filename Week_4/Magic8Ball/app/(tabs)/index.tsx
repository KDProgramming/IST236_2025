import React, { useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

  // variable for user question and answer
  const [ userQuestion, setUserQuestion] = useState("");
  const [ magicAnswer, setMagicAnswer ] = useState("");

  // get answer from file
  const getMagicAnswer = async () => {
    const responses = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy, try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ];
  
    // Get a random response
    const randomIndex = Math.floor(Math.random() * responses.length);
    setMagicAnswer(responses[randomIndex]);
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Magic 8 Ball</Text>
        </View>
        <View style={styles.questionContainer}>
        <TextInput
            style={styles.userInput}
            placeholder="Ask Your Question..."
            placeholderTextColor="#FFFFFF"
            onChangeText={setUserQuestion}
            value={userQuestion}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
          // add android ripple
          android_ripple={{color: "purple"}}
          // style the button when pressed
          style={({pressed})=> pressed && styles.pressedButton}
          onPress={getMagicAnswer}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>See What The Magic 8 Ball Has To Say</Text>
            </View>
          </Pressable>
          
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Your Question Was: {"\n"} {userQuestion}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Your Answer Was: {"\n"} {magicAnswer}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#4C00B0",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 20,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    borderWidth: 4,
    borderRadius: 7,
    borderColor: "black",
  },
  questionContainer: {
    flex: 2,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  userInput: {
    backgroundColor: "white",
    color: "black",
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "EDE7F6",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    padding: 10,
    borderWidth: 5,
    borderColor: "purple",
    borderRadius: 7,
  },
  pressedButton: {
    opacity: 0.7,
    borderWidth: 4,
    borderColor: "purple",
    borderRadius: 11,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  titleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 50,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
});
