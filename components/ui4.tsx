import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Animated,
  Dimensions,
  StatusBar,
  Linking,
  Platform,
} from 'react-native';

const UI4 = () => {
  const [animatedValue] = useState(new Animated.Value(0));
  const [isAnimating, setIsAnimating] = useState(false);
  const screenWidth = Dimensions.get('window').width;

  const startAnimation = () => {
    setIsAnimating(true);
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => setIsAnimating(false));
  };

  const animatedStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100],
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.5, 1],
    }),
  };

  const handleOpenURL = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9c27b0" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🔧 Spécifiques & Avancé</Text>
          <Text style={styles.headerSubtitle}>
            Plateformes, animations et device
          </Text>
        </View>

        {/* Animated Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>Animated</Text>
          <Text style={styles.description}>
            Bibliothèque puissante pour créer des animations fluides et
            performantes. Peut animer de nombreuses propriétés.
          </Text>
          <View style={styles.example}>
            <View style={styles.animationContainer}>
              <Animated.View
                style={[styles.animatedBox, animatedStyle]}
              />
            </View>
            <Pressable
              style={styles.animButton}
              onPress={startAnimation}
              disabled={isAnimating}
            >
              <Text style={styles.buttonText}>
                {isAnimating ? 'Animation...' : 'Animation'}
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Dimensions Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>Dimensions</Text>
          <Text style={styles.description}>
            Accès aux dimensions du device. Utile pour les layouts adaptatifs
            et la gestion des orientations.
          </Text>
          <View style={styles.example}>
            <View style={styles.dimensionsInfo}>
              <Text style={styles.dimensionText}>
                Largeur: {Math.round(screenWidth)}px
              </Text>
              <Text style={styles.dimensionText}>
                Hauteur: {Math.round(Dimensions.get('window').height)}px
              </Text>
              <Text style={styles.dimensionText}>
                Plateforme: {Platform.OS}
              </Text>
            </View>
          </View>
        </View>

        {/* StatusBar Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>StatusBar</Text>
          <Text style={styles.description}>
            Composant pour contrôler la barre de statut de l'application
            (heure, batterie, signal).
          </Text>
          <View style={styles.example}>
            <Text style={styles.statusBarText}>
              ✓ Couleur: {Platform.OS === 'ios' ? 'light-content' : 'default'}
            </Text>
            <Text style={styles.statusBarText}>
              ✓ Arrière-plan: #9c27b0
            </Text>
            <Text style={styles.statusBarText}>
              ✓ Contrôlé en haut du composant
            </Text>
          </View>
        </View>

        {/* Linking Component */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>Linking</Text>
          <Text style={styles.description}>
            Interface pour interagir avec les liens entrants et sortants.
            Ouvrir des URLs, appels, emails, etc.
          </Text>
          <View style={styles.example}>
            <Pressable
              style={styles.linkButton}
              onPress={() =>
                handleOpenURL('https://reactnative.dev')
              }
            >
              <Text style={styles.linkText}>🌐 React Native Docs</Text>
            </Pressable>
            <Pressable
              style={styles.linkButton}
              onPress={() => handleOpenURL('mailto:example@email.com')}
            >
              <Text style={styles.linkText}>✉️ Envoyer un Email</Text>
            </Pressable>
            <Pressable
              style={styles.linkButton}
              onPress={() => handleOpenURL('tel:+1234567890')}
            >
              <Text style={styles.linkText}>📞 Appeler</Text>
            </Pressable>
          </View>
        </View>

        {/* Platform-Specific Components */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>Components Spécifiques</Text>
          <Text style={styles.description}>
            Certains composants ne sont disponibles que sur iOS ou Android.
          </Text>
          <View style={styles.example}>
            {Platform.OS === 'ios' && (
              <>
                <Text style={styles.platformText}>
                  📱 iOS Component: ActionSheetIOS
                </Text>
                <Text style={styles.platformDesc}>
                  Affiche une feuille d'action iOS native
                </Text>
              </>
            )}
            {Platform.OS === 'android' && (
              <>
                <Text style={styles.platformText}>
                  🤖 Android Components:
                </Text>
                <Text style={styles.platformDesc}>
                  • BackHandler - Gestion du bouton retour
                </Text>
                <Text style={styles.platformDesc}>
                  • DrawerLayoutAndroid - Drawer native
                </Text>
                <Text style={styles.platformDesc}>
                  • ToastAndroid - Notifications Toast
                </Text>
              </>
            )}
            <Text style={styles.platformDescSpaced}>
              Plateforme actuelle: {Platform.OS}
            </Text>
          </View>
        </View>

        {/* Best Practices */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>💡 Meilleures Pratiques</Text>
          <View style={styles.example}>
            <Text style={styles.practiceText}>
              ✓ Utilisez Animated pour des animations performantes
            </Text>
            <Text style={styles.practiceText}>
              ✓ Exploitez Dimensions pour les layouts adaptatifs
            </Text>
            <Text style={styles.practiceText}>
              ✓ Contrôlez le StatusBar pour une meilleure UX
            </Text>
            <Text style={styles.practiceText}>
              ✓ Utilisez Platform.OS pour le code spécifique
            </Text>
            <Text style={styles.practiceText}>
              ✓ Utilisez Linking pour les actions externes
            </Text>
          </View>
        </View>

        {/* Architecture Tips */}
        <View style={styles.componentCard}>
          <Text style={styles.title}>🏗️ Points d'Architecture</Text>
          <View style={styles.example}>
            <Text style={styles.architectureText}>
              • Rendus optimisés avec useNativeDriver
            </Text>
            <Text style={styles.architectureText}>
              • Gestion d'orientation avec Dimensions
            </Text>
            <Text style={styles.architectureText}>
              • Code conditionnel basé sur la plateforme
            </Text>
            <Text style={styles.architectureText}>
              • Intégration avec les APIs natives
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
    backgroundColor: '#9c27b0',
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
    color: '#e1bee7',
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
    color: '#9c27b0',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  example: {
    backgroundColor: '#f3e5f5',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#9c27b0',
  },
  animationContainer: {
    backgroundColor: '#fff9c4',
    height: 100,
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
  },
  animatedBox: {
    width: 50,
    height: 50,
    backgroundColor: '#9c27b0',
    borderRadius: 8,
  },
  animButton: {
    backgroundColor: '#9c27b0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  dimensionsInfo: {
    paddingVertical: 8,
  },
  dimensionText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginVertical: 4,
    backgroundColor: '#fff9c4',
    padding: 8,
    borderRadius: 6,
  },
  statusBarText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 6,
    fontWeight: '500',
  },
  linkButton: {
    backgroundColor: '#9c27b0',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  platformText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7b1fa2',
    marginVertical: 6,
  },
  platformDesc: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
    marginVertical: 4,
  },
  platformDescSpaced: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
    marginVertical: 4,
    marginTop: 10,
  },
  practiceText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 6,
    fontWeight: '500',
  },
  architectureText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginVertical: 6,
  },
});

export default UI4;
