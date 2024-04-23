import React from "react";
import { View,Button,Alert,StyleSheet,buttonText,Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


function deuxieme({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>C'est ma 2 eme page</Text>
      </View>
    );
  }
  export default deuxieme;