import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import Header from '../screens/comp/Header'
import Client from '../components/Client'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../services/Context'
import { AntDesign } from '@expo/vector-icons'; 
import api from '../services/api'


const DataCollection = () => {

  const [client,setClient] = useState()
  const {user,setUser} = useContext(UserContext)
  
 

  useEffect(()=> {

  async function getZone() {
    const response = await api.get('/connect',{
      headers: {
        'Authorization': `Bearer ${user.token}` 
      }
    })

   setClient(response.data.response.data)

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
        <Header retornar={retornar}/>
      </View>
      {/* <Client/> */}
      <View style={styles.body}>


      <FlatList 
      data={client}
      renderItem={(item)=> <Client  client={item} callScreen={()=>navigation.navigate('DetailClient',item)}/>}
      key={(item)=>item.phone}
      
      
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


export default DataCollection