import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'; 




export default function Header({retornar}) {

    

  return (
    <View style={styles.header}>
        {/* icon */}
      
           <TouchableOpacity onPress={retornar} >
           <AntDesign name="logout" size={28} color="white" />
            </TouchableOpacity>

            <View style={styles.headerCentral}>

             <View style={styles.alt}>
                 
             <Text style={styles.headerText}>Regioes</Text>
               
             </View>
             <View style={styles.alt2}>
             <Text style={styles.headerText2}>Leitura</Text> 
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
    headerText2: {
        fontSize: 24,
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: 'Roboto_300Thin',
    },

    headerText: {
        fontSize: 24,
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: 'Roboto_300Thin',
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
        borderWidth: 0.3
    },

    alt2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#0080BA',
        padding: 20,
        borderRadius: 40,
    }
})