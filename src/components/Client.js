import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Client = ({client, callScreen}) => {

  return (
    <TouchableOpacity style={styles.item} onPress={callScreen}>
        {/* Cliente */}
        <View style={styles.itemWrapperStyle}>

        <AntDesign name="contacts" size={48} color="black" />

        <View style={styles.contentWrapper}>
          <Text style={styles.itemText}>{client.item.casa}</Text>
          <Text style={styles.itemTextSmall}>{client.item.cliente}</Text>
        </View>


        {/* <View style={styles.settings}>
          <TouchableOpacity placeholder="Settings">
           <FontAwesome5 name="hand-holding-water" size={24} color="black" />
          </TouchableOpacity>
        </View> */}
        </View>      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
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
    justifyContent: 'space-between',
    marginLeft: 10 
  },

  itemText: {
    fontSize: 20,
    color: '#0080BA',
    fontFamily: 'Roboto_900Black'

  },

  itemTextSmall: {
    color:'grey',
    fontSize: 18,
    fontFamily: 'Roboto_900Black'
  },

  settings: {
    position: 'absolute',
    right: 0,
    padding: '40%',
    // backgroundColor: '#03293A',
    // borderColor: '#FFA219',
    // borderRightWidth: 10,
    
    

  },
 
});

export default Client;