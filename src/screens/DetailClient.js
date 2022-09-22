import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Header from './comp/Header';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../services/Context';

const DetailClient = ({ route }) => {
  const [client, setClient] = useState(route.params.item);
  const [leitura, setLeitura] = useState(0);
  const [oldLeitura, setOldLeitura] = useState(0);
  const [value, setValue] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {});
  const verLeitura = () => {
    alert(leitura);
  };
  const addLeituraM3 = (add) => {
    const leitura = setLeitura(add);
    console.log(leitura);
  };

  const addLeituraMT = (add) => {
    setLeitura(add);
  };

  const addLeitura2 = (add) => {
    setOldLeitura(add);
  };

  const convertMetical = () => {
    if (leitura > oldLeitura) {
      setValue(25.5 * leitura);
    } else {
      alert('A nova fatura deve ser superior a anterior!');
    }
  };

  const navigation = useNavigation();

  const retornar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View styler={styles.header}>
        <Header
          txt1="Detalhes de leitura"
          txt2={client.cliente_id}
          retornar={retornar}
        />
      </View>

      <View style={styles.body}>
        <TextInput
          style={styles.txtBox1}
          value={client.nome}
          textAlign={'center'}
          fontSize={18}
          editable={false}
        ></TextInput>
        <TextInput
          style={styles.txtBox3}
          value={`${client.no_metros_cubicos} M3`}
          editable={false}
          textAlign={'center'}
          fontSize={18}
          onChangeText={addLeitura2}
        ></TextInput>

        <TextInput
          style={styles.txtBox3}
          value={`${client.saldo} Mts`}
          placeholderTextColor={'black'}
          textAlign={'center'}
          fontSize={18}
          editable={false}
        ></TextInput>
        <TextInput
          style={styles.txtBox3}
          value={
            `${client.activo}` === 0 ? 'Cliente inactivo' : 'Cliente activo'
          }
          textAlign={'center'}
          fontSize={18}
          editable={false}
        ></TextInput>

        <TextInput
          style={styles.txtBox3}
          value={`${client.isento_de_multas}` === 0 ? '' : 'Isento de Multa'}
          textAlign={'center'}
          fontSize={18}
          editable={false}
        ></TextInput>

        <TextInput
          style={styles.txtBox2}
          placeholder="Introduza o valor da leitura em M3"
          placeholderTextColor={'black'}
          textAlign={'center'}
          fontSize={18}
          editable={user.admin === true ? false : true}
          selectTextOnFocus={false}
          onChangeText={(leitura) => setLeitura(leitura)}
        ></TextInput>

        {user.admin === true ? (
          <TextInput
            style={styles.txtBox2}
            placeholder="Nova Leitura (meticais)"
            placeholderTextColor={'black'}
            textAlign={'center'}
            fontSize={18}
            onChangeText={addLeituraMT}
          ></TextInput>
        ) : null}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnLeitura} onPress={verLeitura}>
          <Text style={styles.txtLeitura}>Submeter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default DetailClient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#03293A',
  },

  header: {
    backgroundColor: '#03293A',
    flex: 0.9,
  },

  body: {
    flex: 2,
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  valuem3: {
    flexDirection: 'row',
    marginTop: 50,
  },

  footer: {
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
  },

  txtBox1: {
    textAlign: 'left',
    fontSize: 13,
    textAlignVertical: 'top',
    fontFamily: 'Roboto_900Black',
    marginTop: 10,
    width: 300,
    height: 50,

    color: 'white',
    backgroundColor: 'orange',
    borderColor: 'transparent',

    borderRadius: 50,
  },

  txtBox2: {
    textAlign: 'left',
    textAlignVertical: 'top',
    fontSize: 13,
    fontFamily: 'Roboto_100Thin',
    borderColor: 'orange',
    borderWidth: 2,
    marginTop: 10,
    width: 300,
    height: 50,

    borderRadius: 50,
  },

  txtBox3: {
    textAlign: 'center',
    fontSize: 13,
    textAlignVertical: 'center',
    fontFamily: 'Roboto_900Black',
    borderColor: 'transparent',
    borderWidth: 2,
    marginTop: 10,
    width: 300,
    height: 50,
    backgroundColor: '#03293A',
    color: 'white',
    borderRadius: 50,
  },

  txtLeitura: {
    color: '#fff',
    fontFamily: 'Roboto_900Black',
    fontSize: 18,
    textAlign: 'center',
  },

  billText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Roboto_100Thin',
  },

  billText2: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Roboto_900Black',
  },

  btnLeitura: {
    backgroundColor: '#FFA21A',
    height: 56,
    width: 154,
    padding: 8,
    top: 8,

    marginTop: 18,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  agendaIMG: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 80,
  },

  settingsIMG: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 30,
  },

  alt: {
    flexDirection: 'row',
    color: '#fff',
    justifyContent: 'space-evenly',
    backgroundColor: '#03293A',
    padding: 15,
    width: 200,
    height: 50,
    borderColor: '#FFA21A',
    borderRadius: 10,
    borderWidth: 1,
  },
  alt2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFA21A',
    padding: 15,
    borderRadius: 10,
    width: 100,
    height: 50,
  },

  footerItems: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    position: 'absolute',
    right: 0,
    width: 15,
    height: 25,
  },

  gota1: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    opacity: 0.2,
  },

  imgGotas: {
    position: 'absolute',
    justifyContent: 'space-evenly',
    bottom: 0,
    right: 0,
  },

  gota2: {
    opacity: 0.2,
  },
});
