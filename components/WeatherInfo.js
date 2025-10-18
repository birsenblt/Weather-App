import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function WeatherInfo({ data }) {
  if (!data) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{data.name}</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <Text style={styles.temp}>{Math.round(data.main.temp)}°C</Text>
      <Text style={styles.desc}>{data.weather[0].description}</Text>
      <Text style={styles.details}>Nem: {data.main.humidity}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  city: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  icon: {
    width: 100,
    height: 100,
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  details: {
    fontSize: 16,
    color: '#555',
  },
});
