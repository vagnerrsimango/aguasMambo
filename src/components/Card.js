import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Card = ({ client, callScreen,zone }) => {
 
  return (
    <TouchableOpacity style={styles.item} onPress={callScreen}>
      {/* Cliente */}
      <View style={styles.itemWrapperStyle}>
        <MaterialCommunityIcons
          name="home"
          size={36}
          color="#0080BA"
          style={styles.home}
        />

        <View style={styles.contentWrapper}>
          <Text style={styles.itemText}>{zone.item.name}</Text>
          <Text style={styles.itemTextSmall}>{zone.item.total} </Text>
        </View>

        <AntDesign
          name="reload1"
          style={styles.arrow}
          size={20}
          color="#0080BA"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.4,
    borderColor: '#ddd',
    borderRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    marginBottom: 6,
  },

  home: {
    marginLeft: 12,
    marginTop: 2,
  },

  contentWrapper: {
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 4
  },

  itemText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Roboto_700Bold',
    marginLeft: 12,
  },

  itemTextSmall: {
    color: 'grey',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    marginLeft: 12,
    marginBottom: 10,
  },

  arrow: {
    position: 'absolute',
    left: '90%',
  },
});

export default Card;
