import React from "react";
import { View,Button,Alert,StyleSheet,buttonText,Text,ImageBackground } from "react-native";
import CustomBoutton from "../../CustomBoutton/Custom";
import jungko from '../../assets/Jungko.png'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


function Accueil({navigation}) {
    return (
      
      <View style={styles.container}>
         <ImageBackground source={jungko}>  
        <Text>Home Screen</Text>
        
    
      <Text>C'est mwaaassss!</Text>
      <CustomBoutton navigation={navigation}/>
      
      </ImageBackground>
      </View>
      
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    background: {
      flex: 3,
      resizeMode: "cover",
      justifyContent: "center",
     width: '100%'
    },
    ImageBackground: {
      height: '100%',
      width: '100%'
    }


  })

  export default Accueil;