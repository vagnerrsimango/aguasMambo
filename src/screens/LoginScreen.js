import { StyleSheet, useState, useEffect, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated} from 'react-native'
import React from 'react'



const LoginScreen = () => {

   
  return (
    <KeyboardAvoidingView style={styles.background}>

        <View style={styles.containerLogo}>
            <Image style={styles.img} source={require('../img/logoshadow.png')}/>
        </View>

        <View style={styles.shadow}>
        <Image style={styles.imgShadow} source={require('../img/mainBackground.png')}/>

        </View>

        <View style={styles.container}> 
            <TextInput style={styles.input} placeholder="Utilizador/Contacto" onChangeText={()=> {}}/>
            
            <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.submitText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contact}>
                <Text style={styles.contactTxt}>Contactar Administrador</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  containerLogo: {
      justifyContent: 'center',
      marginTop: 150,
  },

  img: {
      width: 120,
      height: 200,
      resizeMode: 'stretch' 

  },

  shadow: {
      position: 'absolute',
      top: 0,
      right: 0,
  },

  imgShadow: {
      height: 600

  },
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingBottom: 50
  },
  input: {
      backgroundColor: '#fff',
      width: '90%',
      marginBottom: 15,
      color: 'rgba(255,255,255,0.3)',
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
      borderColor: '#03A9F4',
      borderWidth: 2,
      textAlign: 'center'
  },

  btnSubmit: {
      backgroundColor: '#FF9800',
      width: '90%',
      height: 45,
      padding: 10,
      borderRadius: 7
  },

  submitText: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      fontFamily: 'Roboto_900Black'
  },

  contact: {
      marginTop: 50
  },

  contactTxt: {
      fontSize: 14,
      color: 'grey',
      fontFamily: 'Roboto_100Thin'
  }
  
  
})

