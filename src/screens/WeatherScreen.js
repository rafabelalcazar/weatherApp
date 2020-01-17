import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import ImageBack from "../components/ImageBack";
import ButtonCity from "../components/ButtonCity";
import Card from "../components/Card";
import Form from "../components/Form";

const KEY = "ec81fcf2bb5f8b82221014f718d940f1";
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
export default class WeatherScreen extends Component {
  state = {
    city: "",
    cities: [],
    lat: "",
    lon: ""
  };

  getCities = city => {
    fetch(`http://autocomplete.wunderground.com/aq?query=${city}`)
      .then(data => data.json())
      .then(cities => {
        this.setState({ cities: cities.RESULTS });
        console.log(this.state.cities);
      });
  };

  getWeather = city => {
    const { lat, lon, name } = city;
    this.setState({
      city: name,
      lat: lat,
      lon: lon
    });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ec81fcf2bb5f8b82221014f718d940f1`
    )
      .then(data => data.json())
      .then(weather => {
        const { humidity, temp } = weather.main;
        this.setState({
          humidity,
          temp,
          weather: weather.weather[0].main
        });
      });
  };

  render() {
    return (
      <ImageBack weather={this.state.weather}>
        <Form
          onChangeText={city => this.getCities(city)}
          data={this.state.cities}
          renderItem={({ item }) => (
            <ButtonCity
              onPress={() => this.getWeather(item)}
              city={item.name}
            />
          )}
        />
        <Card 
        city={this.state.city}
        weather={this.state.weather}
         />
      </ImageBack>
    );
  }
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
