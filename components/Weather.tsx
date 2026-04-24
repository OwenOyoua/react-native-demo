import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  ActivityIndicator, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import axios from 'axios';

export const Weather = () => {
  const [city, setCity] = useState('Casablanca');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const api_key = 'c534dbe4bb45cd91272132e401731e5b';

  const fetchWeather = async (targetCity: string) => {
    if (!targetCity.trim()) return;
    setLoading(true);
    setError(null);
    try {
      // URL CORRIGÉE (api.openweathermap.org au lieu de openweathermap.org)
      const response = await axios.get(
        `https://openweathermap.org{targetCity}&appid=${api_key}&units=metric&lang=fr`
      );
      
      let data = response.data;
      if (data.sys.country === 'EH') data.sys.country = 'MA';
      
      setWeatherData(data);
    } catch {
      setError('Ville introuvable ou erreur réseau');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather('Casablanca');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        
        {/* Barre de recherche simple */}
        <View style={styles.searchContainer}>
          <TextInput
            value={city}
            onChangeText={setCity}
            style={styles.searchBar}
            placeholder="Rechercher une ville..."
            placeholderTextColor="#94a3b8"
            onSubmitEditing={() => fetchWeather(city)}
          />
        </View>

        {loading && <ActivityIndicator size="large" color="#00d2ff" />}

        {weatherData && !loading && (
          <View style={styles.card}>
            {/* Header : Ville + Drapeau */}
            <View style={styles.header}>
              <Text style={styles.cityName}>{weatherData.name}</Text>
              <Image
                source={{ uri: `https://flagsapi.com{weatherData.sys.country}/flat/64.png` }}
                style={styles.flag}
              />
            </View>

            {/* Température & Icone */}
            <View style={styles.mainWeather}>
              <Image
                source={{ uri: `https://openweathermap.org{weatherData.weather[0].icon}@4x.png` }}
                style={styles.mainIcon}
              />
              <Text style={styles.temp}>{Math.round(weatherData.main.temp)}°C</Text>
            </View>
            <Text style={styles.desc}>{weatherData.weather[0].description}</Text>

            {/* Grille d'infos simplifiée */}
            <View style={styles.infoGrid}>
              <InfoItem label="Humidité" value={`${weatherData.main.humidity}%`} />
              <InfoItem label="Vent" value={`${weatherData.wind.speed} m/s`} />
              <InfoItem label="Ressenti" value={`${Math.round(weatherData.main.feels_like)}°C`} />
              <InfoItem label="Pression" value={`${weatherData.main.pressure} hPa`} />
            </View>
          </View>
        )}

        {error && <Text style={styles.errorText}>{error}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

const InfoItem = ({ label, value }: any) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a' },
  searchContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  searchBar: { color: '#fff', height: 50 },
  card: {
    backgroundColor: '#222',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center'
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  cityName: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginRight: 10 },
  flag: { width: 30, height: 20 },
  mainWeather: { flexDirection: 'row', alignItems: 'center' },
  mainIcon: { width: 80, height: 80 },
  temp: { color: '#fff', fontSize: 48 },
  desc: { color: '#aaa', fontSize: 18, marginBottom: 20, textTransform: 'capitalize' },
  infoGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' },
  infoItem: { width: '45%', backgroundColor: '#333', padding: 10, borderRadius: 10, marginBottom: 10 },
  infoLabel: { color: '#888', fontSize: 12 },
  infoValue: { color: '#fff', fontWeight: 'bold' },
  errorText: { color: 'red', textAlign: 'center', marginTop: 20 }
});
