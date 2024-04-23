import React from "react";
import { View,Button,Alert,StyleSheet,buttonText,Text,ImageBackground } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perso from "./Perso";
import Propos from "./Propos";

const Tab = createBottomTabNavigator();
function Home({navigation}){
  return(
    
  <>
  
  <View style={styles.container}>
      <View style={styles.header}></View>
   <View>
   
   
      <Text style={styles.titre}>Legends of Xefi</Text>
      
      <Text style={styles.sousTitres}>Bienvenue dans les Terres de Xefi</Text>
      <Text style={styles.paragraph}>Plongez dans le monde enchanté de Legends of Xefi, 
        un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu. 
Dans ce monde peuplé de créatures mythiques, 
de guerriers valeureux et de magiciens aux pouvoirs incommensurables, 
chaque choix que vous faites peut changer le cours de l'histoire.</Text>

<Text style={styles.sousTitres}>Explorez des Paysages Envoûtants    </Text>
<Text style={styles.paragraph}>Voyagez à travers des forêts ancestrales, des montagnes interdites et des royaumes souterrains oubliés. 
Chaque région de Xefi offre ses propres défis et ses secrets à découvrir.
 Les graphismes somptueux et les environnements immersifs vous transportent dans un univers où la beauté se mêle au danger.</Text>

 <Text style={styles.sousTitres}>Rencontrez des Personnages Inoubliables</Text>
 <Text style={styles.paragraph}>
Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations. 
Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être. 
Votre capacité à interagir avec ces personnages déterminera 
votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.</Text>


   </View>
  </View>

  
   </>
   
  );
}

const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 30,
    fontSize:14, // Ajoute un espace en bas de chaque paragraphe
    marginLeft:15
  },
  titre:{
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    paddingTop:20
    
  },
  sousTitres:{
    marginBottom: 20,
    fontSize: 18,
    marginLeft:15

  },
  container: {
    flex: 3,
  },
  header: {
    backgroundColor: "#C0C0C0", // Couleur grise
    padding: 35,
    alignItems: "center",
  }

});
export default Home;

