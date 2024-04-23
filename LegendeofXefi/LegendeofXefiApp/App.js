import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './assets/CustomPage/Home';
import Perso from './assets/CustomPage/Perso';
import DetailPerso from './assets/CustomPage/DetailPerso';
import Propos from './assets/CustomPage/Propos';
import { Colors } from 'react-native/Libraries/NewAppScreen';




const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const HomeStack1 = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" option={{ headerShown: false }}>
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <SettingsStack.Screen name="Personnage " component={Perso}options={{ headerShown: false }} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Personnage " >
          {() => (
            <HomeStack.Navigator option={{ headerShown: false }}>
              <HomeStack.Screen name=" " component={Perso}
              options={{ headerShown: false }}
              />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="A propos"
        options={{ headerShown: false }}>
          {() => (
            <HomeStack1.Navigator option={{ headerShown: false }}>
              <HomeStack1.Screen name=" " component={Propos}/>
            </HomeStack1.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
