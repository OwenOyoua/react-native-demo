import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const UI1 = () => {
  const [text, setText] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>📱 Composants de Base</Text>
          <Text style={styles.headerSubtitle}>
            Les fondamentaux pour construire une UI
          </Text>
        </View>

        {/* View Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>View</Text>
          <Text style={styles.description}>
            Le composant fondamental pour construire une UI. C'est le bloc de
            base pour créer des interfaces.
          </Text>
          <View style={styles.example}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />
          </View>
        </View>

        {/* Text Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>Text</Text>
          <Text style={styles.description}>
            Composant pour afficher du texte. Supporte les styles, la
            troncature et les interactions.
          </Text>
          <View style={styles.example}>
            <Text style={styles.textLarge}>Texte en Grand</Text>
            <Text style={styles.textSmall}>Texte en Petit</Text>
            <Text style={styles.textBold}>Texte en Gras</Text>
            <Text numberOfLines={1} style={styles.textEllipsis}>
              Ce texte très long sera tronqué avec des points de suspension
            </Text>
          </View>
        </View>

        {/* Image Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>Image</Text>
          <Text style={styles.description}>
            Composant pour afficher des images. Peut être locale ou distante
            avec gestion des dimensions.
          </Text>
          <View style={styles.example}>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={styles.image}
            />
            <Text style={styles.caption}>Image React Native</Text>
          </View>
        </View>

        {/* TextInput Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>TextInput</Text>
          <Text style={styles.description}>
            Composant pour l'entrée de texte. Supporte les placeholders,
            clavier virtuel et validation.
          </Text>
          <View style={styles.example}>
            <TextInput
              style={styles.input}
              placeholder="Entrez votre texte..."
              value={text}
              onChangeText={setText}
            />
            <Text style={styles.inputValue}>Valeur: {text || '(vide)'}</Text>
          </View>
        </View>

        {/* Pressable Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>Pressable</Text>
          <Text style={styles.description}>
            Wrapper pour détecter les interactions de pression. Idéal pour
            créer des boutons custom.
          </Text>
          <Pressable
            onPress={() => setIsPressed(!isPressed)}
            style={[styles.pressable, isPressed && styles.pressableActive]}
          >
            <Text style={styles.pressableText}>
              {isPressed ? 'Pressé! ✓' : 'Appuyer ici'}
            </Text>
          </Pressable>
        </View>

        {/* ScrollView Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>ScrollView</Text>
          <Text style={styles.description}>
            Conteneur scrollable pour afficher plusieurs composants. Parfait
            pour les longs contenus.
          </Text>
          <ScrollView
            style={styles.scrollable}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <View key={num} style={styles.scrollItem}>
                <Text style={styles.scrollItemText}>Item {num}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* StyleSheet Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>StyleSheet</Text>
          <Text style={styles.description}>
            Fournit une abstraction similaire aux CSS stylesheets. Optimise les
            performances des styles.
          </Text>
          <View style={styles.example}>
            <Text style={styles.styleInfo}>
              ✓ Créé avec StyleSheet.create()
            </Text>
            <Text style={styles.styleInfo}>✓ Validation des propriétés</Text>
            <Text style={styles.styleInfo}>✓ Meilleures performances</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 20,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e0e0e0',
  },
  componentCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginVertical: 8,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  example: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#6200ee',
  },
  box1: {
    width: 60,
    height: 60,
    backgroundColor: '#FF6B6B',
    marginBottom: 8,
    borderRadius: 8,
  },
  box2: {
    width: 80,
    height: 60,
    backgroundColor: '#4ECDC4',
    marginBottom: 8,
    borderRadius: 8,
  },
  box3: {
    width: 100,
    height: 60,
    backgroundColor: '#FFE66D',
    borderRadius: 8,
  },
  textLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textSmall: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  textEllipsis: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  caption: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 14,
  },
  inputValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  pressable: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  pressableActive: {
    backgroundColor: '#3700b3',
    transform: [{ scale: 0.95 }],
  },
  pressableText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollable: {
    height: 100,
  },
  scrollItem: {
    width: 100,
    height: 80,
    backgroundColor: '#6200ee',
    marginRight: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollItemText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  styleInfo: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
  },
});

export default UI1;
