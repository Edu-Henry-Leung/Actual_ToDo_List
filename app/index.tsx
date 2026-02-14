import React from "react";
import { StyleSheet, View } from "react-native";
import ToDoForm from "@/components/ToDoForm";
import ToDoList from "@/components/ToDoList";

function Index() {
  return (
    <View>
      <ToDoList />
      <ToDoForm />
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({});
