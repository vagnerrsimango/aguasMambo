import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './comp/Header'

const DetailClient = () => {
  return (
    <View style={styles.container}>
      <View styler={styles.header}>
      <Header />
      </View>
    </View>
  )
}

export default DetailClient

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',  
  }, 
  header: {
    backgroundColor: '#03293A',
    flex: 0.6

  }
})