import React, { Component } from "react";
import { Text, View, StyleSheet, Button, ScrollView, SafeAreaView } from "react-native";
import CustumButton from "./CustumButton";

class PropsLesson extends Component<any, any> {
    state = {
        count: 0,
        productName: 'Produit 1',
        lastAction: 'Aucune'
    }

    incrementCount = () => {
        this.setState({ 
            count: this.state.count + 1,
            lastAction: 'Compteur incrémenté'
        });
    }

    updateProductName = () => {
        this.setState({ 
            productName: `Produit ${this.state.count + 1}`,
            lastAction: 'Nom du produit mis à jour'
        });
    }

    resetAll = () => {
        this.setState({ 
            count: 0,
            productName: 'Produit 1',
            lastAction: 'Réinitialisé'
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>📦 Démonstration des Props</Text>
                        <Text style={styles.headerSubtitle}>Passage de variables et méthodes</Text>
                    </View>

                    <View style={styles.stateDisplay}>
                        <Text style={styles.stateTitle}>📊 État du Parent (PropsLesson):</Text>
                        <View style={styles.stateContent}>
                            <Text style={styles.stateItem}>▪ Count: <Text style={styles.stateValue}>{this.state.count}</Text></Text>
                            <Text style={styles.stateItem}>▪ ProductName: <Text style={styles.stateValue}>"{this.state.productName}"</Text></Text>
                            <Text style={styles.stateItem}>▪ LastAction: <Text style={styles.stateValue}>{this.state.lastAction}</Text></Text>
                        </View>
                    </View>

                    <View style={styles.parentButtons}>
                        <Text style={styles.sectionTitle}>🔧 Actions du Parent:</Text>
                        <View style={styles.buttonRow}>
                            <View style={styles.buttonWrapper}>
                                <Button 
                                    title="+1 Compteur" 
                                    onPress={this.incrementCount}
                                    color="#4CAF50"
                                />
                            </View>
                        </View>
                        <View style={styles.buttonRow}>
                            <View style={styles.buttonWrapper}>
                                <Button 
                                    title="Changer Produit" 
                                    onPress={this.updateProductName}
                                    color="#00BCD4"
                                />
                            </View>
                        </View>
                        <View style={styles.buttonRow}>
                            <View style={styles.buttonWrapper}>
                                <Button 
                                    title="Réinitialiser" 
                                    onPress={this.resetAll}
                                    color="#9C27B0"
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.explanation}>
                        <Text style={styles.explanationTitle}>💡 Comment ça marche:</Text>
                        <Text style={styles.explanationText}>1️⃣ Le parent (PropsLesson) gère l'état</Text>
                        <Text style={styles.explanationText}>2️⃣ Les props passent les variables et fonctions</Text>
                        <Text style={styles.explanationText}>3️⃣ Les enfants (CustumButton) visualisent les props</Text>
                        <Text style={styles.explanationText}>4️⃣ Quand l'état change, les enfants se re-rendent</Text>
                    </View>

                    <View style={styles.childrenSection}>
                        <Text style={styles.sectionTitle}>👶 Composants Enfants (CustumButton):</Text>
                        
                        <CustumButton
                            title="Incrémenter"
                            onPress={this.incrementCount}
                            count={this.state.count}
                            productName={this.state.productName}
                        />

                        <CustumButton
                            title="Changer Produit"
                            onPress={this.updateProductName}
                            count={this.state.count}
                            productName={this.state.productName}
                        />

                        <CustumButton
                            title="Réinitialiser"
                            onPress={this.resetAll}
                            count={this.state.count}
                            productName={this.state.productName}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f5f5f5'
    },
    header: {
        backgroundColor: '#2196F3',
        padding: 20,
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#e3f2fd',
    },
    stateDisplay: {
        margin: 16,
        padding: 14,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#2196F3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2
    },
    stateTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2196F3',
        marginBottom: 10
    },
    stateContent: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 6
    },
    stateItem: {
        fontSize: 13,
        color: '#333',
        marginVertical: 4,
        fontWeight: '500'
    },
    stateValue: {
        color: '#2196F3',
        fontWeight: 'bold',
        fontFamily: 'monospace'
    },
    parentButtons: {
        margin: 16,
        padding: 14,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50'
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12
    },
    buttonRow: {
        marginVertical: 6
    },
    buttonWrapper: {
        borderRadius: 6,
        overflow: 'hidden'
    },
    explanation: {
        margin: 16,
        padding: 14,
        backgroundColor: '#fff3e0',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#FF9800'
    },
    explanationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF9800',
        marginBottom: 10
    },
    explanationText: {
        fontSize: 13,
        color: '#555',
        marginVertical: 6,
        lineHeight: 18
    },
    childrenSection: {
        margin: 16,
        marginBottom: 30,
        padding: 14,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#FF6B6B'
    }
});

export default PropsLesson;
