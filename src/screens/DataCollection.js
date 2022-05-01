import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../screens/comp/Header'
import Client from '../components/Client'
import { borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const DataCollection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
      </View>
      {/* <Client/> */}
      <View style={styles.body}>
        <Client />
      </View>

      <Image style={styles.gota1} source={require('../img/bg1.png')} />
      <View style={styles.imgGotas}>
      <Image style={styles.gota2} source={require('../img/waterdrop.png')} />
      <Image style={styles.gota2} source={require('../img/waterdrop2.png')} />
      <Image style={styles.gota2} source={require('../img/waterdrop.png')} />

      </View>
      

      
    </View>
  )
}

export default DataCollection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',  
  }, 

  header: {
    backgroundColor: '#03293A',
    flex: 0.6
  },

  body: {
    flex: 2,
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60

  
  },

  clients: {
    backgroundColor: '#fff',
    flex:1
  },

  gota1: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    opacity: 0.2
  },

  imgGotas: {
    position: 'absolute',
    justifyContent: 'space-evenly',
    bottom: 0,
    right: 0,
    
    

  },

  gota2: {
    opacity: 0.2
  }

})