import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  count: number;
  productName: string;
}

function CustumButton({ title, onPress, count, productName }: CustomButtonProps) {

    return (
        <View style={styles.container}>
            <View style={styles.propsDisplay}>
                <Text style={styles.propsTitle}>📤 Props reçues:</Text>
                <Text style={styles.propsText}>• Title: "{title}"</Text>
                <Text style={styles.propsText}>• ProductName: "{productName}"</Text>
                <Text style={styles.propsText}>• Count: {count}</Text>
                <Text style={styles.propsText}>• onPress: {typeof onPress}</Text>
            </View>
            <Button title={title} onPress={onPress} color="#FF6B6B" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        padding: 16,
        marginVertical: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#FF6B6B'
    },
    propsDisplay: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 6,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#FF6B6B'
    },
    propsTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF6B6B',
        marginBottom: 8
    },
    propsText: {
        fontSize: 12,
        color: '#333',
        marginVertical: 4,
        fontFamily: 'monospace'
    }
});

export default CustumButton;
