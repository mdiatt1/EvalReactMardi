import React from "react";
import { View,Button,Alert,StyleSheet,buttonText,Text,ImageBackground,FlatList,ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

function Perso({navigation}){
   const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://api-fantsaygame.eu-4.evennode.com/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);
}
export default Perso;

