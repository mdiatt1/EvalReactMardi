import React from "react";
import { View,Button,Alert,StyleSheet,buttonText,Text,ImageBackground } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import characters from "./Characters";

const Tab = createBottomTabNavigator();
function Home({navigation}){
  return(
    
  <>
  
  <View style={styles.espace}></View>
   <View style={styles.container}>
   
   
      <Text style={styles.titre}>Legends of Xefi</Text>
      
      <Text style={styles.sousTitres}>Bienvenue dans les Terres de Xefi</Text>
      <Text style={styles.paragraph}>Plongez dans le monde enchanté de Legends of Xefi, 
        un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu. 
      </Text>
      <Text style={styles.paragraph}>Dans ce monde peuplé de créatures mythiques, 
de guerriers valeureux et de magiciens aux pouvoirs incommensurables, 
chaque choix que vous faites peut changer le cours de l'histoire.</Text>

<Text style={styles.sousTitres}>Rencontrez des personnages inoubliables</Text>




   </View>
   <View style={styles.bottomText}>
        <Text style={styles.bottomTextContent}>
          <View>
          <Text style={styles.paragraph2}>Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations. </Text>
          <Text style={styles.paragraph2}>Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être. </Text>
          <Text style={styles.paragraph2}>Votre capacité à interagir avec ces personnages déterminera 
votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.</Text>
          </View>
        </Text>
      </View>
  
   </>
   
  );
}

const styles = StyleSheet.create({
  space: {
    height: 50, 
    backgroundColor: "#fff", 
  },
  paragraph: {
    marginBottom: 30,
    fontSize:14, 
    marginLeft:15,
    color:"#3B5998"
    
  },
  titre:{
    fontSize: 24,
    marginTop:20,
    marginBottom: 30,
    textAlign: 'center',
    paddingTop:20,
    color:"#3B5998",
    
  },
  sousTitres:{
    marginBottom: 20,
    fontSize: 18,
    marginLeft:15,
    color:"#3B5998"

  },
  container: {
    flex: 3,
  },
  footer: {
    backgroundColor: "#3B5998", 
    alignItems: "center",
    padding:35
  },
  bottomText: {
    backgroundColor: "#3B5998", 
    padding: 80,
    borderRadius: 3,
    
  },
  bottomTextContent: {
    color: "#fff", 
    textAlign: "center",
    fontSize: 50,
    height:230,
  },
  paragraph2: {
    marginBottom: 30,
    fontSize:14, 
    marginLeft:15,
    color: "#C0C0C0",
  },


});
export default Home;

