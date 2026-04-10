import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import StatesLesson from './components/StatesLesson';
import Navigation from './components/Navigation';
import PropsLesson from './components/propsLesson';
import TextInput1 from './components/TextInput1';
import Calculatrice from './components/Calculatrice';
import UI1 from './components/ui1';
import UI2 from './components/ui2';
import UI3 from './components/ui3';
import UI4 from './components/ui4';


// 3. Créer le Stack avec la liste de paramètres typée
const Stack = createNativeStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigation">
        <Stack.Screen 
          name="Navigation" 
          component={Navigation} 
          options={{ title: 'Bienvenue' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        <Stack.Screen 
          name="StatesLesson" 
          component={StatesLesson} 
        />
        <Stack.Screen 
          name="PropsLesson" 
          component={PropsLesson} 
        />
        <Stack.Screen 
          name="TextInput1" 
          component={TextInput1} 
        />
        <Stack.Screen 
          name="Calculatrice" 
          component={Calculatrice} 
        />
        <Stack.Screen 
          name="UI1" 
          component={UI1} 
          options={{ title: 'Composants de Base' }}
        />
        <Stack.Screen 
          name="UI2" 
          component={UI2} 
          options={{ title: 'Interface Utilisateur' }}
        />
        <Stack.Screen 
          name="UI3" 
          component={UI3} 
          options={{ title: 'Composants Interactifs' }}
        />
        <Stack.Screen 
          name="UI4" 
          component={UI4} 
          options={{ title: 'Avancé & Spécifiques' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;



//npm install @react-navigation/native @react-navigation/native-stack
//npm install react-native-screens react-native-safe-area-context