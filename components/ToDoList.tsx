import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Task } from "../app/index";

const ToDoList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <ScrollView>
      {tasks.map((task) => (
        <Pressable key={task.id}>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>{task.task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});
