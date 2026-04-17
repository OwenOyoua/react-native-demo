import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Sound from 'react-native-sound';
// @ts-ignore
import Video from 'react-native-video';

const Medias = () => {
  const [loadingOnlineImage, setLoadingOnlineImage] = useState(true);

  // Références des fichiers audio et vidéo
  const localAudioRef = useRef<Sound | null>(null);
  const onlineAudioRef = useRef<Sound | null>(null);

  // URLs des médias en ligne
  const onlineImageURL =
    'https://reactnative.dev/img/tiny_logo.png';
  const onlineVideoURL =
    'https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4';
  const onlineAudioURL =
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  // Fonction pour charger et jouer un fichier audio
  const playAudio = (isLocal: boolean) => {
    try {
      const audioRef = isLocal ? localAudioRef : onlineAudioRef;
      const fileName = isLocal ? '../assets/audios/26keuss.mp3' : onlineAudioURL;

      if (audioRef.current) {
        audioRef.current.stop(() => {
          audioRef.current?.release();
        });
      }

      audioRef.current = new Sound(
        fileName,
        isLocal ? Sound.MAIN_BUNDLE : '',
        (_error) => {
          if (_error) {
            Alert.alert(
              'Erreur',
              `Impossible de charger le fichier audio: ${_error.message}`,
            );
            return;
          }
          audioRef.current?.play((success) => {
            if (success) {
              // Audio en lecture
            } else {
              Alert.alert('Erreur', 'Erreur lors de la lecture de l\'audio');
            }
          });
        },
      );
    } catch {
      Alert.alert('Erreur', 'Erreur lors de la lecture');
    }
  };

  const pauseAudio = (isLocal: boolean) => {
    const audioRef = isLocal ? localAudioRef : onlineAudioRef;
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const stopAudio = (isLocal: boolean) => {
    const audioRef = isLocal ? localAudioRef : onlineAudioRef;
    if (audioRef.current) {
      audioRef.current.stop(() => {
        audioRef.current?.release();
      });
    }
  };

  // Nettoyer les ressources audio quand le composant se démonte
  React.useEffect(() => {
    const localRef = localAudioRef.current;
    const onlineRef = onlineAudioRef.current;
    
    return () => {
      if (localRef) {
        localRef.stop(() => {
          localRef.release();
        });
      }
      if (onlineRef) {
        onlineRef.stop(() => {
          onlineRef.release();
        });
      }
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🎬 Gestion des Médias</Text>
          <Text style={styles.headerSubtitle}>
            Images, vidéos & audio (locales et en ligne)
          </Text>
        </View>

        {/* IMAGES SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🖼️ Images</Text>

          {/* Image Locale */}
          <View style={styles.mediaCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.mediaTitle}>📱 Image Locale</Text>
              <Text style={styles.mediaType}>Depuis les assets</Text>
            </View>
            <Text style={styles.description}>
              Les images locales sont stockées dans le projet et chargées au
              démarrage. Parfait pour les logos et icônes.
            </Text>
            <View style={styles.mediaContainer}>
              <Image
                source={require('../assets/img/mosque_hassan2.jpg')}
                style={styles.localImage}
              />
            </View>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                &lt;Image{'\n'}  source={'{'}require('../assets/image.png'){'}'}
                {'\n'}  style={'{'}width: 200, height: 200{'}'}
                {'\n'}/&gt;
              </Text>
            </View>
          </View>

          {/* Image en Ligne */}
          <View style={styles.mediaCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.mediaTitle}>🌐 Image en Ligne</Text>
              <Text style={styles.mediaType}>Depuis une URL</Text>
            </View>
            <Text style={styles.description}>
              Les images distantes sont téléchargées depuis Internet. Nécessite
              une connexion réseau.
            </Text>
            <View style={styles.mediaContainer}>
              {loadingOnlineImage && (
                <View style={styles.loaderContainer}>
                  <ActivityIndicator size="large" color="#6200ee" />
                  <Text style={styles.loadingText}>Chargement...</Text>
                </View>
              )}
              <Image
                source={{ uri: onlineImageURL }}
                style={styles.onlineImage}
                onLoadEnd={() => setLoadingOnlineImage(false)}
              />
            </View>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                &lt;Image{'\n'}  source={'{'}uri: 'https://...'{'}'}
                {'\n'}  style={'{'}width: 200, height: 200{'}'}
                {'\n'}/&gt;
              </Text>
            </View>
          </View>
        </View>

        {/* VIDEOS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎥 Vidéos</Text>

          {/* Vidéo Locale */}
          <View style={styles.mediaCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.mediaTitle}>📱 Vidéo Locale</Text>
              <Text style={styles.mediaType}>Depuis les assets</Text>
            </View>
            <Text style={styles.description}>
              Les vidéos locales sont intégrées au projet. Vidéos disponibles:
              26keuss.mp4 et demo-admin.mp4
            </Text>
            <View style={styles.mediaContainer}>
              <Video
                source={require('../assets/videos/26keuss.mp4')}
                style={styles.video}
                controls={true}
                resizeMode="contain"
              />
            </View>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`import Video from 'react-native-video';\n`}
                {`\n`}
                {`<Video\n`}
                {`  source={require('../assets/videos/26keuss.mp4')}\n`}
                {`  style={{width: 300, height: 200}}\n`}
                {`  controls={true}\n`}
                {`/>`}
              </Text>
            </View>
            <Pressable style={styles.installButton}>
              <Text style={styles.installButtonText}>
                ✅ react-native-video installé
              </Text>
            </Pressable>
          </View>

          {/* Vidéo Locale 2 */}
          <View style={styles.mediaCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.mediaTitle}>📱 Vidéo Locale (2)</Text>
              <Text style={styles.mediaType}>Depuis les assets</Text>
            </View>
            <Text style={styles.description}>
              Deuxième vidéo locale disponible: demo-admin.mp4
            </Text>
            <View style={styles.mediaContainer}>
              <Video
                source={require('../assets/videos/demo-admin.mp4')}
                style={styles.video}
                controls={true}
                resizeMode="contain"
              />
            </View>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`<Video\n`}
                {`  source={require('../assets/videos/demo-admin.mp4')}\n`}
                {`  style={{width: 300, height: 200}}\n`}
                {`  controls={true}\n`}
                {`/>`}
              </Text>
            </View>
          </View>

          {/* Vidéo en Ligne */}
          <View style={styles.mediaCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.mediaTitle}>🌐 Vidéo en Ligne</Text>
              <Text style={styles.mediaType}>Depuis une URL</Text>
            </View>
            <Text style={styles.description}>
              Streamé depuis Internet. Idéal pour les plateformes comme YouTube,
              Vimeo ou serveurs personnalisés.
            </Text>
            <View style={styles.mediaContainer}>
              <Video
                source={{ uri: onlineVideoURL }}
                style={styles.video}
                controls={true}
                resizeMode="contain"
              />
            </View>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`<Video\n`}
                {`  source={{uri: 'https://...'}}\n`}
                {`  style={width: 300, height: 200}\n`}
                {`  controls={true}\n`}
                {`/>`}
              </Text>
            </View>
            <Pressable style={styles.linkButton}>
              <Text style={styles.linkButtonText}>
                🔗 Voir cet exemple
              </Text>
            </Pressable>
          </View>
        </View>

        {/* AUDIO SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎵 Audio</Text>

          {/* Audio Local */}
          <View style={styles.mediaCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.mediaTitle}>📱 Audio Local</Text>
              <Text style={styles.mediaType}>Depuis les assets</Text>
            </View>
            <Text style={styles.description}>
              Les fichiers audio (MP3, WAV, etc.) stockés localement: 26keuss.mp3.
              Utilise react-native-sound ou AVAudioPlayer.
            </Text>
            <View style={styles.audioPlayer}>
              <Text style={styles.audioTitle}>🎵 26keuss.mp3</Text>
              <Text style={styles.audioSubtitle}>Fichier audio local</Text>
              <View style={styles.audioControls}>
                <Pressable 
                  style={styles.audioButton}
                  onPress={() => playAudio(true)}
                >
                  <Text style={styles.audioButtonText}>▶️ Play</Text>
                </Pressable>
                <Pressable 
                  style={styles.audioButton}
                  onPress={() => pauseAudio(true)}
                >
                  <Text style={styles.audioButtonText}>⏸️ Pause</Text>
                </Pressable>
                <Pressable 
                  style={styles.audioButton}
                  onPress={() => stopAudio(true)}
                >
                  <Text style={styles.audioButtonText}>⏹️ Stop</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`import Sound from 'react-native-sound';\n`}
                {`\n`}
                {`const audioFile = new Sound(\n`}
                {`  '26keuss.mp3',\n`}
                {`  Sound.MAIN_BUNDLE,\n`}
                {`  error => {\n`}
                {`    if (!error) audioFile.play();\n`}
                {`  }\n`}
                {`);`}
              </Text>
            </View>
            <Pressable style={styles.installButton}>
              <Text style={styles.installButtonText}>
                📦 npm install react-native-sound
              </Text>
            </Pressable>
          </View>

          {/* Audio en Ligne */}
          <View style={styles.mediaCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.mediaTitle}>🌐 Audio en Ligne</Text>
              <Text style={styles.mediaType}>Depuis une URL</Text>
            </View>
            <Text style={styles.description}>
              Streaming audio depuis Internet. Supporte les podcasts, radios et
              musique en ligne.
            </Text>
            <View style={styles.audioPlayer}>
              <Text style={styles.audioTitle}>🎙️ Podcast / Musique</Text>
              <Text style={styles.audioSubtitle}>{onlineAudioURL}</Text>
              <View style={styles.audioControls}>
                <Pressable 
                  style={styles.audioButton}
                  onPress={() => playAudio(false)}
                >
                  <Text style={styles.audioButtonText}>▶️ Play</Text>
                </Pressable>
                <Pressable 
                  style={styles.audioButton}
                  onPress={() => pauseAudio(false)}
                >
                  <Text style={styles.audioButtonText}>⏸️ Pause</Text>
                </Pressable>
                <Pressable 
                  style={styles.audioButton}
                  onPress={() => stopAudio(false)}
                >
                  <Text style={styles.audioButtonText}>⏹️ Stop</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`const audioFile = new Sound(\n`}
                {`  'https://...',\n`}
                {`  '',\n`}
                {`  error => { if (!error) audioFile.play(); }\n`}
                {`);`}
              </Text>
            </View>
          </View>
        </View>

        {/* TIPS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 Conseils & Bonnes Pratiques</Text>
          <View style={styles.tipsCard}>
            <Text style={styles.tipTitle}>📱 Images Locales:</Text>
            <Text style={styles.tipText}>
              • Chargement immédiat (pas de réseau){'\n'}
              • Idéal pour les petits fichiers{'\n'}
              • Augmente la taille de l'APK/IPA
            </Text>
          </View>
          <View style={styles.tipsCard}>
            <Text style={styles.tipTitle}>🌐 Médias en Ligne:</Text>
            <Text style={styles.tipText}>
              • Réduction de la taille de l'app{'\n'}
              • Mise à jour sans redéploiement{'\n'}
              • Nécessite une connexion réseau
            </Text>
          </View>
          <View style={styles.tipsCard}>
            <Text style={styles.tipTitle}>⚙️ Performances:</Text>
            <Text style={styles.tipText}>
              • Compresser les images avant upload{'\n'}
              • Utiliser des formats optimisés (webp){'\n'}
              • Implémenter le caching pour les médias
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
    backgroundColor: '#e91e63',
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
    color: '#f8bbd0',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    marginLeft: 6,
  },
  mediaCard: {
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 14,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    marginBottom: 10,
  },
  mediaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e91e63',
    marginBottom: 4,
  },
  mediaType: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 12,
  },
  mediaContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
    minHeight: 120,
  },
  localImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  onlineImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  video: {
    width: '100%',
    height: 220,
    backgroundColor: '#000',
    borderRadius: 8,
  },
  loaderContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 12,
  },
  errorText: {
    color: '#e91e63',
    fontSize: 12,
    marginTop: 10,
  },
  placeholderContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  videoPlaceholder: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  placeholderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  placeholderSubtext: {
    color: '#aaa',
    fontSize: 12,
  },
  audioPlayer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#e91e63',
  },
  audioTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  audioSubtitle: {
    fontSize: 11,
    color: '#999',
    marginBottom: 10,
    fontFamily: 'monospace',
  },
  audioControls: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  audioButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  audioButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  codeBlock: {
    backgroundColor: '#263238',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  codeText: {
    color: '#aed581',
    fontFamily: 'monospace',
    fontSize: 11,
    lineHeight: 16,
  },
  installButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  installButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  linkButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  tipsCard: {
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 14,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#e91e63',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e91e63',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
});

export default Medias;
