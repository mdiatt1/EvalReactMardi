
import { StyleSheet, Text, View,Image,Button,ImageBackground,Alert,HomeScreen } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './assets/CustomPage/Accueil';
import deuxieme from './assets/CustomPage/scPage';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    
    
      
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Accueil}/>
        <Stack.Screen name="deuxieme" component={deuxieme}/>

      </Stack.Navigator>
    </NavigationContainer>
   
 
    
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    color:'#007AFF',
    textShadowColor:'black'
  },

 background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  


  },
});
