import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Client = ({client}) => {

  return (
    <View style={styles.item}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        {/* Cliente */}
        <View style={styles.itemWrapperStyle}>

        <Image style={styles.itemImage} source={require('../img/Vector.png')} />

        <View style={styles.contentWrapper}>
          <Text style={styles.itemText}>{client.item.name}</Text>
          <Text style={styles.itemTextSmall}>{client.item.phone}</Text>
        </View>

        <View style={styles.settings}>
          <TouchableOpacity placeholder="Settings">
          <Image style={styles.itemImage} source={require('../img/settings.png')} />
          </TouchableOpacity>
        </View>

        </View>

  


    
     
      
      

      

      
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    // paddingHorizontal: 16,
    // paddingVertical: 16,
    marginHorizontal: 20,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 100
  },
  itemImage: {
    width: 20,
    height: 20,
    marginRight: 16,

  },

  contentWrapper: {
    justifyContent: 'space-around'
  },

  itemText: {
    fontSize: 16,
    color: '#0080BA',
    fontFamily: 'Roboto_900Black'

  },

  itemTextSmall: {
    color:'grey',
    fontFamily: 'Roboto_900Black'
  },

  settings: {
    position: 'absolute',
    right: 0,
    padding: '40%',
    backgroundColor: '#03293A',
    borderColor: '#FFA219',
    borderRightWidth: 10,
    
    

  },
 
});

export default Client;