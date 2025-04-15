import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';

export default function Estoque() {
  const [countCadeira, setCountCadeira] = useState(0);
  const [countMesa, setCountMesa] = useState(0);
  const [countPoltrona, setCountPoltrona] = useState(0);
  const [countSofa, setCountSofa] = useState(0);
  const [countTV, setCountTV] = useState(0);
  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.title}>ESTOQUE</Text>
        <View style={styles.row}>
            <Image style={styles.img}source={{uri: 'https://lojasbecker.vtexassets.com/arquivos/ids/3711881/1-cadeira-sala-de-jantar-dj-serena-freij.jpg?v=638739508561200000'}}/>
            <View style={styles.info}>
                <Text style={styles.infoTitle}>Cadeira</Text>
                <Text>Cadeira bem fofa bem boa slk</Text>
                <Text>Em estoque: {countCadeira}</Text>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.btn} onPress={() => setCountCadeira(countCadeira+1)}>+</TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={() => setCountCadeira(countCadeira-1)}>-</TouchableOpacity>
                </View>
            </View>
        </View>
        

        <View style={styles.row}>
        <Image style={styles.img}source={{uri: 'https://abracasa.vteximg.com.br/arquivos/ids/195447/mesa-de-jantar-square-diagonal.jpg?v=638724802375170000'}}/>            
        <View style={styles.info}>
                <Text style={styles.infoTitle}>Mesa</Text>
                <Text>Mesa redonda mt legal</Text>
                <Text>Em estoque: {countMesa}</Text>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.btn} onPress={() => setCountMesa(countMesa+1)}>+</TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={() => setCountMesa(countMesa-1)}>-</TouchableOpacity>
                </View>
            </View>
        </View>


        <View style={styles.row}>
        <Image style={styles.img}source={{uri: 'https://images.tcdn.com.br/img/img_prod/1045128/poltrona_mona_luxo_madeira_macica_castellar_mobile_25_1_914ec28747b37a8a40a7825325b90dd8.jpg'}}/>
        <View style={styles.info}>
                <Text style={styles.infoTitle}>Poltrona</Text>
                <Text>Macia, boa pra passar o tempo</Text>
                <Text>Em estoque: {countPoltrona}</Text>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.btn} onPress={() => setCountPoltrona(countPoltrona+1)}>+</TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={() => setCountPoltrona(countPoltrona-1)}>-</TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.row}>
        <Image style={styles.img}source={{uri: 'https://product-hub-prd.madeiramadeira.com.br/865839/images/9779e265-bd50-420b-9a61-014d576fee0625f641a1a670864908561e6001.jpg'}}/>
        <View style={styles.info}>
                <Text style={styles.infoTitle}>Sofá</Text>
                <Text>Cabe muita gente, uou</Text>
                <Text>Em estoque: {countSofa}</Text>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.btn} onPress={() => setCountSofa(countSofa+1)}>+</TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={() => setCountSofa(countSofa-1)}>-</TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.row}>
        <Image style={styles.img}source={{uri: 'https://images.tcdn.com.br/img/img_prod/1233679/televisao_32_polegadas_google_smart_32phg6918_78_philips_2213_1_12373abf7f2fbe6a4a74db349e6ffda3.jpg'}}/>
        <View style={styles.info}>
                <Text style={styles.infoTitle}>Televisão</Text>
                <Text>Grande demais ta louco</Text>
                <Text>Em estoque: {countTV}</Text>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.btn} onPress={() => setCountTV(countTV+1)}>+</TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={() => setCountTV(countTV-1)}>-</TouchableOpacity>
                </View>
            </View>
        </View>

  </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 150,
    width: 150,
  },
  title: {
    fontWeight: 900,
    fontSize: 26,
    alignSelf: 'center',
    marginBottom: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoTitle: {
    fontWeight: 500,
    fontSize: 20,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 8,
  }
});
