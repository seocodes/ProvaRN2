import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Fale() {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
   <Image style={styles.img}source={{uri:"https://s.tmimgcdn.com/scr/800x500/68000/modelo-de-logotipo-de-imoveis_68097-2-original.jpg"}}/>         
            <Text style={styles.title}>FALE CONOSCO</Text>
            <TextInput style={styles.txtInput} placeholder='Nome'/>
            <TextInput style={styles.txtInput} placeholder='Email'/>
            <TextInput style={styles.msg} placeholder='Mensagem'/>
            <TouchableOpacity style={styles.buttonView}>ENVIAR MENSAGEM</TouchableOpacity>
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
  title: {
    fontWeight: 900,
    fontSize: 26,
    alignSelf: 'center',
    marginBottom: 10,
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
    padding: 15,
    fontFamily: 'Arial',
  },
  msg: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 30,
    margin: 30,
  },
  img: {
    height: 150,
    width: 150,
  }
});
