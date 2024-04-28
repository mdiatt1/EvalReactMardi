import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

function Characters({ navigation }) {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = () => {
    fetch('http://api-fantasygame.eu-4.evennode.com/get-characters')
      .then(response => response.json())
      .then(data => {
        setCharacters(data);
      })
      .catch(error => {
        console.error('FETCH ERROR : ', error);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <View>
      <FlatList
        data={characters} // Passer les données à la FlatList
        renderItem={({ item }) => ( // Utiliser renderItem pour afficher chaque élément de la liste
          <View style={styles.characterContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.rarity}>Rareté: {item.rarity}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()} // Utiliser keyExtractor pour fournir une clé unique à chaque élément de la liste
      />
    </View>
  );
}

const styles = StyleSheet.create({
  characterContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor:'#3B5998'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  rarity: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Characters;