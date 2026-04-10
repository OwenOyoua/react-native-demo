import React, { useReducer } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// ── 1. Type de l'état ────────────────────────────────────────────────────────
type State = {
  msg: string;
  heure: string;
};

// ── 2. Actions possibles ─────────────────────────────────────────────────────
type Action =
  | { type: 'SALUER' }
  | { type: 'AU_REVOIR' }
  | { type: 'RESET' };

// ── 3. État initial ───────────────────────────────────────────────────────────
const initialState: State = {
  msg: 'Appuie sur un bouton...',
  heure: '',
};

// ── 4. Reducer : reçoit l'état actuel + une action, retourne le nouvel état ──
function reducer(state: State, action: Action): State {
  const maintenant = new Date().toLocaleTimeString();

  switch (action.type) {
    case 'SALUER':
      return { msg: '👋 Bonjour !', heure: maintenant };
    case 'AU_REVOIR':
      return { msg: '🚪 Au revoir !', heure: maintenant };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// ── 5. Composant ─────────────────────────────────────────────────────────────
function StatesLesson() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>States avec useReducer</Text>
      <Text style={styles.description}>
        useReducer gère des états plus complexes via un reducer et des actions.
      </Text>

      {/* Affichage de l'état */}
      <View style={styles.stateBox}>
        <Text style={styles.stateMsg}>{state.msg}</Text>
        {state.heure ? (
          <Text style={styles.stateHeure}>🕐 {state.heure}</Text>
        ) : null}
      </View>

      {/* Boutons → dispatchent des actions */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#34C759' }]}
        onPress={() => dispatch({ type: 'SALUER' })}
      >
        <Text style={styles.buttonText}>Saluer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF9500' }]}
        onPress={() => dispatch({ type: 'AU_REVOIR' })}
      >
        <Text style={styles.buttonText}>Au revoir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#8E8E93' }]}
        onPress={() => dispatch({ type: 'RESET' })}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  stateBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  stateMsg: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  stateHeure: {
    fontSize: 14,
    color: '#999',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StatesLesson;