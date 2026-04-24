import React from 'react';
import { Text, StyleSheet, Button, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<any>;

interface NavigationProps {
  navigation: NavigationProp;
}

function Navigation({ navigation }: NavigationProps) {

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>📚 Navigation</Text>
            
            <Text style={styles.sectionTitle}>Leçons</Text>
            <Button 
                title="→ Demo"
                onPress={() => navigation.navigate('Home')}
            /> 

            <Button 
                title="→ State lesson"
                onPress={() => navigation.navigate('StatesLesson')}
            /> 
            <Button 
                title="→ Props lesson"
                onPress={() => navigation.navigate('PropsLesson')}
            /> 
            <Button 
                title="→ TextInput lesson"
                onPress={() => navigation.navigate('TextInput1')}
            /> 
            <Button 
                title="→ Calculatrice"
                onPress={() => navigation.navigate('Calculatrice')}
            /> 

            <Text style={styles.sectionTitle}>Composants React Native</Text>
            <Button 
                title="📱 UI 1 - Composants de Base"
                onPress={() => navigation.navigate('UI1')}
            /> 
            <Button 
                title="🎮 UI 2 - Interface Utilisateur"
                onPress={() => navigation.navigate('UI2')}
            /> 
            <Button 
                title="🎨 UI 3 - Composants Interactifs"
                onPress={() => navigation.navigate('UI3')}
            /> 
            <Button 
                title="🔧 UI 4 - Avancés & Animations"
                onPress={() => navigation.navigate('UI4')}
            /> 
            <Text style={styles.sectionTitle}>Médias</Text>
            <Button 
                title="🎬 Médias - Images, Vidéos & Audio"
                onPress={() => navigation.navigate('Medias')}
            />     

            <Text style={styles.sectionTitle}>API & Données</Text>
            <Button
                title="☁️ Météo - API OpenWeather"
                onPress={() => navigation.navigate('Weather')}
            />   
            <Button
                title="🎬 Films & Séries - API OMDB"
                onPress={() => navigation.navigate('MoviesApi')}
            />

            </ScrollView>
    );
}   



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6200ee',
        marginTop: 20,
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
    },
});

export default Navigation;


