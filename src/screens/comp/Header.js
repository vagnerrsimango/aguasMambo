import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomIcon from './CustomIcon';

export default function Header(props,{ retornar}) {
  const txt1 = props.txt1
  const txt2 = props.txt2
  const itemColor = props.itemColor
  return (
    
    <View style={styles.main}>
      {/* icon */}
      <View>
        <TouchableOpacity style={styles.backBtn} onPress={retornar}>
          <CustomIcon
            icon="angle-left"
            source="FontAwesome"
            style={{ alignItems: 'center' }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headerCentral}>
        <View style={styles.alt}>
          <Text style={[styles.headerText, { fontWeight: 'bold' }]}>
            {props.txt1}
          </Text>
        </View>
        <View style={[styles.alt2, {backgroundColor: '#0080BA',}]}>
          <Text style={styles.headerText}>
            {props.txt2}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  backBtn: {
    position: 'absolute',
    left: '2%',
    width: 'auto',
    height: '45%',
    top: '42%',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    zIndex: 10,
  },
  headerCenter: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerText: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Roboto_300Thin',
  },

  headerCentral: {
    marginTop: '12%',
    marginBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
    borderRadius: 40,
    backgroundColor: '#0080BA',
  },

  alt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03293A',
    borderColor: '#0080BA40',
    borderRadius: 40,
    borderWidth: 0.5,

    paddingHorizontal: 22,
    paddingVertical: 10,
  },

  alt2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
});
