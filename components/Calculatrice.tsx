import React from "react";
import { TextInput, StyleSheet, View, Alert, TouchableOpacity, Text } from "react-native";

class Calculatrice extends React.Component {
  state = {
    val1: 0,
    val2: 0,
    result: 0,
  };

  // Mettre à jour la première valeur
  handleVal1Change = (text: string) => {
    const num = parseFloat(text) || 0;
    this.setState({ val1: num });
  };

  // Mettre à jour la deuxième valeur
  handleVal2Change = (text: string) => {
    const num = parseFloat(text) || 0;
    this.setState({ val2: num });
  };

  // Somme
  somme = (val1: number, val2: number) => {
    this.setState({ result: val1 + val2 });
  };

  // Soustraction
  soustraction = (val1: number, val2: number) => {
    this.setState({ result: val1 - val2 });
  };

  // Multiplication
  multiplication = (val1: number, val2: number) => {
    this.setState({ result: val1 * val2 });
  };

  // Division
  division = (val1: number, val2: number) => {
    if (val2 === 0) {
      Alert.alert(
                'Erreur',
                'La division par zéro n\'est pas autorisée.'
            );
    } else {
      this.setState({ result: val1 / val2 });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Valeur 1"
          keyboardType="numeric"
          value={this.state.val1.toString()}
          onChangeText={this.handleVal1Change}
        />
        <TextInput
          style={styles.input}
          placeholder="Valeur 2"
          keyboardType="numeric"
          value={this.state.val2.toString()}
          onChangeText={this.handleVal2Change}
        />
        <TextInput
          style={styles.input}
          placeholder="Résultat"
          value={this.state.result.toString()}
          editable={false}
        />

         <View style={styles.operationsContainer}>
            <TouchableOpacity onPress={() => this.somme(this.state.val1, this.state.val2)} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.soustraction(this.state.val1, this.state.val2)} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.multiplication(this.state.val1, this.state.val2)} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>x</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.division(this.state.val1, this.state.val2)} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>/</Text>
          </TouchableOpacity>
          </View>
      </View>

     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
    justifyContent: "center",
    fontSize: 17,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
   operationsContainer: {
    flexDirection: 'row',       // aligne horizontalement
    justifyContent: 'space-around', // espace égal entre les boutons
    alignItems: 'center',       // centre verticalement
    marginTop: 20,
  },
});

export default Calculatrice;
