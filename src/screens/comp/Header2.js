import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Client from '../../components/Client'



export default function Header2() {
  return (
    <View style={styles.header}>
        {/* icon */}
      
            
            <Image style={styles.itemImage} source={require('../comp/menu.png')} />


            <View style={styles.headerCentral}>

             <View style={styles.alt}>
             <Text style={styles.headerText}>Leitura</Text>
             </View>
             <View style={styles.alt2}>
             <Text style={styles.headerText2}>0001</Text> 
             </View>

             </View>
            
            <Image style={styles.itemImage} source={require('../comp/pencial.png')} />
            
         
    </View>
  )
}



const styles = StyleSheet.create({
    header: {
        
        marginTop: 50,
        marginBottom: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        color: '#fff',
        fontFamily: 'Roboto_900Black',
    },

    headerText2: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Roboto_100Thin',
    },
    

    headerCentral: {
        flexDirection: 'row',
        

    },

    alt: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#03293A',
        padding: 20,
        borderColor: '#FFA21A',
        borderRadius: 40,
        borderWidth: 0.3
    },
    alt2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFA21A',
        padding: 20,
        borderRadius: 40,
    }
})