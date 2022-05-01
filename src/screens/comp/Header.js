import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Client from '../../components/Client'
import { Touchable } from 'react-native-web'


export default function Header() {
  return (
    <View style={styles.header}>
        {/* icon */}
      
            
            <Image style={styles.itemImage} source={require('../comp/menu.png')} />


            <View style={styles.headerCentral}>

             <View style={styles.alt}>
             <Text style={styles.headerText}>Regioes</Text>
             </View>
             <View style={styles.alt2}>
             <Text style={styles.headerText}>Leitura</Text> 
             </View>

             </View>
            
            <Image style={styles.itemImage} source={require('../comp/pencial.png')} />
            
         
    </View>
  )
}



const styles = StyleSheet.create({
    header: {
        
        marginTop: 50,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    headerCenter: {
        marginTop: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    },

    headerCentral: {
        flexDirection: 'row',
        

    },

    alt: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#03293A',
        padding: 20,
        borderColor: '#0080BA',
        borderRadius: 40,
        borderWidth: 1
    },
    alt2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#0080BA',
        padding: 20,
        borderRadius: 40,
    }
})