import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Client = ({client, callScreen}) => {

  return (
    <TouchableOpacity style={styles.item} onPress={callScreen}>
        {/* Cliente */}
        <View style={styles.itemWrapperStyle}>

        <MaterialCommunityIcons name="contacts" size={40} color="#0080BA" style={styles.contact}/>

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
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#ddd',
    borderRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 10,
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
    marginLeft: 10 
  },

  itemText: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Roboto_30Black',
    marginLeft: 12,

  },

  itemTextSmall: {
    color:'grey',
    fontSize: 20,
    fontFamily: 'Roboto_900Black',
    marginLeft: 12,
    marginBottom: 8
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