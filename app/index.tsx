"use client";

import ToDoForm from "@/components/ToDoForm";
import ToDoList from "@/components/ToDoList";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export type Task = {
  id: string;
  task: string;
};

function Index() {
  const [tasks, setTasks] = useState([
    { id: "1", task: "Do Laundry" },
    { id: "2", task: "Go to Gym" },
    { id: "3", task: "Walk dog" },
  ]);
  return (
    <View>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({});
