import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomIcon from './CustomIcon';





export default function HeaderAdmin({retornar}) {

    

  return (
    <View style={styles.header}>
        {/* icon */}
      
           <TouchableOpacity onPress={retornar} >
              <CustomIcon icon='angle-left' source='FontAwesome'/>
           </TouchableOpacity>

            <View style={styles.headerCentral}>

             <View style={styles.alt2}>
             <Text style={styles.headerText2}>Administrador</Text> 
             </View>

             </View>
            
            
            
         
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
        
    },
    headerText2: {
        fontSize: 24,
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: 'Roboto_300Thin',
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Roboto_900Black',
    },

    headerCentral: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginLeft: '25%',
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
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#0080BA40',
        paddingHorizontal: 22,
        paddingVertical: 16,
        
        borderRadius: 40,
    }
})