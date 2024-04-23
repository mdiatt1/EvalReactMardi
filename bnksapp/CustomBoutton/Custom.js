import React from "react";
import { View,Button,Alert,StyleSheet,buttonText } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Accueil from "../assets/CustomPage/Accueil";
import deuxieme from "../assets/CustomPage/scPage";

const Stack = createNativeStackNavigator()

function CustomBoutton({navigation}){
    return(
    <View>
      <Button title= "accueil"
      onPress={() => navigation.navigate('deuxieme')}
      />
      <Button title='soul society'
      onPress={() => Alert.alert('Salue c mwaaaa')}
      color = "yellow"/>
      <Button title='Arrancar'
      onPress={() => Alert.alert('T trop moche')}
      color = "red"/>
     </View>
     
)

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
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
      },
  });

  
export default CustomBoutton;