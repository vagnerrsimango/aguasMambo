import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const Client = ({ client, callScreen }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={callScreen}>
      {/* Cliente */}
      <View style={styles.itemWrapperStyle}>
        <FontAwesome5
          name="user-alt"
          size={32}
          color="#03293A"
          style={styles.contact}
        />

        <View style={styles.contentWrapper}>
          <Text style={styles.itemText}>Casa: {client.item.cliente_id}</Text>
          <Text style={styles.itemTextSmall}>Cliente: {client.item.nome}</Text>
          <Text style={styles.itemTextSmall}>
            Telefone: {client.item.telefone}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.7,
    width: '100%',
    borderColor: '#ddd',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    marginBottom: 10,
    padding: 2,
  },
  itemImage: {
    width: 20,
    height: 20,
    marginRight: 16,
  },

  contact: {
    marginLeft: 12,
    marginTop: 2,
  },

  contentWrapper: {
    justifyContent: 'space-between',
    marginLeft: 10,
  },

  itemText: {
    fontSize: 16,
    color: 'black',

    marginLeft: 12,
  },

  itemTextSmall: {
    color: 'grey',
    fontSize: 14,
    marginLeft: 12,
    marginBottom: 8,
  },

  settings: {
    position: 'absolute',
    right: 0,
    //backgroundColor: 'red',
    // borderColor: '#FFA219',
    // borderRightWidth: 10,
  },
});

export default Client;
