import React,{ useState } from "react";
import { View,Button,Alert,StyleSheet,buttonText,Text,ImageBackground,TextInput } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function Contact({navigation}){
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = () => {
      
      Alert.alert(
        "Formulaire soumis",
        `Email: ${email}\nSujet: ${subject}\nMessage: ${message}`,
        [{ text: "OK" }]
      );
      
      setEmail('');
      setSubject('');
      setMessage('');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.titre}>Legends of Xefi</Text>
        <Text style={styles.sousTitres}>Formulaire de Contact :</Text>
        <Text style={[styles.label,styles.blueBorder]}></Text>
        <TextInput
          style={[styles.input,styles.blueBorder]}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Entrez votre email"
        />
  
        <Text style={[styles.label,styles.blueBorder]}></Text>
        <TextInput
          style={[styles.input,styles.blueBorder]}
          value={subject}
          onChangeText={setSubject}
          placeholder="Entrez le sujet"
        />
  
        <Text style={[styles.label,styles.blueBorder]}></Text>
        <TextInput
          style={[styles.input, styles.messageInput,styles.blueBorder]}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
          placeholder="Entrez votre message"
        />
  
        <Button title="Envoyer" onPress={handleSubmit} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    label: {
      fontWeight: "bold",
      marginBottom: 5,
      borderColor: "blue",
    },
    input: {
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 20,
        padding: 50,
        marginBottom: 15,
    },
    messageInput: {
      height: 100,
    },
    blueBorder: {
        borderColor: "#3B5998", 
      },
      titre:{
        fontSize: 24,
        marginTop:20,
        marginBottom: 30,
        textAlign: 'center',
        paddingTop:20,
        color: "#3B5998",
        
      },
    
    sousTitres:{
      marginBottom: 20,
      fontSize: 18,
      marginLeft:15,
      color: "#3B5998",
      display: 'flex'
  
    },
  });
export default Contact;