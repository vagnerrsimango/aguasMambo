import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import HeaderAdmin from './comp/HeaderAdmin'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../services/Context'
import { AntDesign } from '@expo/vector-icons'; 
import api from '../services/api'
import Card from '../components/Card'





const AdminDash = () => {

  const {user,setUser} = useContext(UserContext)
  
  const [zones,setZones]=useState([])



  useEffect(()=> {

  async function getZone() {
    // const response = await api.get('/zones',{
    //   headers: {
    //     'Authorization': `Bearer ${user.token}` 
    //   }
    // })
    const response = await api.get('/zones')

    console.log(response.data)
    setZones(response.data)
  }

  getZone()
  console.log('user do contexto=>',user)
  
  
  },[])
  const navigation = useNavigation()

    const retornar =()=> {
    setUser(null)
    }

   
  

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <HeaderAdmin retornar={retornar}/>
      </View>
      {/* <Client/> */}
      <View style={styles.body}>


      <FlatList
      data={zones}
      renderItem={(item)=> <Card zone={item} callScreen={()=>navigation.navigate('DataCollection',item)}/>}
      key={(item)=>item.id}     
      />
       
      </View>
      </ScrollView> 
      <Image style={styles.gota1} source={require('../img/bg1.png')} />
      <View style={styles.imgGotas}>
      <Image style={styles.gota2} source={require('../img/waterdrop.png')} />
      <Image style={styles.gota2} source={require('../img/waterdrop2.png')} />
      <Image style={styles.gota2} source={require('../img/waterdrop.png')} />
      </View>
    </View>
  )
}


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


export default AdminDash