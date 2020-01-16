import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import rain from "../../assets/img/rain.jpg";
import clear from "../../assets/img/clear.jpg";
import cloud from "../../assets/img/cloud.jpg";
import city from "../../assets/img/city.jpg";

getImage = weather => {
  switch (weather) {
    case "Cloud":
      return cloud;
      break;
    case "Rain":
      return rain;
      break;
    case "Clear":
      return clear;
      break;

    default:
      return city;
      break;
  }
};

export default function ImageBack(props) {
  return (
    <ImageBackground blurRadius={1} source={getImage(props.weather)} style={styles.container}>
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: 'red',
    alignItems: "center",
  }
});
