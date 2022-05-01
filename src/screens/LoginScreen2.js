import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated} from 'react-native'
import React from 'react'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'


const LoginScreen2 = () => {
  return (
    <KeyboardAvoidingView style={styles.background}>

        <View style={styles.containerLogo}>
            <Image source={require('../img/Logologo.png')}/>
        </View>

        <Animated.View style={styles.container}> 
            <TextInput style={styles.input} placeholder="Utilizador/Contacto" onChangeText={()=> {}}/>
            
            <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.submitText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contact}>
                <Text style={styles.contactTxt}>Contactar Administrador</Text>
            </TouchableOpacity>
        </Animated.View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen2


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  containerLogo: {
      flex: 1,
      justifyContent: 'center',
      
     
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
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
      borderColor: '#03A9F4',
      borderWidth: 2
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
      fontSize: 18
  },

  contact: {
      marginTop: 50
  },

  contactTxt: {
      fontSize: 14
  }
  
  
})

