import React, { useState } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, FlatList, ImageBackground, Text, TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { myStyles as styles } from "../../styles/styles";
import Title from "@/components/Title";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Button, TouchableOpacity, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import Task from "../../Models/toDoInfo";

type RootTabParamList = {
    Home: undefined;
    Sleep: undefined;
    Workout: undefined;
    Diet: undefined;
    ToDo: undefined;
    Explore: undefined;
  };

interface ToDoScreenProps {
  navigation: NativeStackNavigationProp<RootTabParamList, 'ToDo'>;
}

const ToDoScreen: React.FC<ToDoScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTaskItem = new Task(Date.now().toString(), newTask);
    setTasks([...tasks, newTaskItem]);
    setNewTask("");
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <ImageBackground
        source={require("../../assets/images/linedPaper.jpg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
    >
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView
        style={[
          styles.root2Container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.infoContainer2}>
            <Text style={styles.infoText}>Please enter a task below and press "add" to add it to your to-do list!</Text>
        </View>

        <View style={styles.container}>
        <Text style={styles.header}>To-Do List</Text>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            value={newTask}
            onChangeText={setNewTask}
            />
            <Button title="Add" onPress={addTask} />
        </View>
        <View style={styles.list2Container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={styles.taskContainer}>
                    <Checkbox
                    status={item.completed ? "checked" : "unchecked"}
                    onPress={() => toggleTaskCompletion(item.id)}
                    />
                    <Text style={[styles.taskText, item.completed && styles.completedText]}>
                    {item.label}
                    </Text>
                    <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
                    <Text style={styles.deleteText}>❌</Text>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
        </View>

      </SafeAreaView>
      </GestureHandlerRootView>
      </ImageBackground>
  );
};

export default ToDoScreen;
