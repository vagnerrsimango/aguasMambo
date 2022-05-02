import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header2 from './comp/Header2'
import { Roboto_100Thin, Roboto_900Black } from '@expo-google-fonts/roboto'


const DetailClient = () => {
  return (
    <View style={styles.container}>
      <View styler={styles.header}>
      <Header2 />
      </View>

      <View style={styles.body}>
        <TextInput style={styles.txtBox1} placeholder='Identificação' placeholderTextColor={'orange'}></TextInput>
        <TextInput style={styles.txtBox2} placeholder='Leitura anterior' placeholderTextColor={'black'}></TextInput>
        <TextInput style={styles.txtBox3} placeholder='Estado' placeholderTextColor={'black'}></TextInput> 
        
        <View style={styles.valuem3}>


        <View style={styles.alt}>
             <Text style={styles.billText}>Valor em m3</Text>
        </View>

        <View style={styles.alt2}>
             <Text style={styles.billText2}>150 Mts</Text> 
        </View>
        </View>
        </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnLeitura}>
          <Text style={styles.txtLeitura}>Leitura</Text>
        </TouchableOpacity>

        
        <TouchableOpacity>
        <Image style={styles.agendaIMG} source={require('../img/agendar.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image style={styles.settingsIMG} source={require('../img/settingsyellow.png')} />
        </TouchableOpacity>
        
        

   


      
        
      </View>

      {/* <Image style={styles.gota1} source={require('../img/bg1.png')} /> */}
      <View style={styles.imgGotas}>
      {/* <Image style={styles.gota2} source={require('../img/waterdrop.png')} />
      <Image style={styles.gota2} source={require('../img/waterdrop2.png')} />
      <Image style={styles.gota2} source={require('../img/waterdrop.png')} /> */}

      </View>
       <View style={styles.footer}>
         
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
    backgroundColor: '#03293A'
  }, 

  header: {
    backgroundColor: '#03293A',
    flex: 0.9
  },

  body: {
    flex: 2,
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: 'center',
    justifyContent: 'flex-start'

  },

  valuem3: {
    flexDirection: 'row',
    marginTop: 50,
  },

  footer: {
    // backgroundColor: '#03293A',
    height: 50,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    // borderTopLeftRadius: 60,
    // borderTopRightRadius: 60,

  },

  txtBox1: {
    textAlign: 'left',
    fontSize: 13,
    textAlignVertical: 'top',
    fontFamily: 'Roboto_100Thin',
    borderColor: 'orange',
    borderWidth: 2,
    marginTop: 10,
    width: 300,
    height: 50

  },

  txtBox2: {
    textAlign: 'left',
    textAlignVertical: 'top',
    fontSize: 13,
    fontFamily: 'Roboto_100Thin',
    borderColor: '#03293A',
    borderWidth: 2,
    marginTop: 10,
    width: 300,
    height: 50

  },

  txtBox3: {
    textAlign: 'left',
    fontSize: 13,
    textAlignVertical: 'top',
    fontFamily: 'Roboto_100Thin',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 10,
    width: 300,
    height: 50
  },

  txtLeitura: {
    color: '#fff',
    fontFamily: 'Roboto_900Black',
    fontSize: 25,
    textAlign: 'center'
  },

  billText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Roboto_100Thin',
},

  billText2: {
  fontWeight: 'bold',
  fontSize: 15,
  color: '#fff',
  fontFamily: 'Roboto_900Black',
},

  btnLeitura: {
    backgroundColor: '#FFA21A',
    height: 56,
    width: 154,
    padding: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 18,
    marginLeft: 50,
    borderRadius: 60,

  },

  agendaIMG: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 80,

  },

  settingsIMG: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 30

  },

  alt: {
    flexDirection: 'row',
    color: '#fff',
    justifyContent: 'space-evenly',
    backgroundColor: '#03293A',
    padding: 15,
    width: 200,
    height: 50,
    borderColor: '#FFA21A',
    borderRadius: 10,
    borderWidth: 1
},
alt2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFA21A',
    padding: 15,
    borderRadius: 10,
    width: 100,
    height: 50,
},

  footerItems: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    position: 'absolute',
    right: 0,
    width: 15,
    height: 25
// width: 15px;
// height: 25px;
// left: 319px;
// top: 760.32px;


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