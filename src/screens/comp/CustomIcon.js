import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 

const CustomIcon =({icon,source='AntDesign'})=>  {
    switch (source){
        case 'FontAwesome':
            return(
                <FontAwesome name={icon} size={28} color="white" />
            )
           
        break;
        default:
            return (
                <AntDesign name={icon} size={28} color="white" />
            )
            
    }
   
}

export default CustomIcon