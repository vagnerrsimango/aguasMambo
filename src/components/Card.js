import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Card = ({client, callScreen}) => {
    return (
  
    <TouchableOpacity style={styles.item} onPress={callScreen}>
        {/* Cliente */}
        <View style={styles.itemWrapperStyle}>

        <AntDesign name="home" size={40} color="#0080BA" style={styles.home}/>

        <View style={styles.contentWrapper}>
          <Text style={styles.itemText}>Alto Mae</Text>
          <Text style={styles.itemTextSmall}>6 Casas</Text>
        </View>

        <AntDesign name="enter" style={styles.arrow} size={40} color="#0080BA" />

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

  home: {
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
    fontFamily: 'Roboto_90Black',
    marginLeft: 12,
  },

  itemTextSmall: {
    color:'grey',
    fontSize: 20,
    fontFamily: 'Roboto_90Black',
    marginLeft: 12,
    marginBottom: 8
  },

  arrow: {
    left: '500%'
  },

 
});

export default Card;