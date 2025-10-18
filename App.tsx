import React, { useState } from 'react';
import { View, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import { getWeatherByCity } from './api/weather';

export default function App() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city: string) => {
    if (!city.trim()) {
      Alert.alert('Uyarı', 'Lütfen bir şehir adı gir!');
      return;
    }

    try {
      setLoading(true);
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      Alert.alert('Hata', 'Şehir bulunamadı veya ağ hatası.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      {loading ? <ActivityIndicator size="large" color="#2196f3" /> : <WeatherInfo data={weather} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    paddingTop: 60,
    alignItems: 'center',
  },
});
