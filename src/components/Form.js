import React from "react";
import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import ButtonCity from "./ButtonCity";

export default function Form(props) {
  return (
    <View style={styles.formContainer}>
      <Text style={{ color: "white", fontSize: 20 }}>
        ¿Cómo está el clima en?
      </Text>
      <TextInput
        placeholder="Buscar ciudad"
        style={{
          backgroundColor: "#33333344",
          width: "100%",
          padding: 10,
          borderRadius: 15,
          marginVertical: 10,
          color: "white"
        }}
        onChangeText={props.onChangeText}
      />
      <FlatList
        horizontal
        keyExtractor={(item,index) => index.toString()}
        data={props.data}
        renderItem={ props.renderItem }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: "#44444444",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});
