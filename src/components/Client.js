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
          <Text style={styles.itemText}>Casa: {client.item.casa}</Text>
          <Text style={styles.itemTextSmall}>
            Cliente: {client.item.cliente}
          </Text>
        </View>

        {/* <View style={styles.settings}>
          <TouchableOpacity placeholder="Settings">
           <FontAwesome5 name="hand-holding-water" size={24} color="black" />
          </TouchableOpacity>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    width: '90%',
    borderColor: '#ddd',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    marginBottom: 10,
    padding: 10,
    elevation: 1,
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
    fontSize: 18,
    color: 'black',
    fontFamily: 'Roboto_30Black',
    marginLeft: 12,
  },

  itemTextSmall: {
    color: 'grey',
    fontSize: 16,
    fontFamily: 'Roboto_100Black',
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
