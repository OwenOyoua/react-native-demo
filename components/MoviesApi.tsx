import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import axios from 'axios';

export const MoviesApi = () => {
  const [search, setSearch] = useState('Batman');
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = 'd18411a3';

  const fetchMovie = async (title: string) => {
    if (!title.trim()) return;
    setLoading(true);
    setError(null);
    try {
      // Recherche par titre (t=) au lieu de ID (i=) pour la barre de recherche
      const response = await axios.get(
        `https://omdbapi.com{title}&apikey=${API_KEY}`
      );

      if (response.data.Response === 'False') {
        setError('Film non trouvé');
        setMovie(null);
      } else {
        setMovie(response.data);
      }
    } catch {
      setError('Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie('Batman');
  }, []);

  const openYouTube = (title: string) => {
    const url = `https://youtube.com/results?search_query=${title}+trailer`;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Rechercher un film..."
          placeholderTextColor="#666"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={() => fetchMovie(search)}
        />
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {loading && <ActivityIndicator size="large" color="#f5c518" />}

        {error && <Text style={styles.errorText}>{error}</Text>}

        {movie && !loading && (
          <View style={styles.card}>
            <Image source={{ uri: movie.Poster }} style={styles.poster} resizeMode="contain" />
            
            <Text style={styles.title}>{movie.Title}</Text>
            
            <View style={styles.badgeRow}>
              <Text style={styles.badge}>{movie.Year}</Text>
              <Text style={styles.badge}>{movie.Runtime}</Text>
              <Text style={styles.rating}>⭐ {movie.imdbRating}</Text>
            </View>

            <Text style={styles.plot}>{movie.Plot}</Text>

            <View style={styles.details}>
              <Text style={styles.detailText}><Text style={styles.label}>Genre: </Text>{movie.Genre}</Text>
              <Text style={styles.detailText}><Text style={styles.label}>Acteurs: </Text>{movie.Actors}</Text>
              <Text style={styles.detailText}><Text style={styles.label}>Réalisateur: </Text>{movie.Director}</Text>
            </View>

            <TouchableOpacity 
              style={styles.ytButton} 
              onPress={() => openYouTube(movie.Title)}
            >
              <Text style={styles.ytButtonText}>VOIR EXTRAIT SUR YOUTUBE</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  searchBox: { padding: 15, backgroundColor: '#1a1a1a' },
  input: { 
    backgroundColor: '#333', 
    color: '#fff', 
    padding: 12, 
    borderRadius: 8, 
    fontSize: 16 
  },
  card: { alignItems: 'center' },
  poster: { width: '100%', height: 400, borderRadius: 10, marginBottom: 20 },
  title: { color: '#fff', fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  badgeRow: { flexDirection: 'row', marginVertical: 15, alignItems: 'center' },
  badge: { backgroundColor: '#333', color: '#fff', padding: 5, borderRadius: 5, marginRight: 10 },
  rating: { color: '#f5c518', fontWeight: 'bold', fontSize: 18 },
  plot: { color: '#ccc', textAlign: 'center', lineHeight: 22, marginBottom: 20 },
  details: { width: '100%', borderTopWidth: 1, borderTopColor: '#333', paddingTop: 15 },
  detailText: { color: '#fff', marginBottom: 5 },
  label: { color: '#f5c518', fontWeight: 'bold' },
  ytButton: { 
    backgroundColor: '#ff0000', 
    padding: 15, 
    borderRadius: 30, 
    marginTop: 30, 
    width: '100%', 
    alignItems: 'center' 
  },
  ytButtonText: { color: '#fff', fontWeight: 'bold', letterSpacing: 1 },
  errorText: { color: 'red', textAlign: 'center', marginTop: 20 }
});
