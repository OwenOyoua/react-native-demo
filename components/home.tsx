import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = () => {

    const [numer, setNumber] = useState(0);

    const updateNumber = ()=>{
        setNumber(numer+1);
    }

  return (
    <>
        <View style={styles.container}>
        <Text style={styles.title}>Page Accueil</Text>
        <Text style={styles.description}>
            Ici c'est un composant d'incrémentation d'un nombre avec le hook useState() de React.
        </Text>

        <Text style={styles.title}>State avec useState()</Text>
        <Text style={styles.description}>{numer}</Text>
        <Button title= 'Incrémenter' onPress={updateNumber}/>
        </View>


    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default Home;