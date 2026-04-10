import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Switch,
  FlatList,
  SectionList,
} from 'react-native';

const UI2 = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [buttonPressed, setButtonPressed] = useState('');

  const flatListData = [
    { id: '1', title: 'Item 1', value: 'Premier élément' },
    { id: '2', title: 'Item 2', value: 'Deuxième élément' },
    { id: '3', title: 'Item 3', value: 'Troisième élément' },
    { id: '4', title: 'Item 4', value: 'Quatrième élément' },
  ];

  const sectionListData = [
    {
      title: 'Fruits',
      data: ['Apple', 'Banana', 'Orange', 'Mango'],
    },
    {
      title: 'Légumes',
      data: ['Carrot', 'Broccoli', 'Spinach', 'Tomato'],
    },
    {
      title: 'Produits Laitiers',
      data: ['Milk', 'Cheese', 'Yogurt', 'Butter'],
    },
  ];

  const renderFlatListItem = ({ item }: { item: { id: string; title: string; value: string } }) => (
    <View style={styles.flatListItem}>
      <Text style={styles.flatListTitle}>{item.title}</Text>
      <Text style={styles.flatListValue}>{item.value}</Text>
    </View>
  );

  const renderSectionListItem = ({ item }: { item: string }) => (
    <View style={styles.sectionItem}>
      <Text style={styles.sectionItemText}>• {item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🎮 Interface Utilisateur</Text>
          <Text style={styles.headerSubtitle}>
            Contrôles et listes performantes
          </Text>
        </View>

        {/* Button Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>Button</Text>
          <Text style={styles.description}>
            Composant bouton de base pour les interactions. Adaptable à toutes
            les plateformes.
          </Text>
          <View style={styles.example}>
            <View style={styles.buttonContainer}>
              <Button
                title="Normal"
                onPress={() => setButtonPressed('Normal')}
                color="#6200ee"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Accent"
                onPress={() => setButtonPressed('Accent')}
                color="#00bcd4"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Succès"
                onPress={() => setButtonPressed('Succès')}
                color="#4caf50"
              />
            </View>
            {buttonPressed && (
              <Text style={styles.buttonStatus}>
                Bouton pressé: {buttonPressed}
              </Text>
            )}
          </View>
        </View>

        {/* Switch Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>Switch</Text>
          <Text style={styles.description}>
            Composant pour les entrées booléennes (ON/OFF). Parfait pour les
            paramètres et préférences.
          </Text>
          <View style={styles.example}>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Notifications</Text>
              <Switch
                value={isEnabled}
                onValueChange={setIsEnabled}
                trackColor={{ false: '#767577', true: '#81c784' }}
                thumbColor={isEnabled ? '#4caf50' : '#f4f3f4'}
              />
            </View>
            <Text style={styles.switchStatus}>
              État: {isEnabled ? '🔔 Activé' : '🔕 Désactivé'}
            </Text>
          </View>
        </View>

        {/* FlatList Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>FlatList</Text>
          <Text style={styles.description}>
            Composant pour afficher des listes performantes. Ideal pour les
            scrolls et grandes listes.
          </Text>
          <View style={styles.example}>
            <FlatList
              data={flatListData}
              renderItem={renderFlatListItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>
        </View>

        {/* SectionList Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>SectionList</Text>
          <Text style={styles.description}>
            Comme FlatList mais avec des sections. Parfait pour les listes
            organisées par catégories.
          </Text>
          <View style={styles.example}>
            <SectionList
              sections={sectionListData}
              keyExtractor={(item, index) => item + index}
              renderItem={renderSectionListItem}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionHeader}>{title}</Text>
              )}
              scrollEnabled={false}
            />
          </View>
        </View>

        {/* Performance Note */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>💡 Conseil Performance</Text>
          <Text style={styles.description}>
            FlatList et SectionList ne rendent que les éléments visibles,
            contrairement à ScrollView qui rend tous les éléments.
          </Text>
          <View style={styles.example}>
            <Text style={styles.performanceText}>
              ✓ Utiliser FlatList pour les grandes listes
            </Text>
            <Text style={styles.performanceText}>
              ✓ Utiliser ScrollView pour les petits contenus
            </Text>
            <Text style={styles.performanceText}>
              ✓ Ajouter keyExtractor pour optimiser les re-renders
            </Text>
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
    backgroundColor: '#00bcd4',
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
    color: '#e0f7fa',
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
    color: '#00bcd4',
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
    borderLeftColor: '#00bcd4',
  },
  buttonContainer: {
    marginVertical: 8,
  },
  buttonStatus: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#e0f2f1',
    borderRadius: 6,
    color: '#00695c',
    fontWeight: '500',
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  switchStatus: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f1f8e9',
    borderRadius: 6,
    color: '#558b2f',
    fontWeight: '500',
    textAlign: 'center',
  },
  flatListItem: {
    backgroundColor: '#e3f2fd',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#00bcd4',
  },
  flatListTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0277bd',
  },
  flatListValue: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#00bcd4',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginVertical: 10,
  },
  sectionItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    marginVertical: 4,
    borderRadius: 6,
  },
  sectionItemText: {
    fontSize: 14,
    color: '#333',
  },
  performanceText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 6,
    fontWeight: '500',
  },
});

export default UI2;
