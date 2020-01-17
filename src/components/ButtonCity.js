import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonCity(props) {
  return (
    <TouchableOpacity onPress={props.onPress}  style={styles.container}>
      <Text style={styles.text}>{props.city}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3456ff",
    borderRadius: 10,
    margin: 5
  },
  text: {
    color: "white",
    padding: 5
  }
});
