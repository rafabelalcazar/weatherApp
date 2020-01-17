import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>{props.city}</Text>
      </View>
      <View style={[styles.section,{flex:2}]}>
        <Text style={styles.title}>Card</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "90%",
    backgroundColor: "white",
    margin: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "#777"
    //   textShadowColor: "black",
    //   textShadowOffset: { width: 2, height: 2 },
    //   textShadowRadius: 5
  },
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
