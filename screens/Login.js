import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image style={styles.img}source={{uri: 'https://lojasbecker.vtexassets.com/arquivos/ids/3711881/1-cadeira-sala-de-jantar-dj-serena-freij.jpg?v=638739508561200000'}}/>
        <Text style={styles.login}>LOGIN</Text>
        <TextInput style={styles.txtInput} placeholder='Email'/>
        <TextInput style={styles.txtInput} placeholder='Senha'/>
        <TouchableOpacity style={styles.buttonView} 
            onPress={() =>
              navigation.navigate('Home')
          }>ENTRAR</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coisas: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontWeight: 900,
    fontSize: 26,
    alignSelf: 'center',
  },
  txtInput: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  buttonView: {
    backgroundColor: 'orange',
    borderRadius: 8,
    padding: 8,
    fontFamily: 'Arial',
  }
});
