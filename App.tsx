import React, { useReducer, useState, useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./src/components/Task";
import { ACTIONS, todoReducer } from "./src/reducer/reducer";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function App() {
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(todoReducer, []);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      dispatch({
        type: ACTIONS.ADD_TODO,
        payload: { id: Math.random() * 1000, title: task },
      });
    } else {
      return null;
    }
    setTask("");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.tasksWrapper}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Current Tasks: <Text>{state.length}</Text>
          </Text>
        </View>
        {/* Task List */}
        <ScrollView style={styles.itemsContainer}>
          {state.map((item) => (
            <Task key={item.id} data={item} dispatch={dispatch} />
          ))}
        </ScrollView>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.buttonWrapper}>
            <AntDesign name="plus" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemsContainer: {
    height: "70%",
    overflow: "scroll",
    marginVertical: 30,
  },

  // Write task component
  writeTaskWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 20,
    width: 250,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    elevation: 4,
  },
  buttonWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    elevation: 4,
  },
});
