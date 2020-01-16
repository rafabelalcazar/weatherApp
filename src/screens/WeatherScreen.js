import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ImageBack from "../components/ImageBack";

export default class WeatherScreen extends Component {
  state = {};

  render() {
    return (
      <ImageBack weather="">
        <View style={styles.formContainer}>
          <Text style={{color:'white', fontSize:20}}>¿Cómo está el clima en?</Text>
          <TextInput 
          placeholder="Buscar ciudad"
          style={{backgroundColor:'#33333344', width:'100%',
          padding: 10,
          borderRadius:15,
          marginVertical:10 
        }} 
          />
        </View>
      </ImageBack>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#44444444",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});
