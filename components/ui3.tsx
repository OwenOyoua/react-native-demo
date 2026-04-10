import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert,
  Modal,
  RefreshControl,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const UI3 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const showAlert = () => {
    Alert.alert(
      'Titre de l\'alerte',
      'Ceci est un message d\'alerte simple',
      [
        { text: 'Annuler', onPress: () => console.log('Annuler') },
        { text: 'OK', onPress: () => console.log('OK') },
      ],
    );
  };

  const showConfirmAlert = () => {
    Alert.alert(
      'Confirmation',
      'Êtes-vous sûr de continuer?',
      [
        {
          text: 'Non',
          onPress: () => console.log('Non'),
          style: 'cancel',
        },
        {
          text: 'Oui',
          onPress: () => console.log('Oui'),
          style: 'default',
        },
      ],
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>🎨 Composants Interactifs</Text>
            <Text style={styles.headerSubtitle}>
              Modales, alertes et en-têtes
            </Text>
          </View>

          {/* ActivityIndicator Component */}
          <View style={styles.componentCard}>
            <Text style={styles.title}>ActivityIndicator</Text>
            <Text style={styles.description}>
              Indicateur de chargement circulaire. Idéal pour afficher que
              quelque chose se charge.
            </Text>
            <View style={styles.example}>
              {isLoading ? (
                <View style={styles.loaderContainer}>
                  <ActivityIndicator size="large" color="#ff9800" />
                  <Text style={styles.loadingText}>Chargement en cours...</Text>
                </View>
              ) : (
                <Pressable style={styles.button} onPress={startLoading}>
                  <Text style={styles.buttonText}>Démarrer le chargement</Text>
                </Pressable>
              )}
            </View>
          </View>

          {/* Alert Component */}
          <View style={styles.componentCard}>
            <Text style={styles.title}>Alert</Text>
            <Text style={styles.description}>
              Lance une boîte de dialogue d'alerte avec un titre et un message.
              Supporte plusieurs boutons.
            </Text>
            <View style={styles.example}>
              <Pressable style={styles.button} onPress={showAlert}>
                <Text style={styles.buttonText}>Alerte Simple</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSecondary]}
                onPress={showConfirmAlert}
              >
                <Text style={styles.buttonText}>Alerte Confirmation</Text>
              </Pressable>
            </View>
          </View>

          {/* Modal Component */}
          <View style={styles.componentCard}>
            <Text style={styles.title}>Modal</Text>
            <Text style={styles.description}>
              Composant pour afficher du contenu en overlay. Parfait pour les
              formulaires et dialogues.
            </Text>
            <View style={styles.example}>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.buttonText}>Ouvrir la Modale</Text>
              </Pressable>
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalTitle}>Title de la Modale</Text>
                  <Text style={styles.modalText}>
                    Ceci est le contenu de la modale. Vous pouvez ajouter du
                    texte, des formulaires, des boutons, etc.
                  </Text>
                  <View style={styles.modalButtonContainer}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={styles.buttonText}>Fermer</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          {/* RefreshControl Component */}
          <View style={styles.componentCard}>
            <Text style={styles.title}>RefreshControl</Text>
            <Text style={styles.description}>
              Ajout de la fonctionnalité tirer-pour-rafraîchir dans ScrollView.
              Glissez vers le bas pour actualiser!
            </Text>
            <View style={styles.example}>
              <Text style={styles.refreshHint}>
                ⬇️ Glissez vers le bas pour actualiser
              </Text>
              {refreshing && (
                <View style={styles.refreshingIndicator}>
                  <ActivityIndicator size="small" color="#ff9800" />
                  <Text style={styles.refreshingText}>Actualisation...</Text>
                </View>
              )}
              {!refreshing && (
                <Text style={styles.refreshedText}>✓ À jour</Text>
              )}
            </View>
          </View>

          {/* KeyboardAvoidingView Component */}
          <View style={styles.componentCard}>
            <Text style={styles.title}>KeyboardAvoidingView</Text>
            <Text style={styles.description}>
              Vue qui s'écarte automatiquement du clavier virtuel. Utilisé en
              tant que wrapper du conteneur principal.
            </Text>
            <View style={styles.example}>
              <Text style={styles.featureText}>
                ✓ Évite automatiquement le clavier
              </Text>
              <Text style={styles.featureText}>
                ✓ Ajuste la position du contenu
              </Text>
              <Text style={styles.featureText}>
                ✓ Différent sur iOS et Android
              </Text>
              <Text style={styles.featureNote}>
                (Déjà utilisé comme wrapper principal)
              </Text>
            </View>
          </View>

          {/* Tips Card */}
          <View style={styles.componentCard}>
            <Text style={styles.title}>💡 Bonnes Pratiques</Text>
            <View style={styles.example}>
              <Text style={styles.featureText}>
                • Utilisez Alert pour les actions importantes
              </Text>
              <Text style={styles.featureText}>
                • Modal pour les formulaires complexes
              </Text>
              <Text style={styles.featureText}>
                • ActivityIndicator sur les chargements
              </Text>
              <Text style={styles.featureText}>
                • RefreshControl pour les données dynamiques
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ff9800',
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
    color: '#ffe0b2',
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
    color: '#ff9800',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  example: {
    backgroundColor: '#fff3e0',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#ff9800',
  },
  button: {
    backgroundColor: '#ff9800',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#ffa726',
  },
  buttonClose: {
    backgroundColor: '#f57c00',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  loadingText: {
    marginTop: 10,
    color: '#ff9800',
    fontWeight: '500',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#ff9800',
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#666',
    lineHeight: 20,
  },
  modalButtonContainer: {
    marginTop: 15,
    width: '100%',
  },
  refreshHint: {
    textAlign: 'center',
    color: '#ff9800',
    fontWeight: '500',
    marginBottom: 10,
  },
  refreshingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  refreshingText: {
    marginLeft: 10,
    color: '#ff9800',
    fontWeight: '500',
  },
  refreshedText: {
    textAlign: 'center',
    color: '#4caf50',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 6,
    fontWeight: '500',
  },
  featureNote: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
    fontStyle: 'italic',
  },
});

export default UI3;
