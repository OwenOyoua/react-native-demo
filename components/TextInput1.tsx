import React from "react";
import {TextInput, StyleSheet, View, Alert, TouchableOpacity, Text} from "react-native";

 class TextInput1 extends React.Component {

    //state initial

    state ={
        email: '',
        password: '',
    }

    //Fo,ction pour mettre à jour l'email
    handleEmailChange = (text: string) => {
        this.setState({email: text});
    }

    //Function pour mettre à jour le mot de passe
    handlePasswordChange = (text: string) => {
        this.setState({password: text});
    }

    //fonction qui affiche une boite de dialogue alert avec les valeurs de l'email et du mot de passe
        
    login =(email: string, password: string) => {
        Alert.alert(
            'Connexion réussie',
            `Email: ${email}\nPassword: ${password}`,
            [
            { text: "OK" }
            ]
        );

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={this.handleEmailChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    secureTextEntry
                />

                <TouchableOpacity onPress={() => this.login(this.state.email, this.state.password)} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Login</Text>
                </TouchableOpacity>
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
    borderColor: '#7a42f4',
    borderWidth: 2
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText:{
    color: 'white',
    textAlign: 'center',
  }
})




export default TextInput1;